import Stripe from "stripe";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const stripe = Stripe(process.env.STRIPE_KEY);

const createCheckoutSession = asyncHandler(async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price: 'price_1PA60LSAebfcjcE8JXo6k8Gb',
        quantity: 1
      }
    ],
    mode: 'payment',
    return_url: `http://localhost:3000/return?session_id={CHECKOUT_SESSION_ID}`,
  })
  
  console.log(session.id)
  return res.send({clientSecret: session.client_secret})
})

const sessionStatus = asyncHandler(async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.sessionId)
  console.log(session.status)
  return res.send({
    status: session.status,
    customer_email: session.customer_details.email
  })
})

export { createCheckoutSession, sessionStatus };
