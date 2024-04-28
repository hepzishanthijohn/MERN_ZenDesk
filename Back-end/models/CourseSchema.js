const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({

    courseName:{
        type:String,
        required:true
    }
    
    
});

const Course = mongoose.model("Course",CourseSchema);
module.exports = Course