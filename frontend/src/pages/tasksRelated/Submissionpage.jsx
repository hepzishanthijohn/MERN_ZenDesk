import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SubmissionPage = ({ userType }) => {
  const [tasks, setTasks] = useState([]);
  const [userid, setUserId] = useState(null);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    
    if (userToken) {
      try {
        const decodedToken = jwt_decode(userToken);
        const userId = decodedToken.user.id;
        setUserId(userId);
        setUserRole(decodedToken.user.role); // Assuming the role is stored in the JWT
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

  useEffect(() => {
    const studentId = localStorage.getItem('currentTaskTitle');
    if (studentId) {
        setCurrentStudentId(studentId);
    } else {
        console.error('Student ID not found in local storage');
    }
}, []);

useEffect(() => {
    fetchData();
}, [currentStudentId]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5003/taskSubmission/${userid}`);
      setTasks(response.data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  // Function to handle adding marks to a task
  const handleAddMarks = async (taskId) => {
    // Implement your logic to add marks to the task
    // You can redirect to another page or show a modal for adding marks
    console.log('Add marks for task:', taskId);
  };

  return (
    <div>
      <h1>Submission Task List</h1>
      {userRole === 'admin' && <Link to="/portal/createTask">Create Task</Link>}
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <p>Title: {task.username}</p>
            <p>Description: {task.submission}</p>
            <p>Deadline: {task.submissionDate}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionPage;
