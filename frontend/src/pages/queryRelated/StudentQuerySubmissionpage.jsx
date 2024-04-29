import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import axios from 'axios';
import styled from 'styled-components';

const StudentQuerySubmissionpage = () => {
  const navigate = useNavigate();

  const [queryData, setQueryData] = useState({ username: '', title: '', description: '', category: '', preferredVoiceCommunication: '' });
  const [submitted, setSubmitted] = useState(false); // State to track if query has been submitted
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      try {
        const decodedToken = jwt_decode(userToken);
        const userName = decodedToken.user.id;
        setUsername(userName);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('User token not found in local storage');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryData({ ...queryData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Include username from local storage in the queryData object
      const dataWithUsername = { ...queryData, username: username };

      // Send POST request with data containing the username
      await axios.post('https://mernstack-zendesk.onrender.com/query', dataWithUsername);

      setSubmitted(true);
      navigate('/portal/queryFrontPage') // Set submitted to true
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const options = [
    "Class Doubt",
    "Placement related",
    "Coordination Related",
    "Pre-BootCamp Related",
  ];

  const langOption = [
    "English",
    "Tamil",
  ];

  return (
   <>
   
    <div className='d-flex'>
    <div className='w-100 bg-white ml-5' style={{marginTop:"3rem"}}>
      
      {submitted && (
        <div >
          <div className='ml-5' >
            <p className='fs-3 mb-3 ml-5' style={{ color: 'green'}}>Your query has been submitted successfully!</p>
          </div>
        </div>
      )} {/* Display success message if submitted is true */}
      <TaskContainer>
      <div  style={{ fontSize: "18px", color: "black" }}>
        <div>
          <h5 className='fs-4 mb-5 mt-5'>Topic</h5>
          <div className="mr-5 ml-5 mb-5">
            <label htmlFor="category">Category</label><br />
            <select className="form-control w-100 fs-5" name="category" onChange={handleChange}>
              <option>Please choose one option</option>
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <div className="mr-5 mb-5 ml-5">
            <label htmlFor="language">Preferred Voice Communication Language</label><br />
            <select className="form-control w-100 fs-5" name="preferredVoiceCommunication" onChange={handleChange}>
              <option>Please choose one option</option>
              {langOption.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div >
          <h5 className='fs-4 mb-5'>Details</h5>
          <form onSubmit={handleSubmit}>
            <div className="mr-5 mb-5 ml-5">
              <label htmlFor="title">Query Title:</label><br />
              <input
                className="form-control w-100 fs-5"
                type="text"
                name="title"
                value={queryData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mr-5 mb-5 ml-5">
                <label htmlFor="description">Query Description:</label><br />
                <textarea
                  className="form-control w-100 fs-5"
                  name="description"
                  value={queryData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='d-flex justify-content-end'>
              <button  type="submit" className="btn btn-primary mr-3">Submit</button>
            <button  className="btn btn-primary mr-5" onClick={() => navigate('/portal/querypage')}>Cancel</button>
          </div>
            </form>
            
        </div>

      </div>
      </TaskContainer>
      <div className='d-flex justify-content-end mr-5 mb-5'>
        <button className="btn btn-success" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
    </div>
   </>
  );
};

export default StudentQuerySubmissionpage;

const TaskContainer= styled.div`
    
    width:70%;
    fontsize: 20px;
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
    border-radius: 12px;
    margin:50px 0 30px 70px;
    padding:1px 0 22px 25px;
  
`
