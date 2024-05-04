import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import jwt_decode from 'jwt-decode';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');

    if (userToken) {
      try {
        const decodedToken = jwt_decode(userToken);
        setUser(decodedToken.user);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.error('User token not found in local storage');
    }
  }, []);

  return (
    <div className="container">
        <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="text-center mb-4">
                <FaUserCircle style={{ fontSize: '5rem' }} />
              </div>
              {user && (
                <>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default UserProfilePage;
