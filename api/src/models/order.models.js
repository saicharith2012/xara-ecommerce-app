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
          productId: {
            type: String,
          },
          quantity: {
            type: Number,
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
        enum: ["pending", "cancelled", "delivered"]
    }
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
