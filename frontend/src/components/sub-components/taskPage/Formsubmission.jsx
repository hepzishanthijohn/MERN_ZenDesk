// FormSubmission.js
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './task.css'

function FormSubmission() {
  const [taskData, settaskData] = useState({ FESrcCodeLink: '',BESrcCodeLink: '',FEDpdURL: '',BEDpdURL: ''});
  const [tasksData, settasksData] = useState([]);
  const navigate = useNavigate()
  
  const handleChange = (e) => {
   
    settaskData({ ...taskData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/tasks');
      settasksData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`https://mernstack-zendesk.onrender.com/tasks/`+id)
        .then(response => {
          console.log('Record deleted successfully:', response);
          // Optionally, you can perform additional actions like updating state or re-fetching data
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  };



 
  
  const [comment, setComment] = useState('');
  

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/tasks', taskData);
      navigate('/')
      window.location.reload();
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error creating data:', error);
    }

    
  };

  
  return (
    <div className="taskContainer">
      <Navbar></Navbar>
      <div className="taskPageContainer">
      
      <div className="taskContentContainer">
       
        <form onSubmit={handleSubmit}>
          <label htmlFor="FESrcCodeLink">Frontend Source Code Link:</label><br />
          <input type="text" id="FESrcCodeLink" name="FESrcCodeLink" value={taskData.FESrcCodeLink} onChange={handleChange} className="form-control" />
          
          <br />
          <label htmlFor="BESrcCodeLink">Backend Source Code Link:</label><br />
          <input type="text" id="BESrcCodeLink"  name="BESrcCodeLink" value={taskData.BESrcCodeLink} onChange={handleChange} className="form-control" />
          
          <br />
          <label htmlFor="FEDpdURL">Frontend Deployed URL:</label><br />
          <input type="text" id="FEDpdURL"  name="FEDpdURL" value={taskData.FEDpdURL} onChange={handleChange} className="form-control" />
          
          <br />
          <label htmlFor="BEDpdURL">Frontend Deployed URL:</label><br />
          <input type="text" id="BEDpdURL"  name="BEDpdURL" value={taskData.BEDpdURL} onChange={handleChange} className="form-control" />
          
          <br />
          <label htmlFor="comment">Comment:</label><br />
          <input type="text" id="comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} /><br /><br />
          <input type="submit" value="Submit" />
        </form>

       
  <div>
    <h3>Submitted Tasks:</h3>
    <ul>
      {tasksData.map((task, index) => (
        <div key={task._id}>
          <p>Front-end Source code : <a href={task.FESrcCodeLink} target="_blank" rel="noopener noreferrer">{task.FESrcCodeLink}</a></p>
          <p>Front-end Deployed URL: <a href={task.BESrcCodeLink} target="_blank" rel="noopener noreferrer">{task.BESrcCodeLink}</a></p>
          <p>Back-end Source code: <a href={task.FEDpdURL} target="_blank" rel="noopener noreferrer">{task.FEDpdURL}</a></p>
          <p>Back-end Deployed URL: <a href={task.BEDpdURL} target="_blank" rel="noopener noreferrer">{task.BEDpdURL}</a></p>
          <p> {task.comment}</p>
          <button onClick={(e)=>handleDelete(task._id)} className='btn btn-danger'>Delete</button>
        </div>
      ))}
    </ul>
  </div>

      </div>
    </div>
    </div>
  );
}

export default FormSubmission;
