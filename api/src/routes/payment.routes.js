import { Router } from "express";
import { createCheckoutSession, sessionStatus } from "../controllers/stripe.js";

const router = Router();

router.route("/create-checkout-session").post(createCheckoutSession);
router.route("/session-status").get(sessionStatus);

export default router;
