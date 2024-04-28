const express = require('express');
const router = express.Router();
const Queries = require('../models/QuerySchema');

// Route to create a new query
router.post('/', async (req, res) => {
  try {
    const { username,title, description, category, preferredVoiceCommunication } = req.body;

    // Create a new query
    const newQuery = new Queries({
      username,
      title,
      description,
      category,
      preferredVoiceCommunication
      // Add more fields as needed
    });

    // Save the new query to the database
    const createdQuery = await newQuery.save();
    res.status(201).json(createdQuery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all queries
router.get('/', async (req, res) => {
  try {
    const queries = await Queries.find();
    res.json(queries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single query by ID
router.get('/:id', getQueryById, (req, res) => {
    
  res.json(res.query);
});
router.get('/:studentId/queries', async (req, res) => {
    try {
      const queries = await Queries.find({ assignedTo: req.params.studentId });
      res.json(queries);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  //////get by student id
  router.get('/student/:studentId', async (req, res) => {
    try {
      const queries = await Queries.find({ username: req.params.studentId });
      res.json(queries);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    Queries.findByIdAndRemove({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  });



// Route to update an existing query
router.put('/:id', getQueryById, async (req, res) => {
  try {
    if (req.body.title != null) {
      res.query.title = req.body.title;
    }
    if (req.body.description != null) {
      res.query.description = req.body.description;
    }
    // Update other fields as needed
    const updatedQuery = await res.query.save();
    res.json(updatedQuery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a query by ID
router.delete('/:id', getQueryById, async (req, res) => {
  try {
    await res.query.remove();
    res.json({ message: 'Query deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
async function getQueryById(req, res, next) {
    let query;
    try {
      query = await Queries.findById(req.params.id);
      if (query == null) {
        return res.status(404).json({ message: 'Query not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.query = query;
    next();
  }


module.exports = router;
