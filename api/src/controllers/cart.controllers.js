import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { Cart } from "../models/cart.models.js";

// create cart
const createCart = asyncHandler(async (req, res) => {
  const cart = new Cart(req.body);

  if (!cart) {
    throw new ApiError(500, "cart creation failed.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart successfully created."));
});

// update cart
const updateCart = asyncHandler(async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(
    req.params?.id,
    {
      $set: req.body,
    },
    { new: true }
  );

  if (!updatedCart) {
    throw new ApiError(500, "Cart updation failed.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Cart updated successfully."));
});

// delete cart
const deleteCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findByIdAndDelete(req.params?._id);

  if (!cart) {
    throw new ApiError(500, "Cart deletion failed.");
  }

  return res.status(200).json(200, {}, "Cart deleted successfully.");
});

// get user cart
const getUserCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params?.userId });

  if (!cart) {
    throw new ApiError(500, "Something went wrong while fetching the cart.");
  }

  res
    .status(200)
    .json(new ApiResponse(200, cart, "Cart successfully fetched."));
});

// get all carts - admin privilege
const getAllCarts = asyncHandler(async (req, res) => {
  const carts = await Cart.find();

  if (!carts) {
    throw new ApiError(500, "Something went wrong while fetching the carts.");
  }

  return res.status(200).json(200, carts, "Carts fetched successfully.");
});

export { createCart, updateCart, deleteCart, getUserCart, getAllCarts };
