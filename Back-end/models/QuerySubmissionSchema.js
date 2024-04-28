const mongoose = require('mongoose');

const QuerySubmissionSchema = new mongoose.Schema({
  queryTitle: {
    type: String,
    ref: 'Queries', // Reference to the Queries model
    default: null
  },
  submission: {
    queryResponse: {
      type: String,
      default: null
    }
  },
  submissionDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// Define a virtual field to populate the queryTitle
QuerySubmissionSchema.virtual('query', {
  ref: 'Queries', // Reference to the Queries model
  localField: 'queryTitle', // Field in this schema
  foreignField: '_id', // Field in the Queries schema
  justOne: true // Only populate one query
});

// Set up the population when querying query submissions
QuerySubmissionSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'query',
    select: 'title' // Select only the title field from the Queries collection
  });
  next();
});

const QuerySubmission = mongoose.model('QuerySubmission', QuerySubmissionSchema);

module.exports = QuerySubmission;
