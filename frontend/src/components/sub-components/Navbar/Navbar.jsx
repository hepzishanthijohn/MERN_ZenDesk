import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Dropdown } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function Navbar() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      try {
        const decodedToken = jwt_decode(userToken);
        const userName = decodedToken.user.name;
        setUsername(userName);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('Admin token not found in local storage');
    }
  }, []);

  const handleLogout = () => {
    
    // Redirect to the login page after logout
    navigate('/logoutpage');
  };

  return (
    <BootstrapNavbar style={{ backgroundColor: "#3f05b3", top: "0", width: "100%", marginBottom: "8rem", position: "fixed", zIndex: "999" }} expand="lg">
      <Nav className="ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            <span style={{ color: "white", fontSize: "19px" }}><span style={{ fontSize: "23px" }}>{username}</span></span>
            <span className='ml-3 mr-2'><FaUserCircle style={{color:"white",fontSize: "50px"}}/></span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/portal/profile">Profile</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
