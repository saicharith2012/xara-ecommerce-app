import { Router } from "express";

import { verifyJWT, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/auth.middlware.js";
import { createCart, deleteCart, getAllCarts, getUserCart, updateCart } from "../controllers/cart.controllers.js";

const router = Router()

// create cart
router.route('/create-cart').post(verifyJWT, createCart)

// update cart
router.route('/update-cart/:id').put(verifyTokenAndAuthorization, updateCart)

// delete cart 
router.route('/delete-cart/:id').delete(verifyTokenAndAuthorization, deleteCart)

// get cart 
router.route('/get-cart/:userId').get(verifyTokenAndAuthorization, getUserCart)

// get all carts
router.route('/all-carts').get(verifyTokenAndAdmin, getAllCarts)



export default router