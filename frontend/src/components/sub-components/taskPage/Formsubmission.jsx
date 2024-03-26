// FormSubmission.js
import React, { useState } from 'react';
import { useForm } from './FormContext';
import './task.css'

function FormSubmission() {
  const { state, dispatch } = useForm();
  const [githubLink, setGithubLink] = useState('');
  const [comment, setComment] = useState('');
  const [githubLinkError, setGithubLinkError] = useState('');

  const validateGithubLink = (link) => {
    // Regular expression to validate GitHub repository URL
    const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\/?$/;
    return githubRegex.test(link);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate GitHub link
    if (!validateGithubLink(githubLink)) {
      setGithubLinkError('Please enter a valid GitHub repository URL.');
      return;
    } else {
      setGithubLinkError('');
    }

    // Create a new detail object
    const newDetail = { githubLink, comment };

    // Dispatch action to add detail
    dispatch({ type: 'ADD_DETAIL', payload: newDetail });

    // Clear form fields
    setGithubLink('');
    setComment('');
  };

  const handleDelete = (index) => {
    // Dispatch action to delete detail
    dispatch({ type: 'DELETE_DETAIL', payload: index });
  };

  return (
    <div className="taskContainer">
      <div className="taskHeader">
    <h1 className='taskHead'>Task Submission</h1>
    <hr />
    </div>
      <div className="taskPageContainer">
      
      <div className="taskContentContainer">
       
        <form onSubmit={handleSubmit}>
          <label htmlFor="githubLink">GitHub Link:</label><br />
          <input type="text" id="githubLink" name="githubLink" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
          {githubLinkError && <p className="error">{githubLinkError}</p>}
          <br />
          <label htmlFor="comment">Comment:</label><br />
          <input type="text" id="comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} /><br /><br />
          <input type="submit" value="Submit" />
        </form>

        {/* Display submitted details */}
        {state.detailsList?.length > 0 && (
  <div>
    <h3>Submitted Tasks:</h3>
    <ul>
      {state.detailsList.map((detail, index) => (
        <div key={index}>
          <p>GitHub Link: <a href={detail.githubLink} target="_blank" rel="noopener noreferrer">{detail.githubLink}</a></p>
          <p> {detail.comment}</p>
          <button onClick={() => handleDelete(index)} className='btn btn-danger'>Delete</button>
        </div>
      ))}
    </ul>
  </div>
)}
      </div>
    </div>
    </div>
  );
}

export default FormSubmission;
