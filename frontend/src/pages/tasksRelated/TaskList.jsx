import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const { studentId } = useParams();

  
    const fetchTasks = async () => {
      try {
        setLoading(true); // Set loading to true before making the API call
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.log('Error fetching tasks:', error);
      } finally {
        setLoading(false); // Set loading to false after API call is completed (whether successful or with an error)
      }
    };

    useEffect(() => {
      fetchTasks();
    }, []);
 
  useEffect(() => {
    if (tasks.length === 0) {
      // Fetch data only if queryData is empty
      fetchTasks();
    }
  }, [tasks]);

  // Function to handle storing task ID in local storage
  const handleViewTask = (taskId, taskTitle) => {
    localStorage.setItem('currentTaskId', taskId);
    localStorage.setItem('currentTaskTitle', taskTitle);
  };

  return (
    <div className='boxContainer'>
       <div className="d-flex  justify-content-center align-items-center">
        <div className=" bg-white " style={{marginTop:"5rem"}} >
          <h1 className='d-flex justify-content-center mt-5'>
            Tasks List
          </h1>
      {loading ? ( // Display loading message if loading is true
        <div>Loading...</div>
      ) : (
        <div className="task_container">
          <ul className='d-flex justify-content-center align-items-center flex-column '>
          {tasks.map((task,index) => (
            <TaskContainer key={task._id}>
              <div>
                <h6 className='mt-4'>Task: {index+1}</h6>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <Link
                  to={`/portal/tasks/:${task._id}`}
                  className="btn btn-primary mb-3"
                  onClick={() => handleViewTask(task._id, task.title)}
                >
                  Submit the Task
                </Link>
              </div>
            </TaskContainer>
          ))}
        </ul>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default TaskList;
const TaskContainer= styled.div`
    
    width:150%;
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
    border-radius: 12px;
    margin:0 0 10px 20px;
    padding:1px 0 12px 25px;`
