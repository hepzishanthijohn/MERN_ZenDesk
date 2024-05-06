import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const UpdateStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mernstack-zendesk.onrender.com/student/${id}`)
      .then(result => {
        setName(result.data.name);
        setEmail(result.data.email);
        setContact(result.data.contact);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://mernstack-zendesk.onrender.com/student/${id}`, { name, email, contact })
      .then(result => {
        navigate('/portal/studentList');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="boxContainer">
      <div className="container" style={{marginTop:"10rem"}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2 className="text-center mb-0">Update User</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleUpdate}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" placeholder="Enter your Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" placeholder="Enter your Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact</label>
                    <input type="number" placeholder="Enter your Contact" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
      
          </>
  );
};

export default UpdateStudent;
