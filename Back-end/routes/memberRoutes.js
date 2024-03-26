const express = require('express');
const router = express.Router();
const Data = require('../models/Members')// Import your model

// Route to get all records
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single record by ID
router.get('/:id', getData, (req, res) => {
  res.json(res.data);
});

// Route to create a new record
router.post('/', async (req, res) => {
  const newData = new Data({
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact
    // Add more fields as needed
  });

  try {
    const createdData = await newData.save();
    res.status(201).json(createdData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to update an existing record
router.put('/:id', getData, async (req, res) => {
  try {
    if (req.body.name != null) {
      res.data.name = req.body.name;
    }
    if (req.body.email != null) {
      res.data.email = req.body.email;
    }
    // Update other fields as needed
    const id = req.params.id;
    
    const updatedData = await res.data.save({_id:id});
    res.json(updatedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});router.put('/:id', async(res, req)=>{
    const id = req.params.id;
    UserList.findByIdAndUpdate({_id : id},
        {
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact})
    .then(users => res.json(users))
    .catch(err => res.json(err))   
})

// Route to delete a record by ID
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    Data.findByIdAndRemove({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  });


// Middleware function to get data by ID
async function getData(req, res, next) {
  try {
    const data = await Data.findById(req.params.id);
    if (data == null) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.data = data;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
