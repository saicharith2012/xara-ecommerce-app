import { Router } from "express";
import {
  registerUser,
  loginUser,
  changeUserPassword,
  logoutUser,
  refreshAccessToken,
  updateUserData,
  getCurrentUserData,
  deleteUser,
  getUserData,
  getAllUsers,
  getUserStats,
} from "../controllers/user.controllers.js";
import {
  verifyJWT,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/auth.middlware.js";

const router = Router();

// register user
router.route("/register").post(registerUser);

// login user
router.route("/login").post(loginUser);

// user profile route
router.route("/profile").get(verifyJWT, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ user });
  } catch (error) {
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(500)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ error: error.message });
  }
});

// change user password
router
  .route("/change-password")
  .put(verifyTokenAndAuthorization, changeUserPassword);

// refresh access token
router
  .route("/refresh-tokens")
  .put(verifyTokenAndAuthorization, refreshAccessToken);

// logout user
router.route("/logout").post(verifyTokenAndAuthorization, logoutUser);

// update user data
router.route("/update-user").patch(verifyTokenAndAuthorization, updateUserData);

// get current user data
router
  .route("/current-user-data")
  .get(verifyTokenAndAuthorization, getCurrentUserData);

// delete user
router.route("/delete-user/:id").delete(verifyTokenAndAdmin, deleteUser);

// get user data
router.route("/user/:id").get(verifyTokenAndAdmin, getUserData);

// get all users
router.route("/all-users").get(verifyTokenAndAdmin, getAllUsers);

// get user stats
router.route("/user-stats").get(verifyTokenAndAdmin, getUserStats);

export default router;
