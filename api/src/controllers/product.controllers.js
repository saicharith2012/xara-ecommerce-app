import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { Product } from "../models/product.models.js";

// ADMIN PRIVILEGES
// create product
const createProduct = asyncHandler(async (req, res) => {
  const { title, description, image, gender, type, size, color, price } =
    req.body;

  // check if product already exists
  const existingProduct = await Product.findOne({ title });

  if (existingProduct) {
    throw new ApiError(409, "Product already exists.");
  }

  const newProduct = await Product.create({
    title,
    description,
    image,
    gender,
    type,
    size,
    color,
    price,
  });

  if (!newProduct) {
    throw new ApiError(500, err?.message, "Product creation failed.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, newProduct, "Product added successfully."));
});

// update product
const updateProduct = asyncHandler(async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );

  if (!updatedProduct) {
    throw new ApiError(500, err?.message, "Update failed. :/");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedProduct, "Product updated successfully.")
    );
});

// delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const user = await Product.findByIdAndDelete(req.params?.id);

  if (!user) {
    throw new ApiError(404, "product not found.");
  }

  return res.status(200).json(200, "product deleted successfully.");
});

// USER PRIVILEGES
// get product details
const getProductDetails = asyncHandler(async (req, res) => {
  const productDetails = await Product.findById(req.params?.id);

  if (!productDetails) {
    throw new ApiError(404, "Product not found.");
  }

  return res
    .status(200)
    .json(200, productDetails, "Product details fetched successfully.");
});

// get all products
const getAllProducts = asyncHandler(async (req, res) => {
  let products;

  if (req.query?.new) {
    products = await Product.find().sort({ createdAt: 1 }).limit(6);
  } else if (req.query?.gender || req.query?.type) {
    const filter = {}
    if(req.query.gender) {
      filter.gender = req.query.gender;
    }
    if(req.query.type) {
      filter.type = req.query.type
    }
    products = await Product.find(filter);
  } else {
    products = await Product.find();
  }

  if (!products) {
    throw new ApiError(500, "Unable to fetch the products.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully."));
});

export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getAllProducts,
};
