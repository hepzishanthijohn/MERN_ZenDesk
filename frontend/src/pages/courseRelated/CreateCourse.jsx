import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const CreateCourse = () => {
  const [formData, setFormData] = useState({ courseName: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!formData.courseName) {
        setError('Please enter a course name');
        return;
      }
      
      await axios.post('https://mernstack-zendesk.onrender.com/course', formData);
      navigate('/portal/courseList');
    } catch (error) {
      console.error('Error creating data:', error);
      setError('An error occurred while creating the course. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w-50 bg-white text-dark rounded p-3">
          <div className="container" style={{ fontSize: '15px', marginTop: '-15rem' }}>
            <h2>Create Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter the Course Name:</label>
                <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} className="form-control" />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
