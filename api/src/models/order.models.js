import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 1,
          },
        },
      ],
    },
    amount: {
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "cancelled", "success"]
    }
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
