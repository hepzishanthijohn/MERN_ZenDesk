import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css'

const QueryPage = () => {
  const navigate = useNavigate()
  const [submissions, setSubmissions] = useState(JSON.parse(localStorage.getItem('submissions')) || []);

  const handleDelete = (index) => {
    const updatedSubmissions = [...submissions];
    updatedSubmissions.splice(index, 1);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
  };
  return (
    <div>
      <h1 id='subhead'>create your queries</h1>
      <div className="queriesContainer">
      
      
      <button id='createQueryBtn' onClick={() => navigate('/portal/queryform')}><strong>+ create Query</strong></button>
      <div  id='querySubmissionContainer' style={{fontSize:"18px"}}>
        <h2>All Queries</h2>
      <ul id='queriesList'>
        {submissions.map((submission, index) => (
          <div key={index} id="queryList">
            <p> {submission.title}</p>
            <p> {submission.description}</p>
            <hr />
            <p style={{color:"grey"}}>sooner, it will be resolved</p>
            <button className='btn btn-danger'  onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
};

export default QueryPage;
