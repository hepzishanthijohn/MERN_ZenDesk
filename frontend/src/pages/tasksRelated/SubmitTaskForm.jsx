import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const SubmitTaskForm = () => {
  
  const [submission, setSubmission] = useState('');
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState(null);
  const [userid, setUserid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      try {
        const decodedToken = jwt_decode(userToken);
        const userName = decodedToken.user.name;
        const userId = decodedToken.user.id;
        setUserid(userId);
        setUsername(userName);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('Admin token not found in local storage');
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    fetchData();
  }, [tasks]); // Refresh the data whenever tasks change

  const fetchData = async () => {
    try {
      const taskId=localStorage.getItem('currentTaskId')
      const currentStudentId = localStorage.getItem('currentStudentId');
      const response = await axios.get(`https://mernstack-zendesk.onrender.com/taskSubmission/${currentStudentId}/tasks/submitted`);
      setTasks(response.data);
      
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };
 
  

  return (
    <>
    <Navbar></Navbar>
    <div>
      <h1>Submitted Task List</h1>
      <ul>
        {tasks.map(task => (
          <TaskContainer key={task._id}>
            <div>
              <h5 className='d-flex justify-content-end mr-5'>{username}</h5>
              <div>
                <h5 className='d-flex justify-content-start mb-1'>{task.taskTitle}</h5>
                <div>
                  {task.submission && Object.keys(task.submission).map((key, index) => (
                    <div key={index}>
                      {key === 'frontendSrcCode' && task.submission[key] && <p>Frontend Source Code: <Link>{task.submission[key]}</Link></p>}
                      {key === 'backendSrcCode' && task.submission[key] && <p>Backend Source Code: <Link>{task.submission[key]}</Link></p>}
                      {key === 'frontendDeployedUrl' && task.submission[key] && <p>Frontend Deployed URL: <Link>{task.submission[key]}</Link></p>}
                      {key === 'backendDeployedUrl' && task.submission[key] && <p>Backend Deployed URL: <Link>{task.submission[key]}</Link></p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TaskContainer>
        ))}
      </ul>
      <div className='d-flex justify-content-end mr-5 mb-5'>
        <button className="btn btn-success" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>

    </>  );
};

export default SubmitTaskForm;

const TaskContainer = styled.div`
  
  width: 70%;
  fontsize: 20px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
  border-radius: 12px;
  margin: 50px 0 30px 70px;
  padding: 1px 0 22px 25px;
`;
