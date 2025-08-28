import mongoose from "mongoose";

const pickupSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "missed"],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pickup", pickupSchema);
