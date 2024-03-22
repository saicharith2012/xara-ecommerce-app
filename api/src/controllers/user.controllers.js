import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import validator from "validator";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are mandatory");
  }

  // checking email and username format
  if (!validator.isEmail(email)) {
    throw new ApiError(400, "email is invalid.");
  }

  if (!validator.isLowercase(username)) {
    throw new ApiError(400, "username should be lowercase.");
  }

  // check if the user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "username or email already exists.");
  }

  // create a new user in the database
  const user = await User.create({
    username,
    email,
    password,
  });

  // remove the password and refresh token from the response
  const createdUser = await User.findById(user._id).select("-password");

  // check if the user is created
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user.");
  }

  // send response
  return res.status(201).json(new ApiResponse(201, createdUser, "User created successfully."))
});



export { registerUser };
