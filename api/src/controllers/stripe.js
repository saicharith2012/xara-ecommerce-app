import Stripe from "stripe";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { Order } from "../models/order.models.js";

const frontendDomain = process.env.FRONTEND_DOMAIN;

const createCheckoutSession = asyncHandler(async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    const products = req.body.products;

    const amount = req.body.total;

    if (!products) {
      return res.status(400).json({ error: "Cart is empty." });
    }

    // fetching or creating customer Id
    let customer = user.stripeCustomerId;
    if (!customer) {
      const stripeCustomer = await stripe.customers.create({
        email: user.email,
      });

      customer = stripeCustomer.id;
      user.stripeCustomerId = customer;
      await user.save({ validateBeforeSave: false });
    }

    // console.log(products)

    // products as line items
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
          images: [product.image],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.productQuantity,
    }));
    // console.log(lineItems);

    // creating session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      success_url: `${frontendDomain}/return?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendDomain}/cart`,
      customer: customer,
      metadata: { userId: userId.toString() },
    });

    // creating a pending order
    const newOrder = Order.create({
      products: products.map((product) => ({
        product: product._id,
        quantity: product.productQuantity,
      })),
      user: userId,
      status: "pending",
      amount: amount,
    });

    res
      .status(200)
      .json(
        new ApiResponse(200, { sessionId: session.id }, "Payment Successful.")
      );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const sessionStatus = asyncHandler(async (req, res) => {
  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(
      req.query.sessionId
    );

    const lineItems = await stripe.checkout.sessions.listLineItems(
      req.query?.sessionId,
      { limit: 10 }
    );

    const productImages = await Promise.all(
      lineItems.data.map(async (item) => {
        const product = await stripe.products.retrieve(item.price.product);
        return product.images;
      })
    );

    return res.send({
      status: session.status,
      customer_email: session.customer_details.email,
      lineItems: lineItems.data.map((item, index) => ({
        ...item,
        productImages: productImages[index],
      })),
    });
  } catch (error) {
    console.error(error.message);
  }
});

export { createCheckoutSession, sessionStatus };
