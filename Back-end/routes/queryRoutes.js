const express = require('express');
const router = express.Router();
const Query = require('../models/Queries')



router.get('/', async (req, res) => {
    try {
    const query = await Query.find();
      res.json(query);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Route to get a single record by ID
  router.get('/:id', getData, (req, res) => {
    res.json(res.query);
  });
  
  // Route to create a new record
  router.post('/', async (req, res) => {
    const newQuery = new Query({
      queryTitle: req.body.queryTitle,
      queryDesc: req.body.queryDesc,
      // Add more fields as needed
    });
  
    try {
      const createdQuery = await newQuery.save();
      res.status(201).json(createdQuery);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Route to update an existing record
  router.put('/:id', getData, async (req, res) => {
    try {
      if (req.body.queryTitle != null) {
        res.query.queryTitle = req.body.queryTitle;
      }
      if (req.body.queryDesc != null) {
        res.query.queryDesc = req.body.queryDesc;
      }
      // Update other fields as needed
      const id = req.params.id;
      
      const updatedQuery = await res.query.save({_id:id});
      res.json(updatedQuery);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  
  // Route to delete a record by ID
  router.delete('/:id', async (req, res) => {
      const id = req.params.id;
      Query.findByIdAndRemove({_id:id})
      .then(res => res.json(res))
      .catch(err => res.json(err))
    });
  
  
  // Middleware function to get data by ID
  async function getData(req, res, next) {
    try {
      const query = await Query.findById(req.params.id);
      if (query == null) {
        return res.status(404).json({ message: 'Record not found' });
      }
      res.query = query;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
  
  module.exports = router;
  