import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QueryResolvedPage = () => {
  const { queryId } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(null);
  const [submission, setSubmission] = useState({
    queryResponse: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // State to track submission success

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const queryIdFromStorage = localStorage.getItem('currentQueryId');
      const response = await axios.get(`http://localhost:5003/query/${queryIdFromStorage}`);
      setQuery(response.data);
    } catch (error) {
      console.log('Error fetching query details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const queryTitleFromStorage = localStorage.getItem('currentQueryTitle');
      const queryIdsFromStorage = localStorage.getItem('currentQueryId');
      const submissionData = {
        
        queryTitle: queryTitleFromStorage,
        submission,
        submissionDate: new Date()
      };
      const queryIdFromStorage = localStorage.getItem('currentQueryId');
      await axios.post(`http://localhost:5003/querySubmission/${queryIdsFromStorage}`, submissionData);
      setSubmissionSuccess(true); // Set submission success state to true
      // Optionally, you can display a success message or redirect to another page
    } catch (error) {
      console.log('Error submitting query:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar />
      <h1 className='d-flex ' style={{ marginLeft: "10rem" }}>Query Response Page</h1>
      <TaskContainer>
        {submissionSuccess && <SuccessMessage>Response submitted successfully!</SuccessMessage>} {/* Render success message */}
        {query ? (
          <div style={{ fontSize: "19px" }}>
            <div>
              <h5>Query Title : {query.title}</h5>
            </div>
            <blockquote className="blockquote"><p>Description: {query.description}</p></blockquote>
            
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </TaskContainer>
    </div>
  );
};

export default QueryResolvedPage;

const TaskContainer = styled.div`
  width:70%;
  fontsize: 20px;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
  border-radius: 12px;
  margin:50px 0 30px 70px;
  padding:1px 0 22px 25px;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
  padding: 10px;
  margin-bottom: 10px;
`;
