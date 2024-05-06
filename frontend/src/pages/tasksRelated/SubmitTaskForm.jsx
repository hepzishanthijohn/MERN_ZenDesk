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
  const [loading, setLoading] = useState(true); // State for loading
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
 

  
  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true before making the API call
      const taskId = localStorage.getItem('currentTaskId');
      const currentStudentId = localStorage.getItem('currentStudentId');
      const response = await axios.get(`https://mernstack-zendesk.onrender.com/taskSubmission/${userid}/tasks/submitted`);
      setTasks(response.data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    } finally {
      setLoading(false); // Set loading to false after API call is completed (whether successful or with an error)
    }
  };
  useEffect(() => {
    if (tasks.length === 0) {
      // Fetch data only if queryData is empty
      fetchData();
    }
  }, [tasks]);

  useEffect(() => {
    fetchData();
  }, []); // Refresh the data whenever tasks change

  return (
    <>
      <div className='d-flex'>
        <div className='w-100 bg-white ml-5' style={{ marginTop: "6rem" }}>
          <h1 className='d-flex justify-content-center'>Submitted task</h1>

          {loading ? ( // Display loading message if loading is true
            <div className='d-flex justify-content-center'>Loading...</div>
          ) : (
            <ul className='submitTask_container'>
              {tasks.map(task => (
                <TaskContainer key={task._id}>
                  <div >
                    <h6 className='d-flex justify-content-end mr-5'>{username}</h6>
                    <div>
                      <h5 className='d-flex justify-content-start mb-1'>{task.taskTitle}</h5>
                      <hr />
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
          )}

          <div className='d-flex justify-content-end mr-5 mb-5'>
            <button className="btn btn-success" onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitTaskForm;

const TaskContainer = styled.div`

  width: 70%;
  fontsize: 22px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 0px 3px rgba(0, 5, 0, 0.208);
  border-radius: 12px;
  margin: 50px 0 30px 70px;
  padding: 1px 0 22px 25px;
`;