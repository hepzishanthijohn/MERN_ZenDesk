import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const CreateStudent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', contact: '', course: '' });
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5003/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5003/student/register', formData);
      navigate('/portal/studentList');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex vh-100 justify-content-center align-items-center ">
        <div className="w-50 bg-white text-dark rounded p-3 mt-5">
          <div className="container" style={{ fontSize: "15px", marginTop: "2rem" }}>
            <h2>Create Data</h2>
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

export default CreateStudent;
