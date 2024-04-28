const mongoose = require('mongoose');

const QueriesSchema = new mongoose.Schema({
  username:{
    type: String,
    ref: "student"
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
 category:{
    type: String,
    required:true,
 },
 preferredVoiceCommunication:{
    type: String,
    required:true,
 },
  
  submissions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuerySubmission'
  }]
}, { timestamps: true });

const Queries = mongoose.model('Queries', QueriesSchema);

module.exports = Queries;