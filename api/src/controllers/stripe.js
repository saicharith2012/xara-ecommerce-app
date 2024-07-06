import Stripe from "stripe";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { Order } from "../models/order.models.js";

const YOUR_DOMAIN = "http://localhost:3000";

const createCheckoutSession = asyncHandler(async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    const products = req.body.products;

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
    console.log(lineItems)

    // creating session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      success_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
      customer: customer,
      metadata: { userId: userId.toString() },
    });

    // creating a pending order
    Order.create({
      products: products,
      user: userId,
      status: "pending",
    });

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { sessionId: session.id },
          "Payment Successful."
        )
      );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const sessionStatus = asyncHandler(async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.retrieve(req.query.sessionId);
  console.log(session.status);
  return res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

export { createCheckoutSession, sessionStatus };
