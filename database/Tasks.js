const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Pickup', 'Report']
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'type'
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);