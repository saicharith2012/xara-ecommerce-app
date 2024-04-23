import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Order } from "../models/order.models.js";

// create order
const createOrder = asyncHandler(async (req, res) => {
  const newOrder = new Order(req.body);

  const savedOrder = await newOrder.save();

  if (!savedOrder) {
    throw new ApiError(500, "Order creation failed.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, savedOrder, "Order successfully placed."));
});

// update order - admin privilige
const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params?.id,
    {
      $set: req.body,
    },
    { new: true }
  );

  if (!updatedOrder) {
    throw new ApiError(500, "Order updation failed.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, updatedOrder, "Order updated successfully."));
});

// delete order
const deleteOrder = asyncHandler(async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params?._id);

  if (!deletedOrder) {
    throw new ApiError(500, "Order deletion failed.");
  }

  return res.status(200).json(200, {}, "Order deleted successfully.");
});

// get user orders
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.params?.userId });

  if (!orders) {
    throw new ApiError(500, "Something went wrong while fetching the cart.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, orders, "Cart successfully fetched."));
});

// get all orders - admin privilege
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();

  if (!orders) {
    throw new ApiError(500, "Something went wrong while fetching the orders.");
  }

  return res.status(200).json(200, orders, "Orders fetched successfully.");
});

// get income - admin privilege
const getIncome = asyncHandler(async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  const income = await Order.aggregate([
    {
      $match: {
        createdAt: { $gte: previousMonth },
      },
    },
    {
      $project: {
        month: {
          $month: "$createdAt",
        },

        sales: "$amount",
      },
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales" },
      },
    },
  ]);

  if (!income) {
    throw new ApiError(500, "Something went wrong while fetching the data.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, income, "Income data successfully fetched."));
});

export {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrders,
  getAllOrders,
  getIncome,
};
