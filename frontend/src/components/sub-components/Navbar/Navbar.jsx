import React, { useState, useEffect, useContext } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import UserContext from '../../Context/MemberContext';
import { FaUser } from 'react-icons/fa';
import LoginContext from '../../Context/LoginContext';

function Navbar() {
  const userdata = useContext(UserContext);
  const logindata = useContext(LoginContext);
  
  let userName = userdata.username;

  // Capitalize the first letter of the username
  if (userName) {
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
  }

  return (
    <BootstrapNavbar style={{ backgroundColor: "#e2c9ff" }} expand="lg">
      <Nav className="ml-auto">
        <Nav.Link disabled className="user-icon">
          <span style={{ color: "black", fontSize: "19px" }}>{logindata.isAdminVisible ? <span style={{fontSize:"25px"}}>Admin</span> : <span style={{fontSize:"25px"}}>{userName}</span>}</span>
          <span><FaUser /></span>
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
