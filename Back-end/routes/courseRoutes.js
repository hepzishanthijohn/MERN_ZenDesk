const express = require('express');
const router = express.Router();
const Course = require('../models/CourseSchema')// Import your model

// Route to get all records
router.get('/', async (req, res) => {
  try {
    const data = await Course.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single record by ID
router.get('/:id', getCourse, (req, res) => {
  res.json(res.data);
});

// Route to create a new record
router.post('/', async (req, res) => {
  const { courseName } = req.body;

  try {
    // Check if a course with the same name already exists
    const existingCourse = await Course.findOne({ courseName });
    if (existingCourse) {
      return res.status(400).json({ message: 'Course with the same name already exists' });
    }

    // Create a new course
    const newCourse = new Course({
      courseName,
      // Add more fields as needed
    });

    // Save the new course to the database
    const createdCourse = await newCourse.save();
    res.status(201).json(createdCourse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Route to update an existing record
router.put('/:id', getCourse, async (req, res) => {
  try {
    if (req.body.courseName != null) {
      res.data.courseName = req.body.courseName;
    }
   
    // Update other fields as needed
    const id = req.params.id;
    
    const updatedCourse = await res.data.save({_id:id});
    res.json(updatedCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.put('/:id', async(res, req)=>{
    const id = req.params.id;
    UserList.findByIdAndUpdate({_id : id},
        {
            courseName: req.body.courseName,
            })
    .then(users => res.json(users))
    .catch(err => res.json(err))   
})

// Route to delete a record by ID
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    Course.findByIdAndRemove({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  });


// Middleware function to get data by ID
async function getCourse(req, res, next) {
  try {
    const data = await Course.findById(req.params.id);
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
