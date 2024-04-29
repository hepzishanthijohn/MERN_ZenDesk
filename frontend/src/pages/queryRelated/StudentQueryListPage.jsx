import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';

const StudentQueryListPage = () => {
  const [queries, setQuery] = useState([]);
  const { studentId } = useParams();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/query`);
        setQuery(response.data);
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [queries]);

  // Function to handle storing task ID in local storage
  const handleViewTask = (queryId, queryTitle) => {
    localStorage.setItem('currentqueryId', queryId);
    localStorage.setItem('currentqueryTitle', queryTitle);
  };

  return (
    <div>
      
      <div>

      <ul className='d-flex justify-content-center align-items-center flex-column fs-6' >
      <h2 className='d-flex justify-content-center mb-4' style={{marginTop:"9rem"}}>Student Queries</h2>
        {queries.map((query,index) => (
          <TaskContainer key={query._id}>
            <div>
              <h6 className='mt-4'>Query: {index+1}</h6>
              <h3>{query.title}</h3>
              <p>{query.description}</p>
              <Link
                to={`/portal/queryResponsepage/:${query._id}`}
                className="btn btn-primary mb-3"
                onClick={() => handleViewTask(query._id, query.title)}
              >
                view
              </Link>
            </div>
          </TaskContainer>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default StudentQueryListPage;
const TaskContainer= styled.div`
    
    width:70%;
    background: #ffffff;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
    border-radius: 12px;
    margin:0 0 10px 20px;
    padding:1px 0 12px 25px;`