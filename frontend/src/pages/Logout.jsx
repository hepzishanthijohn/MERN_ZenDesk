import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from '../components/main-components/UserContext'; // Update the path accordingly

const Logout = () => {
 
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  const [userName, setUsername] = useState(null);
    

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
    logout(); // Call the logout function from the context
    navigate('/chooseUser');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <LogoutContainer>
      <h1>{userName }</h1>
      <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
      <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
      <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
    </LogoutContainer>
  );
};

export default Logout;

const LogoutContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #85769f66;
  color: black;
`;

const LogoutMessage = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #333;
  }
`;

const LogoutButtonLogout = styled(LogoutButton)`
  background-color: #ea0606;
`;

const LogoutButtonCancel = styled(LogoutButton)`
  background-color: rgb(99, 60, 99);
`;
