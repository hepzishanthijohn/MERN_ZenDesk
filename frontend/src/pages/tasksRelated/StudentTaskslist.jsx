import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const StudentTaskslist = () => {
  const [tasks, setTasks] = useState([]);
  const { studentId } = useParams();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [studentId]);

  // Function to handle storing task ID in local storage
  const handleViewTask = (taskId, taskTitle) => {
    localStorage.setItem('currentTaskId', taskId);
    localStorage.setItem('currentTaskTitle', taskTitle);
  };

  return (
    <div>
      <Navbar />
      <h2 className='d-flex justify-content-center'>Task List</h2>
      <ul className='d-flex justify-content-center align-items-center flex-column f-20'>
        {tasks.map((task,index) => (
          <TaskContainer key={task._id}>
            <div>
              <h6 className='mt-4'>Task: {index+1}</h6>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              
            </div>
          </TaskContainer>
        ))}
      </ul>
    </div>
  );
};

export default StudentTaskslist;
const TaskContainer= styled.div`
    
    width:50%;
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
    border-radius: 12px;
    margin:0 0 10px 20px;
    padding:1px 0 12px 25px;`