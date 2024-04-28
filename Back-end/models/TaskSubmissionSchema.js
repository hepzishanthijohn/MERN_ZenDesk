const mongoose = require('mongoose');

const taskSubmissionSchema = new mongoose.Schema({
  taskTitle:{
    type: String,
    ref: "Tasks",
    default: null
  },
  username: {
    type: String,
    required: true,
    ref:"student"
  },
  submission: {
    frontendSrcCode: {
      type: String,
      default: null
    },
    backendSrcCode: {
      type: String,
      default: null
    },
    frontendDeployedUrl: {
      type: String,
      default: null
    },
    backendDeployedUrl: {
      type: String,
      default: null
    }
  },
  submissionDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});
  
// Define a virtual field to populate the taskTitle
taskSubmissionSchema.virtual('tasks', {
  ref: 'Tasks', // Reference to the Tasks model
  localField: '_id', // Field in this schema
  foreignField: 'submissions', // Field in the Tasks schema
  justOne: true // Only populate one task
});

// Set up the population when querying task submissions
taskSubmissionSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'tasks',
    select: 'title' // Select only the title field from the Tasks collection
  });
  next();
});

const TaskSubmission = mongoose.model('TaskSubmission', taskSubmissionSchema);

module.exports = TaskSubmission;
