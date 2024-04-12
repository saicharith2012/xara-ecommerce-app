import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import ApiError from "../utils/ApiError.js";
import validator from "validator";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

// method to generate access and refresh tokens
const generateAccessandRefreshToken = async function (userId) {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // save the refresh token in the database without any validation
    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens."
    );
  }
};

// register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  if (
    [firstname, lastname, username, email, password].some(
      (field) => field.trim() === ""
    )
  ) {
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
    firstname,
    lastname,
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
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully."));
});

// user login
const loginUser = asyncHandler(async (req, res) => {
  // take details of the user
  const { email, username, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or email is required.");
  }

  // check if any field are empty
  if (
    (email && [email, password].some((field) => field.trim().length === 0)) ||
    (username &&
      [username, password].some((field) => field.trim().length === 0))
  ) {
    throw new ApiError(400, "All field are must.");
  }

  // checking email and username format
  if (
    !(email
      ? validator.isEmail(email)
      : false || username
      ? validator.isLowercase(username)
      : false)
  ) {
    throw new ApiError(400, "email or username is invalid.");
  }

  // check if the user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (!existedUser) {
    throw new ApiError(404, "user does not exist.");
  }

  // check if the password is correct
  const isPasswordCorrect = await existedUser.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "password is incorrect.");
  }

  // create access and refresh tokens
  const { accessToken, refreshToken } = await generateAccessandRefreshToken(
    existedUser._id
  );

  // send them to the user in the form of cookies
  const loggedInUser = await User.findById(existedUser._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true, // options for cookies to ensure only server can modify them.
  };

  // send response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "user successfully logged in."
      )
    );
});

// refresh the expired access token.
const refreshAccessToken = asyncHandler(async (req, res) => {
  // extract the refresh token from the user cookies.
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request.");
  }
  try {
    // decode
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // find the user with id from the decoded token
    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "invalid refresh token.");
    }

    // check if the token from the user and the token of the user from database matches.
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "refresh token is expired or used.");
    }

    // generate new token method
    const { accessToken, newRefreshToken } =
      await generateAccessandRefreshToken(user?._id);

    const options = {
      httpOnly: true,
      secure: true,
    };

    // send response
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "access token refreshed."
        )
      );
  } catch (error) {
    throw new ApiError(403, error?.message, "Unauthorised token.");
  }
});

// update user password
const changeUserPassword = asyncHandler(async (req, res) => {
  // take the old password and new password from the user.
  const { oldPassword, newPassword } = req.body;

  // extract the user data from the database.
  const user = await User.findById(req.user?._id);

  if (!user) {
    throw new ApiError(400, "unauthorized request.");
  }

  // check if the password matches with the database.
  if (!(await user.isPasswordCorrect(oldPassword))) {
    throw new ApiError(401, "password incorrect.");
  }

  // update the password in the database.
  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  // send response.
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "password updated successfully."));
});

// logout user
const logoutUser = asyncHandler(async (req, res) => {
  // verify user with jwt
  // extract the user details from the req header
  // delete the refreshtoken from the database
  await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  // clear the cookies send response
  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "user logged out successfully."));
});

// update user
const updateUserData = asyncHandler(async (req, res) => {
  // verify jwt and extract user data
  // collect the new data from the user
  const { firstname, lastname, email } = req.body;

  if (!firstname && !lastname && !email) {
    throw new ApiError(401, "firstname and lastname are required.");
  }

  // update the data based on the extracted user id
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        firstname,
        lastname,
        email,
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");

  // send response

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User successfully updated."));
});

// get current user data
const getCurrentUserData = asyncHandler(async (req, res) => {
  // use the data that is added to the header when jwt is verified

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        data: req.user,
      },
      "User data succesfully fetched."
    )
  );
});

// delete user - admin privilege.
const deleteUser = asyncHandler(async (req, res) => {
  // get the user id from the header
  // delete the user from the database
  const user = await User.findByIdAndDelete(req.params?.id);

  if (!user) {
    throw new ApiError(401, "user not found.");
  }
  // send response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, `User ${user.firstname} has been deleted!`));
});

// get any user's data - admin privilege.
const getUserData = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select(
    "-password -refreshToken"
  );

  if (!user) {
    throw new ApiError(400, "User does not exist.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User data successfully fetched."));
});

// get all users - admin privilege
const getAllUsers = asyncHandler(async (req, res) => {
  const query = req.query?.new;

  const users = query
    ? await User.find().sort({ _id: -1 }).limit(5)
    : await User.find();

  res.status(200).json(new ApiResponse(200, users, "users data fetched."));
});

// get user stats -admin privilege
const getUserStats = asyncHandler(async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const data = await User.aggregate([
    {
      $match: {
        createdAt: { $gte: lastYear },
      },
    },
    {
      $project : {
        month : {
          $month : "$createdAt"
        }
      }
    },
    {
      $group : {
        _id : "$month",
        total : {$sum : 1}
      }
    }
  ]);

  return res.status(200).json(
    new ApiResponse(
      200,
      data,
      "User stats successfully fetched."
    )
  )
});

export {
  registerUser,
  loginUser,
  changeUserPassword,
  refreshAccessToken,
  logoutUser,
  updateUserData,
  getCurrentUserData,
  deleteUser,
  getUserData,
  getAllUsers,
  getUserStats,
};
