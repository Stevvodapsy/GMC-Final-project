import express from "express";
const router = express.Router();
import * as taskController from "../controllers/taskController.js";

// Assign a task to an employee
router.post("/assign", taskController.assignTask);

// Update task status
router.put("/:id/status", taskController.updateTaskStatus);

export default router;
