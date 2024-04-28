// Import Mongoose
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

// Define a schema for your data
const MentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  },
  contact:{ 
    type: Number, 
    required: true,
  },
  course:{ 
    type: String, 
    ref : "Course",
    required: true 
  },
  role: { 
    type: String, 
    default: "mentor" 
},
attendance: [{
  date: {
      type: Date,
      required: true
  },
  presentCount: {
      type: String,
  },
  absentCount: {
      type: String,
  }
}]
}, { timestamps: true });


MentorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  

// Create a model using the schema
const Mentor = mongoose.model('Mentor', MentorSchema);

module.exports = Mentor;
