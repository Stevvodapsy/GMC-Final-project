const Task = require('../database/Tasks');
const User = require('../database/Users');

// @desc    Assign a task to an employee
// @route   POST /api/tasks/assign
// @access  Private/Admin
const assignTask = async (req, res) => {
  const { employeeId, taskId, taskType } = req.body;

  try {
    const employee = await User.findById(employeeId);
    if (!employee || employee.role !== 'employee') {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const task = await Task.create({
      type: taskType,
      details: taskId,
      assignedTo: employeeId
    });

    employee.tasks.push({ taskId: task._id, taskType });
    await employee.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update task status
// @route   PUT /api/tasks/:id/status
// @access  Private
const updateTaskStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Ensure the user is authorized to update the task
    if (req.user.role !== 'admin' && task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized to update this task' });
    }

    task.status = status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  assignTask,
  updateTaskStatus,
};