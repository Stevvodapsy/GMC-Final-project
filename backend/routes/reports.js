import express from "express";
import { getAllReports } from "../controllers/reportController.js";

const router = express.Router();

// Add your report routes here
router.get("/", getAllReports);

export default router;
