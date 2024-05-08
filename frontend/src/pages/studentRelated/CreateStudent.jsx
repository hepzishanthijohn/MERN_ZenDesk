import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import studentImage from '../../assets/images/student1.jpg'; // Importing the image

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  contact: Yup.string().required('Contact is required'),
  course: Yup.string().required('Course is required'),
});

const CreateStudent = () => {
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
      await axios.post('https://mernstack-zendesk.onrender.com/student/register', values);
      navigate('/portal/studentList');
    } catch (error) {
      console.error('Error creating student:', error);
    }
    setSubmitting(false);
  };

  return (
    <div className="boxContainer">
      <div className="container " style={{ marginTop: "7rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="text-center mb-2">Create Student</h4>
              </div>
              <div className="card-body">
                <img src={studentImage} alt="Student" className="img-fluid mb-3" style={{ height: "40vh" }} />
                <Formik
                  initialValues={{ name: '', email: '', password: '', contact: '', course: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-3 ">
                        <label className="form-label">Name</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <Field type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contact</label>
                        <Field type="number" name="contact" className="form-control" />
                        <ErrorMessage name="contact" component="div" className="text-danger" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Course</label>
                        <Field as="select" name="course" className="form-select">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudent;
