const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminSchema");
const router = express.Router();

// POST /auth/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await Admin.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    user = new Admin({
      name,
      email,
      password,
    });

    await user.save();
    // const payload = {
    //     user: {
    //       id: user._id,
    //     },
    //   };
    res.status(201).json({ msg: "Admin registered successfully" });

    

    // jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }),
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   };
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
//get all authenticated users
router.get('/', async (req, res) => {
  try {
  const user = await Admin.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /auth/login
router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const name =req.body;

  try {
    let user = await Admin.findOne({ email });
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
        email: user.email,
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

// GET /auth/logout
router.get("/logout", (req, res) => {
  res.json({ msg: "Admin logged out successfully" });
});

module.exports = router;