// verifying the jwt from the login session and adding the user data to the req body.

import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // extract the token from cookies or the request header
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized Request.");
    }

    // decode the token using the access token secret
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // extract the user based on the id in the token
    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token.");
    }

    // add the user to the req body.
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message, "Invalid Access Token.");
  }
});

const verifyTokenAndAuthorization = asyncHandler(async (req, res, next) => {
  verifyJWT(req, res, () => {
    if (req.user._id || req.user.isAdmin) {
      next();
    } else {
      throw new ApiError(403, "Unauthorized request.");
    }
  });
});

export { verifyJWT, verifyTokenAndAuthorization };
