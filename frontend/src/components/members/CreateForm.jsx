import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/members', formData);
      navigate('/portal/listmember')
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };




  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white text-dark rounded p-3">
        <div className="container" style={{ fontSize: "15px" }}>
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
              <label>Contact:</label>
              <input type="contact" name="contact" value={formData.contact} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default CreateForm;
