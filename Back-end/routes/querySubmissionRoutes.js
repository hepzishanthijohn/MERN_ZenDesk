// Import necessary modules
const express = require('express');
const router = express.Router();
const QuerySubmission = require('../models/QuerySubmissionSchema');
const Queries = require('../models/QuerySchema')

// Route to submit a query submission for a specific query
router.post('/:queryId/submissions', async (req, res) => {
  try {
    const query = await Queries.findById(req.params.queryId);
    if (!query) {
      return res.status(404).json({ message: 'Task not found' });
    }
    const submission = await QuerySubmission.create(req.body);
    query.submissions.push(submission); // Assuming you're using referencing
    await query.save();
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/:id', async (req, res) => {
  
  const querySubmission = new QuerySubmission({
    queryTitle: req.body.queryTitle,
    submission: req.body.submission,
    submissionDate: req.body.submissionDate
  });

  try {
    const newQuerySubmission = await querySubmission.save();
    res.status(201).json(newQuerySubmission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Route to get all query submissions for a specific query
router.get('/:queryId/submissions', async (req, res) => {
  try {
    const query = await Queries.findById(req.params.queryId).populate('submissions');
    if (!query) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(query.submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:studentId/querys', async (req, res) => {
  try {
    const querys = await QuerySubmission.find({ assignedTo: req.params.studentId });
    res.json(querys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/:studentId', async (req, res) => {
  try {
    const submissions = await QuerySubmission.find({ studentName: req.params.studentId });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route to submit a query solution for a specific student
router.post('/:studentId/querys/:queryId/submit', async (req, res) => {
  try {
    const { frontendSrcCode, backendSrcCode,frontendDeployedUrl,backendDeployedUrl } = req.body.submission; // Assuming the submission link is sent in the request body

    // Find the query by ID and update its submission field
    const updatedTask = await Queries.findByIdAndUpdate(
      req.params.queryId,
      { $set: { submission: { frontendSrcCode, backendSrcCode,frontendDeployedUrl,backendDeployedUrl }, submittedAt: new Date() } },
      { new: true } // To return the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task submitted successfully', query: updatedTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 



// POST route for submitting a query
router.post('/query', async (req, res) => {
  try {
    // Extract submission data from request body
    const { queryTitle,studentName,mentorName, submission, submissionDate } = req.body;

    // Validate submission data (optional)

    // Create a new query submission document
    const newSubmission = new QuerySubmission({
      queryTitle , 
      studentName,
      mentorName,
      submission,
      submissionDate
    });

    // Save the new submission to the database
    const savedSubmission = await newSubmission.save();

    // Respond with the saved submission
    res.status(201).json(savedSubmission);
  } catch (error) {
    // Handle errors
    console.error('Error submitting query:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
  const query = await QuerySubmission.find();
    res.json(query);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get query submission by ID
async function getQuerySubmission(req, res, next) {
  try {
    const querySubmission = await QuerySubmission.findById(req.params.id).populate('queryTitle');
    if (querySubmission == null) {
      return res.status(404).json({ message: 'Task submission not found' });
    }
    res.querySubmission = querySubmission;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
// Export the router
module.exports = router;
