import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const StudentQueryListPage = () => {
  const [queries, setQueries] = useState([]);
  const { studentId } = useParams();

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/query`);
        setQueries(response.data);
      } catch (error) {
        console.log('Error fetching queries:', error);
      }
    };

    fetchQueries();
  }, []);

  const handleViewQuery = (queryId, queryTitle) => {
    localStorage.setItem('currentQueryId', queryId);
    localStorage.setItem('currentQueryTitle', queryTitle);
  };

  return (
    <Container>
      <h2 className='text-center my-5'>Student Queries</h2>
      <ul className='list-unstyled d-flex justify-content-center align-items-center flex-column fs-6'>
        {queries.map((query, index) => (
          <TaskContainer key={query._id}>
            <div>
              <h6 className='mt-4'>Query {index + 1}</h6>
              <h3>{query.title}</h3>
              <p>{query.description}</p>
              <Link
                to={`/portal/queryResponsepage/${query._id}`}
                className="btn btn-primary mb-3"
                onClick={() => handleViewQuery(query._id, query.title)}
              >
                View
              </Link>
            </div>
          </TaskContainer>
        ))}
      </ul>
    </Container>
  );
};

export default StudentQueryListPage;

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
`;

const TaskContainer = styled.div`
  width: 70%;
  background: #ffffff;
  border: 1px solid #dedede;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
  border-radius: 12px;
  margin-bottom: 20px;
  padding: 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0056b3;
      border-color: #0056b3;
    }
  }
`;
