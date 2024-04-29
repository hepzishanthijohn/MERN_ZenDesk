import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import { useParams,useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate()
  const [task, setTask] = useState(null);
  const [submission, setSubmission] = useState({
    frontendSrcCode: '',
    backendSrcCode: '',
    frontendDeployedUrl: '',
    backendDeployedUrl: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [userid, setUserId] = useState(null);
    

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
    
        if (userToken) {
            try {
                const decodedToken = jwt_decode(userToken);
              
                const userId = decodedToken.user.id;
                setUserId(userId);
                // console.log(userId)
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            console.error('Admin token not found in local storage');
        }
    }, []);
  


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const taskIdFromStorage = localStorage.getItem('currentTaskId');
      const response = await axios.get(`https://mernstack-zendesk.onrender.com/tasks/${taskIdFromStorage}`);
      setTask(response.data);
    } catch (error) {
      console.log('Error fetching task details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const taskTitleFromStorage = localStorage.getItem('currentTaskTitle');
      const currentStudentId = localStorage.getItem('currentStudentId');
      
      const submissionData = {
        taskTitle:`${taskTitleFromStorage}`,
        username: `${userid}`, // Get the username from authentication or wherever you store it
        submission,
        submissionDate: new Date()
      };
      // Make an API call to submit the task
      const taskIdFromStorage = localStorage.getItem('currentTaskId');
      await axios.post(`https://mernstack-zendesk.onrender.com/taskSubmission/${userid}/tasks/${taskIdFromStorage}/submit`, submissionData);
      navigate('/portal/submitTaskForm')
      // Optionally, you can display a success message or redirect to another page
    } catch (error) {
      console.log('Error submitting task:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  
  const formatDeadline = (deadline) => {
    const formattedDeadline = new Date(deadline).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDeadline;
  };

  return (
    <div>
        <Navbar></Navbar>
      <h1 className='d-flex ' style={{marginLeft:"10rem"}}>Task Details</h1>
      <TaskContainer>
      {task ? (
        <div style={{fontSize:"19px"}}>
        

          <h3 className='mt-5 d-flex justify-content-center'>{task.title}</h3>
          
          <blockquote className="blockquote"><p>Description: {task.description}</p></blockquote>
          
          <blockquote className="blockquote"><p>Deadline: {formatDeadline(task.deadline)}</p></blockquote>
          
          <div>
  
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Frontend Source Code:</label>
            <input className="form-control mb-4" type="text" name="frontendSrcCode"
                value={submission.frontendSrcCode} style={{ width: "90%" }} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Backend Source Code:</label>
            <input className="form-control mb-4" type="text" name="backendSrcCode"
                value={submission.backendSrcCode} style={{ width: "90%" }} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Frontend Deployed URL:</label>
            <input className="form-control mb-4" type="text" name="frontendDeployedUrl"
                value={submission.frontendDeployedUrl} style={{ width: "90%" }} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label>Backend Deployed URL:</label>
            <input className="form-control mb-5" type="text" name="backendDeployedUrl"
                value={submission.backendDeployedUrl} style={{ width: "90%" }} onChange={handleChange} />
        </div>
        <div className='d-flex justify-content-end'>
            <button className='btn btn-primary mr-5 ' style={{ background: "" }} type="submit" disabled={submitting}>Submit Task</button>
        </div>
    </form>
</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </TaskContainer>
      
    </div>
  );
};

export default TaskDetails;

const TaskContainer= styled.div`
    
    width:70%;
    fontsize: 20px;
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
    border-radius: 12px;
    margin:50px 0 30px 70px;
    padding:1px 0 22px 25px;
  
`