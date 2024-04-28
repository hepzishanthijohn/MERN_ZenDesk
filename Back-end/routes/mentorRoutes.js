const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Mentor = require('../models/MentorSchema')
const Course = require('../models/CourseSchema')// Import your model

// Route to get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find().populate('course');
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a single mentor by ID
router.get('/:id', getMentor, (req, res) => {
  res.json(res.mentor);
});

// Route to create a new mentor
router.post('/register', async (req, res) => {
  const { name, email, password, contact, course } = req.body;
  
  try {
    // Find the course by name to get its _id
    const courseData = await Course.findOne({ courseName: course });
    if (!courseData) {
      return res.status(400).json({ message: 'Invalid course' });
    }
    const courseId = courseData._id;

    // Create a new mentor
    const newMentor = new Mentor({
      name,
      email,
      password,
      contact,
      course: courseId // Use courseId instead of course
    });

    // Save the new mentor to the database
    await newMentor.save();

    res.status(201).json({ message: 'Mentor registered successfully' });
  } catch (error) {
    console.error('Error creating mentor:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const name =req.body;

  try {
    let user = await Mentor.findOne({ email });
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


// Route to update an existing mentor
router.put('/:id', getMentor, async (req, res) => {
  try {
    if (req.body.name != null) {
      res.mentor.name = req.body.name;
    }
    if (req.body.email != null) {
      res.mentor.email = req.body.email;
    }
    if (req.body.contact != null) {
      res.mentor.contact = req.body.contact;
    }
    // Update other fields as needed

    const updatedMentor = await res.mentor.save();
    res.json(updatedMentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a mentor by ID
router.delete('/:id', getMentor, async (req, res) => {
  try {
    await res.mentor.remove();
    res.json({ message: 'Mentor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get mentor by ID
async function getMentor(req, res, next) {
  try {
    const mentor = await Mentor.findById(req.params.id).populate('course');
    if (mentor == null) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    res.mentor = mentor;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
