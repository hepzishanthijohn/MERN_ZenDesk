const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const Course = require('../models/CourseSchema')
const Student = require('../models/StudentSchema'); // Import Student model

// Route to get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().populate('course');
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single student by ID
router.get('/:id', getStudent, (req, res) => {
  res.json(res.student);
});

// Route to create a new student
router.post('/register', async (req, res) => {
  const { name, email, password, contact, course } = req.body;
  
  try {
    // Find the course by name to get its _id
    const courseData = await Course.findOne({ courseName: course });
    if (!courseData) {
      return res.status(400).json({ message: 'Invalid course' });
    }
    const courseId = courseData._id;

    // Create a new student
    const newStudent = new Student({
      name,
      email,
      password,
      contact,
      course: courseId // Use courseId instead of course
    });

    // Save the new student to the database
    await newStudent.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const name =req.body;

  try {
    let user = await Student.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }else{
      console.log(user.name)
    }

    const isMatch = await bcrypt.compare(password, user.password,console.log(user.name));
    
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        name: user.name,
        id: user._id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});


// Route to update an existing student
router.put('/:id', getStudent, async (req, res) => {
  try {
    if (req.body.name != null) {
      res.student.name = req.body.name;
    }
    if (req.body.email != null) {
      res.student.email = req.body.email;
    }
    if (req.body.contact != null) {
      res.student.email = req.body.contact;
    }
    // Update other fields as needed

    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a student by ID
router.delete('/:id', getStudent, async (req, res) => {
  try {
    await res.student.remove();
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get student by ID
async function getStudent(req, res, next) {
  try {
    const student = await Student.findById(req.params.id).populate('course');
    if (student == null) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.student = student;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
