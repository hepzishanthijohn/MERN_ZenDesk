// Import necessary modules
const express = require('express');
const router = express.Router();
const TaskSubmission = require('../models/TaskSubmissionSchema');
const Tasks = require('../models/TaskSchema')

// Middleware function to get task submission by ID
async function getTaskSubmission(req, res, next) {
  try {
    const taskSubmission = await TaskSubmission.findById(req.params.id).populate('submission');
    if (taskSubmission == null) {
      return res.status(404).json({ message: 'Task submission not found' });
    }
    res.taskSubmission = taskSubmission;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


// Route to get all task submissions for a specific task
router.get('/:taskId/submissions', async (req, res) => {
  try {
    const tasks = await Tasks.findById(req.params.taskId).populate('submissions');
    if (!tasks) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(tasks.submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to submit a task solution for a specific student
// Route to submit a task solution for a specific student
router.post('/:studentId/tasks/:taskId/submit', async (req, res) => {
  try {
    const { frontendSrcCode, backendSrcCode, frontendDeployedUrl, backendDeployedUrl } = req.body.submission;

    // Find the task by ID to get the task title
    const task = await Tasks.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Create a new task submission document with the task title
    const newSubmission = new TaskSubmission({
      username: req.params.studentId,
      taskTitle: task.title, // Include the task title
      submission: {
        frontendSrcCode,
        backendSrcCode,
        frontendDeployedUrl,
        backendDeployedUrl
      },
      submissionDate: new Date()
    });

    // Save the new submission to the database
    const savedSubmission = await newSubmission.save();

    // Find the task by ID again to update the submissions array
    const updatedTask = await Tasks.findByIdAndUpdate(
      req.params.taskId,
      { $push: { submissions: savedSubmission }, $set: { submittedAt: new Date() } },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task submitted successfully', task: updatedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:studentId/tasks/submitted', async (req, res) => {
  try {
    // Find all task submissions submitted by the specific student
    const submissions = await TaskSubmission.find({ username: req.params.studentId });

    // Return the task submissions
    res.status(200).json(submissions);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
});


// Route to get all task submissions assigned to a specific student
router.get('/:studentId/tasks', async (req, res) => {
  try {
    const tasks = await TaskSubmission.find({ assignedTo: req.params.studentId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all task submissions submitted by a specific student
router.get('/:studentId', async (req, res) => {
  try {
    const submissions = await TaskSubmission.find({ username: req.params.studentId });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route for submitting a task
router.post('/', async (req, res) => {
  try {
    const { username, submission, submissionDate } = req.body;
    const newSubmission = new TaskSubmission({
      username,
      submission,
      submissionDate
    });
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (error) {
    console.error('Error submitting task:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get all task submissions
router.get('/', async (req, res) => {
  try {
    const tasks = await TaskSubmission.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the router
module.exports = router;
