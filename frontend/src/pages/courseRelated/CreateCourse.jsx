import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import courseImage from '../../assets/images/course1.jpg';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  courseName: Yup.string().required('Course Name is required'),
});

const CreateCourse = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/course', values);
      navigate('/portal/courseList');
    } catch (error) {
      console.error('Error creating course:', error);
      setError('An error occurred while creating the course. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-dark text-light">
                <h2 className="mb-3 d-flex justify-content-center">Add Course</h2>
              </div>
              <div className="card-body">
                <img src={courseImage} alt="Course" className="img-fluid " style={{ height: "40vh", marginTop: "-2rem" }} />
                <Formik
                  initialValues={{ courseName: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-3 ml-5 mr-5">
                        <label className="form-label">Enter the Course Name:</label>
                        <Field type="text" name="courseName" className="form-control" />
                        <ErrorMessage name="courseName" component="div" className="alert alert-danger mt-2" />
                      </div>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <div className="text-center mb-5 ">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateCourse;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 6rem;
    margin-top: 10rem; 
  }
`;
