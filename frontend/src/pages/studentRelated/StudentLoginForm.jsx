import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';


// Validation Schema using yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters.')
        .required('Password is required'),
});

function LoginForm(props) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigateTo = useNavigate();

    return (
        <>
            <section className="vh-100" style={{ background:`linear-gradient(120deg, #ff6a8e, #fad9c8, #fad9c9, #ffd8ff)` }}>
                <div className="studentContainer d-flex justify-content-center  py-4  h-100">
                    <div className="card " style={{ borderRadius: " 1rem" }}>
                        <div className="row-5 d-flex justify-content-center ">
                            <div className="col d-flex align-items-center">
                                <div className="card-body p-5  text-black">
                                    <div className="d-flex align-items-center mb-5 pb-3">
                                        <i className="fa fa-cubes fa-4x me-5" style={{ color: "#ff6219" }}></i>
                                        <span className="h1 fw-bold mb-1">Sign-In</span>
                                        
                                    </div>
                                    {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                    <h3 className="fw-normal mb-2 pb-4" style={{ letterSpacing: "1px", fontSize: "20px" }}>Sign into your account</h3>
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={LoginSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setIsLoading(true); // Set loading state to true when submitting
                                            axios.post('https://mernstack-zendesk.onrender.com/student/login', values, {
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                }
                                            })
                                                .then(response => {
                                                    const data = response.data;
                                                    localStorage.setItem('userToken', data.token);
                                                    localStorage.setItem("currentStudentid",data.id);
                                                    const decoded = jwt_decode(data.token);
                                                    localStorage.setItem("currentStudentid",decoded.user.id);
                                                    
                                                    
                                                    // Navigate to the desired route after successful login
                                                    navigateTo('/portal/clientdashboard');
                                                })
                                                .catch(error => {
                                                    console.error('Error:', error);
                                                    if (error.response && error.response.status === 400) {
                                                        setErrorMessage('*Invalid email or password');
                                                    } else {
                                                        setErrorMessage('An error occurred. Please try again later.');
                                                    }
                                                })
                                                .finally(() => {
                                                    setIsLoading(false); // Set loading state to false after login attempt
                                                    setSubmitting(false);
                                                });
                                        }}>
                                        {({ isSubmitting }) => (
                                            <Form style={{ fontSize: "17px" }}>
                                                <div className="form-outline mb-4">
                                                    <Field type='email' name="email" placeholder="Email" className="form-control" />
                                                    <ErrorMessage name='email'>
                                                        {msg => <div className="text-danger">{msg}</div>}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <Field type='password' name="password" placeholder="Password" className="form-control" />
                                                    <ErrorMessage name='password'>
                                                        {msg => <div className="text-danger">{msg}</div>}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg" type="submit" disabled={isSubmitting || isLoading}>
                                                        {isLoading ? "Loading..." : "Login"}
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                    <div style={{ fontSize: "20px" }}>
                                        <a className="small text-muted" href="#!">Forgot password?</a>
                                        <p className="mb-3 pb-lg-2" style={{ color: "#393f81" }}>
                                            <strong>Don't have an account? </strong>
                                            <Link to="#" style={{ color: "#393f81" }}>Register here</Link>
                                        </p>
                                        <a href="#!" className="small text-muted">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm;
