import { Router } from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/auth.middlware.js";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getIncome,
  getUserOrders,
  updateOrder,
} from "../controllers/order.controllers.js";

const router = Router();

// routes

// create-order
router.route("/create-order").post(verifyTokenAndAuthorization, createOrder);

// update order
router.route("/update-order").put(verifyTokenAndAdmin, updateOrder);

// delete order
router.route("/delete-order").delete(verifyTokenAndAuthorization, deleteOrder);

// get user orders
router
  .route("/user-orders/:userId")
  .get(verifyTokenAndAuthorization, getUserOrders);

// get all orders
router.route("/orders").get(verifyTokenAndAdmin, getAllOrders);

// get income
router.route("/income").get(verifyTokenAndAdmin, getIncome)


export default router;
