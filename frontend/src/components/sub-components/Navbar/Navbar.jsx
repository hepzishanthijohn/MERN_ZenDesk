import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

function Navbar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/auth');
      setUsername(response.data.name);
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  };

  return (
    <BootstrapNavbar style={{ backgroundColor: "#e2c9ff" }} expand="lg">
      <Nav className="ml-auto">
        <Nav.Link disabled className="user-icon">
          <span style={{ color: "black", fontSize: "19px" }}><strong>{username}</strong></span>
          <span><FaUser /></span>
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
