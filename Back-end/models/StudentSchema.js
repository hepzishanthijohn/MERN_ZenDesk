// Import Mongoose
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

// Define a schema for your data
const StudentSchema = new mongoose.Schema({
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
  role: { 
    type: String, 
    default: "student" 
},
course:{ 
  type: String, 
  ref : "Course",
  required: true 
},
taskResult: [
  {
      task: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'TaskSubmission',
      },
      marksObtained: {
          type: Number,
          default: 0
      }
  }
]
});

StudentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  

// Create a model using the schema
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
