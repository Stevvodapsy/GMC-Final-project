import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    role: {
      type: String,
      enum: ["user", "admin", "employee"],
      default: "user",
    },
    tasks: [
      {
        taskId: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: "tasks.taskType",
        },
        taskType: {
          type: String,
          enum: ["Pickup", "Report"],
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
