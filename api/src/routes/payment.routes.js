import { Router } from "express";
import { createCheckoutSession, sessionStatus } from "../controllers/stripe.js";
import { verifyJWT } from "../middleware/auth.middlware.js";

const router = Router();

router.route("/create-checkout-session").post(verifyJWT, createCheckoutSession);
router.route("/session-status").get(sessionStatus);

export default router;
