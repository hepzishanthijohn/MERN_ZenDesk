const express = require('express');
const router = express.Router();
const Tasks = require('../models/TaskSchema');
const TaskSubmission = require('../models/TaskSubmissionSchema');

// Route to create a new task

router.post('/', async (req, res) => {
    try {
      const tasks = await Tasks.create(req.body);
      res.status(201).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route to get all tasks
  router.get('/', async (req, res) => {
    try {
      const tasks = await Tasks.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Route to get a single task by ID
  router.get('/:taskId', async (req, res) => {
    try {
      const tasks = await Tasks.findById(req.params.taskId);
      if (!tasks) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get('/tasks/:id', async (req, res) => {
    try {
  
        const tasks = await Tasks.find({title:req.body.title}).populate('submissions');
        if (!tasks) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
///////////////////////////
router.get('/:studentId/tasks', async (req, res) => {
    try {
      const tasks = await Tasks.find({ assignedTo: {username: req.params.studentId} });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
// Route to create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description,deadline } = req.body;

    // Create a new task
    const newTasks = new Tasks({
      title,
      description,
      deadline
      // Add more fields as needed
    });

    // Save the new task to the database
    const createdTasks = await newTasks.save();
    res.status(201).json(createdTasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Route to get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single task by ID
router.get('/:id', getTasks, (req, res) => {
  res.json(res.task);
});

// Middleware function to get a task by ID
async function getTasks(req, res, next) {
  let task;
  try {
    task = await Tasks.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Tasks not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.task = task;
  next();
}

// Route to update an existing task
router.put('/:id', getTasks, async (req, res) => {
  try {
    if (req.body.title != null) {
      res.task.title = req.body.title;
    }
    if (req.body.description != null) {
      res.task.description = req.body.description;
    }
    // Update other fields as needed
    const updatedTasks = await res.task.save();
    res.json(updatedTasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a task by ID
router.delete('/:id', getTasks, async (req, res) => {
  try {
    await res.task.remove();
    res.json({ message: 'Tasks deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Middleware function to get a task by ID
async function getTasks(req, res, next) {
  let tasks;
  try {
    tasks = await Tasks.findById(req.params.studentId);
    if (tasks == null) {
      return res.status(404).json({ message: 'Tasks not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.tasks = tasks;
  next();
}
module.exports = router;
