const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { protect, admin } = require('../middleware/authMiddleware');

// Assign a task to an employee
router.post('/assign', protect, admin, taskController.assignTask);

// Update task status
router.put('/:id/status', protect, taskController.updateTaskStatus);

module.exports = router;