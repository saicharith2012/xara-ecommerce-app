import express, { Router } from "express";
import { createCheckoutSession, sessionStatus } from "../controllers/stripe.js";
import { verifyJWT } from "../middleware/auth.middlware.js";
import { Order } from "../models/order.models.js";
import Stripe from "stripe";

const router = Router();

router.route("/create-checkout-session").post(verifyJWT, createCheckoutSession);
router.route("/session-status").get(verifyJWT, sessionStatus);

router
  .route("/webhook")
  .post(express.raw({ type: "application/json" }), async (req, res) => {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      console.log("Webhook signature verification failed: ", error.message);
      return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const userId = session.metadata.userId;
      const paymentIntentId = session.payment_intent;

      try {
        const order = await Order.findOne({
          user: userId,
          status: "pending",
        });
        if (!order) {
          return res.status(404).json({ error: "Pending order not found." });
        }

        const address = session.customer_details.address;

        // 2. Update order status and payment details
        order.status = "success";
        order.address = `${address.line1}, ${address.line2}, ${address.city}, ${address.state}, ${address.country}, ${address.postal_code}`;
        order.paymentId = paymentIntentId;
        await order.save({ validateBeforeSave: false });
      } catch (err) {
        console.error("Error handling successful payment:", err);
      }
    }

    return res.json({ received: true });
  });

export default router;
