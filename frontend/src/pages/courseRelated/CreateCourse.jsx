import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import courseImage from '../../assets/images/course1.jpg';
import styled from 'styled-components';

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
      
      <Container>
      <div className="container " style={{marginTop:"7rem"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-dark text-light">
            <h2 className="mb-3 d-flex justify-content-center">Add Course</h2>
            </div>
            <div className="card-body"></div>
             <img src={courseImage} alt="Course" className="img-fluid " style={{height:"40vh",marginTop:"-2rem"}} />
            <form onSubmit={handleSubmit}>
            <div className="mb-3 ml-5 mr-5">
                <label className="form-label" >Enter the Course Name:</label>
                <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} className="form-control" />
              </div>
              
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="text-center mb-5 ">
              <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              
            </form>
            </div>
          </div>
        </div>
      </div>
      </Container>
      </div>
  
  );
};

export default CreateCourse;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 6rem;
    margin-top: 10rem; 
  }
`;