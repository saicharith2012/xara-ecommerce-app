import { Router } from "express";
import { registerUser, loginUser, changeUserPassword, logoutUser, refreshAccessToken, updateUserData, getCurrentUserData } from "../controllers/user.controllers.js";
import { verifyJWT, verifyTokenAndAuthorization } from "../middleware/auth.middlware.js";


const router = Router();


// register user
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

// change user password
router.route("/change-password").put(verifyTokenAndAuthorization, changeUserPassword)

// refresh access token
router.route("/refresh-tokens").put(verifyTokenAndAuthorization, refreshAccessToken)

// logout user
router.route("/logout").post(verifyTokenAndAuthorization, logoutUser)

// update user data
router.route("/update-user").put(verifyTokenAndAuthorization, updateUserData)

// get current user data
router.route("/user-data").get(verifyTokenAndAuthorization, getCurrentUserData)



export default router;
