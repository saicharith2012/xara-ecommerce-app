import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    stripeCustomerId: {
      type: String,
    },
  },
  { timestamps: true }
);

// hashing the password
// callback function cannot be an arrow function since it cannot access the global context.
userSchema.pre("save", async function (next) {
  // hash the password only when it is modified.
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// adding custom method to check if the password is correct
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// custom method for generating an access token.
userSchema.methods.generateAccessToken = async function () {
  try {
    const token = await jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
    
    return token
  } catch (error) {
    throw new ApiError(500, error.message)
  }
};

// custom method for generating a refresh token.
userSchema.methods.generateRefreshToken = async function () {

  try {
    return jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );

    return token;
  } catch (error) {
    throw new ApiError(500, error.message)
  }

};

export const User = mongoose.model("User", userSchema);
