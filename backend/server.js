import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import reportsRoutes from "./routes/reports.js";
import pickupsRoutes from "./routes/pickups.js";
import rewardsRoutes from "./routes/rewards.js";
import tasksRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/pickups", pickupsRoutes);
app.use("/api/rewards", rewardsRoutes);
app.use("/api/tasks", tasksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
