import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Navbar from '../../components/sub-components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: ''
    // Add more fields as needed
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5003/tasks', formData);
      console.log('Task created successfully');
      navigate('/portal/studentTaskslist'); // Navigate to TaskList component after successful form submission
    } catch (error) {
      console.log('Error creating task:', error);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div>
      <h2 style={{}} className='d-flex justify-content-center'>Create Task</h2>
      
        <div>
          <form onSubmit={handleSubmit} >
          <TaskContainer>
            <div className="form-group">
              <label>Title:</label>
              <input className="form-control mb-4" type="text" name="title" value={formData.title} onChange={handleChange} style={{ width: "90%" }} />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea className="form-control mb-4" name="description" value={formData.description} onChange={handleChange} style={{ width: "90%" }} />
            </div>
            <div className="form-group">
              <label>Deadline:</label>
              <input className="form-control mb-4" type="date" name="deadline" value={formData.deadline} onChange={handleChange} style={{ width: "90%" }} />
            </div>
            <button className='btn btn-success' type="submit">Create Task</button>
            </TaskContainer>
          </form>
        </div>
      
    </div>
    </>
  );
};

export default CreateTaskForm;

const TaskContainer = styled.div`
    
    width: 60%;
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
    border-radius: 8px;
    margin: 80px 0 10px 80px;
    padding: 50px 0 25px 25px;
`
