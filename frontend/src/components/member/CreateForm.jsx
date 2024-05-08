import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../sub-components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '',password: '', contact: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/members/register', formData);
      navigate('/portal/listmember')
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };




  return (
    <div className='container'>
      
      <div className="submitTask_container d-flex vh-100 bg-white  justify-content-center align-items-center">
      <div className="w-50 h-100 bg-white text-dark rounded p-3">
        <div className="w-100" style={{ fontSize: "15px",marginTop:"-1rem",border:"1px solid lightblue",borderRadius:'10px',padding:"15px"}}>
          <h2>Create Data</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Contact:</label>
              <input type="contact" name="contact" value={formData.contact} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary mb-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>


  );
};

export default CreateForm;
