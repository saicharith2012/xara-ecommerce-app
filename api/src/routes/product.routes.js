import { Router } from "express";

import {
  verifyJWT,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/auth.middlware.js";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
} from "../controllers/product.controllers.js";

const router = Router();

// add product
router.route("/create-product").post(verifyTokenAndAdmin, createProduct);

// update product
router.route("/update-product/:id").put(verifyTokenAndAdmin, updateProduct);

// delete product
router.route("/delete-product/:id").delete(verifyTokenAndAdmin, deleteProduct);

// get product details
router.route("/get-product/:id").get(getProductDetails);

// get all products
router.route("/all-products").get(getAllProducts);

export default router;
