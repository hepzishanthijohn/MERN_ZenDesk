import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import studentImage from '../../assets/images/student1.jpg'; // Importing the image

const CreateStudent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', contact: '', course: '' });
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

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/student/register', formData);
      navigate('/portal/studentList');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="container " style={{marginTop:"7rem"}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="text-center mb-2">Create Student</h4>
            </div>
            <div className="card-body">
              <img src={studentImage} alt="Student" className="img-fluid mb-3" style={{height:"40vh"}}/> {/* Image added here */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contact</label>
                  <input type="number" name="contact" value={formData.contact} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <select name="course" value={formData.course} onChange={handleChange} className="form-select">
                    <option value="">Select Course</option>
                    {courses.map(course => (
                      <option key={course._id} value={course.courseName}>{course.courseName}</option>
                    ))}
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
