import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import responseImg from "../../assets/images/response.webp"
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QueryResponse = () => {
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
      const queryIdFromStorage = localStorage.getItem('currentqueryId');
      const response = await axios.get(`https://mernstack-zendesk.onrender.com/query/${queryIdFromStorage}`);
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
      const submissionData = {
        queryTitle: queryTitleFromStorage,
        submission,
        submissionDate: new Date()
      };
      const queryIdFromStorage = localStorage.getItem('currentQueryId');
      await axios.post(`https://mernstack-zendesk.onrender.com/querySubmission/${queryIdFromStorage}`, submissionData);
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
    <Container>
      <Content>
        <h1>Query Response Page</h1>
        <hr />
        <TaskContainer>
          {submissionSuccess && <SuccessMessage>Response submitted successfully!</SuccessMessage>}
          {query ? (
            <div>
              <h6><strong>Query Title: </strong>{query.title}</h6>
              <blockquote><p>Description: {query.description}</p></blockquote>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Query Response:</label>
                  <input className="form-control" type="text" name="queryResponse"
                    value={submission.queryResponse} onChange={handleChange} />
                </div>
                <div className='button-group'>
                  <SubmitButton type="submit" disabled={submitting}>Submit</SubmitButton>
                  <CancelButton onClick={() => navigate(-1)}>Back</CancelButton>
                </div>
              </form>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </TaskContainer>
      </Content>
      <ImgContainer>
        <img src={responseImg} alt="" />
      </ImgContainer>
    </Container>
  );
};

export default QueryResponse;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  img{
    height:18rem;
    margin: 2rem 0 0 0;
  }
  width: 40%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 60%;
  margin: 0 0 0 10rem;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 0 0 10rem;
  }
`;

const TaskContainer = styled.div`
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
  border-radius: 12px;
  padding: 20px;
  margin-top: 50px;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  border-color: #c3e6cb;
  padding: 10px;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const SubmitButton = styled(FormButton)`
  background-color: #007bff;
  color: #fff;
  margin-right: 10px;

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`

const CancelButton = styled(FormButton)`
  background-color: #dc3545;
  color: #fff;
`
