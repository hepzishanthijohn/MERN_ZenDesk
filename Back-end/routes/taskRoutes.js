const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks')



router.get('/', async (req, res) => {
    try {
    const task = await Task.find();
      res.json(task);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Route to get a single record by ID
  router.get('/:id', getData, (req, res) => {
    res.json(res.task);
  });
  
  // Route to create a new record
  router.post('/', async (req, res) => {
    const newTask = new Task({
        FESrcCodeLink: req.body.FESrcCodeLink,
        BESrcCodeLink: req.body.BESrcCodeLink,
        FEDpdURL: req.body.FEDpdURL,
        BEDpdURL: req.body.BEDpdURL,
      // Add more fields as needed
    });
  
    try {
      const createdTask = await newTask.save();
      res.status(201).json(createdTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  
  // Route to delete a record by ID
  router.delete('/:id', async (req, res) => {
      const id = req.params.id;
      Task.findByIdAndRemove({_id:id})
      .then(res => res.json(res))
      .catch(err => res.json(err))
    });
  
  
  // Middleware function to get data by ID
  async function getData(req, res, next) {
    try {
      const task = await Task.findById(req.params.id);
      if (task == null) {
        return res.status(404).json({ message: 'Record not found' });
      }
      res.task = task;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  
  module.exports = router;
  