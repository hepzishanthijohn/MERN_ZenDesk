import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import mentorImage from '../../assets/images/mentor.png';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  contact: Yup.string().required('Contact is required'),
  course: Yup.string().required('Course is required'),
});

const CreateMentor = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/course');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/mentor/register', values);
      navigate('/portal/mentorList');
    } catch (error) {
      console.error('Error creating mentor:', error);
      // Handle error globally
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <div className="d-flex vh-100 justify-content-center align-items-center ">
        <div className="bg-white text-dark rounded p-3 mt-5 d-flex flex-column flex-md-row">
          <ImgContainer>
            <div className="imgElement">
              <img src={mentorImage} alt="" />
            </div>
          </ImgContainer>
          <FormContainer>
            <div className="formElements">
              <h2 className='mb-5 d-flex justify-content-center'>Create Mentor</h2>
              <Formik
                initialValues={{ name: '', email: '', password: '', contact: '', course: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label>Name:</label>
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <Field type="email" name="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <Field type="password" name="password" className="form-control" />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                      <label>Contact:</label>
                      <Field type="number" name="contact" className="form-control" />
                      <ErrorMessage name="contact" component="div" className="text-danger" />
                    </div>
                    <div className="form-group">
                      <label>Course:</label>
                      <Field as="select" name="course" className="form-control">
                        <option value="">Select Course</option>
                        {courses.map(course => (
                          <option key={course._id} value={course.courseName}>{course.courseName}</option>
                        ))}
                      </Field>
                      <ErrorMessage name="course" component="div" className="text-danger" />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </FormContainer>
        </div>
      </div>
    </Container>
  );
};

export default CreateMentor;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0;
    margin-left: 6rem;
    margin-top: 10rem; 
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    margin-left: 50px;
  }
`;
