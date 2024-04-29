import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar'

const CreateMentor = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/mentor/register', formData);
      navigate('/portal/mentorList')
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };




  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center ">
        <div className="w-50 bg-white text-dark rounded p-3 mt-5">
          <div className="container" style={{ fontSize: "15px", marginTop: "2rem" }}>
            <h2>Create Mentor</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Contact:</label>
                <input type="number" name="contact" value={formData.contact} onChange={handleChange} className="form-control" />
              </div>
              <div className="form-group">
                <label>Course:</label>
                <select name="course" value={formData.course} onChange={handleChange} className="form-control">
                  <option value="">Select Course</option>
                  {courses.map(course => (
                    <option key={course._id} value={course.courseName}>{course.courseName}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMentor;