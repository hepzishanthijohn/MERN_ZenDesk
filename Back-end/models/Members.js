// Import Mongoose
const mongoose = require('mongoose');

// Define a schema for your data
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact:{
    type: Number,
    required: true,
  }
});

// Create a model using the schema
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
