const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  submissions:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskSubmission'
  }] 
}, { timestamps: true });

const Tasks = mongoose.model('Tasks', TaskSchema);

module.exports = Tasks;
