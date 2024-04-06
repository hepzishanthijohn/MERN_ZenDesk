import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; 
// import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';

 // Import custom CSS file for Navbar styling

function Navbar() {
  // const userLogin =useSelector(state => state.userLogin);
  
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from the API when the component mounts
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get('https://mernstack-zendesk.onrender.com/users');
      // Assuming the response contains the username under a 'username' key
      setUsername(response.data[0].name);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  };

  return (
    <BootstrapNavbar bg="light" expand="lg">
      
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Nav className="ml-auto">
        <Nav.Link disabled className="user-icon"><span style={{color:"black",fontSize:"19px"}}><strong>{username}</strong></span><span><FaUser /></span> </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
