import React, { useState, useEffect, useContext } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import UserContext from '../../../Context/MemberContext';
import { FaUser } from 'react-icons/fa';
import jwt_decode from 'jwt-decode'
import LoginContext from '../../../Context/LoginContext';

function Navbar() {
  
  const [username, setUsername] = useState(null);
    

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
  
  
  return (
    <BootstrapNavbar style={{ backgroundColor: "#e2c9ff",width:"100%",marginBottom:"8rem",position:"fixed" }} expand="lg">
      <Nav className="ml-auto">
        <Nav.Link disabled className="user-icon">
          <span style={{ color: "black", fontSize: "19px" }}><span style={{fontSize:"25px"}}>{username}</span></span>
          <span><FaUser /></span>
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
