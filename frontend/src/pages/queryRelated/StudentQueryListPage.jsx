import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import query from '../../assets/images/query.webp'
import Navbar from '../../components/sub-components/Navbar/Navbar';

const StudentQueryListPage = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true); // State variable to track loading status
  const { studentId } = useParams();

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/query`);
        setQueries(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log('Error fetching queries:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchQueries();
  }, []);

  const handleViewQuery = (queryId, queryTitle) => {
    localStorage.setItem('currentQueryId', queryId);
    localStorage.setItem('currentQueryTitle', queryTitle);
  };

  return (
    <div className="container">
      {loading ? ( // Display loading indicator if loading is true
        <LoadingContainer><h3>Loading...</h3></LoadingContainer>
      ) : (
        <QueryContainer>
          <Container>
            <h2 className='text-center '>Student Queries</h2>
            <ul className='list-unstyled d-flex justify-content-center align-items-center flex-column fs-6'>
              {queries.map((query, index) => (
                <TaskContainer key={query._id}>
                  <div>
                    <h6 className='mt-4'>Query {index + 1}</h6>
                    <hr />
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
          <ImgContainer>
            <div className='ml-5'>
              <img src={query} alt="Queries" />
            </div>
          </ImgContainer>
        </QueryContainer>
      )}
    </div>
  );
};

export default StudentQueryListPage;

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Container = styled.div`
  width: 90%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 0 0 0;
  }
`;
const QueryContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 90%;
    display:flex;
    flex-direction: column-reverse;
  }
`;

const ImgContainer = styled.div`
  img{
    height:30rem;
    margin: 2rem 0 0 0;
  }
  width: 60%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    img{
      height: 18rem
    }
  }
`;

const TaskContainer = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #dedede;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
  border-radius: 12px;
  margin:0 0 20px 10rem;
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
