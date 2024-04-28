const mongoose = require('mongoose');


const ClassSchema = new mongoose.Schema({
  sessionLink: {
    type: String,
    required: true
  },
  sessionTitle: {
    type: String,
    required: true,
  },
  sessionContent:{
    type: String,
    required: true,
  },
  sessionRoadmap:{
    type: String,
   
  },
  sessionActivities: { 
    type: String, 
  },
  AdditionalSession: { 
    type: String, 
  }
});

const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;
