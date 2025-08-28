const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    enum: ['user', 'admin', 'employee'],
    default: 'user',
  },
  tasks: [
    {
      taskId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'tasks.taskType'
      },
      taskType: {
        type: String,
        enum: ['Pickup', 'Report']
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);