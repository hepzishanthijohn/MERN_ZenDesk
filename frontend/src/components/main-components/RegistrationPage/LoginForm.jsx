import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { useUserContext } from '../UserContext'


//Validation Schema using yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at lease 8 characters.')
        .required('Required'),
});

function LoginForm(props) {
    const { setUser } = useUserContext();

    const navigateTo = useNavigate();
    return (
        <>

            <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
                <div className="container d-flex justify-content-center  py-4  h-100">
                    
                            <div className="card " style={{ borderRadius: " 1rem" }}>
                                <div className="row-5 d-flex justify-content-center ">

                                    <div className="col d-flex align-items-center">
                                        <div className="card-body p-5  text-black">



                                            <div className="d-flex align-items-center mb-5 pb-3">
                                                <i className="fa fa-cubes fa-4x me-5" style={{ color: "#ff6219" }}></i>
                                                <span className="h1 fw-bold mb-2">Sign-In</span>
                                            </div>

                                            <h3 className="fw-normal mb-5 pb-4" style={{ letterSpacing: "1px",fontSize:"20px" }}>Sign into your account</h3>

                                            <Formik
                                                initialValues={{ email: '', password: '' }}
                                                validationSchema={LoginSchema}
                                                onSubmit={(values, { setSubmitting }) => {
                                                    axios.post('http://localhost:5000/auth/login', values, {
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                    .then(response => {
                                                        // Handle response data here
                                                        const data = response.data;
                                                        localStorage.setItem('userToken', data.token);
                                                        const decoded = jwt_decode(data.token);
                                                        setUser({ token: data.token, role: decoded.user.role });
                                                        navigateTo('/portal/login');
                                                        setSubmitting(false);
                                                    })
                                                    .catch(error => {
                                                        console.error('Error:', error);
                                                        setSubmitting(false);
                                                    });
                                                }}>
                                                {({ isSubmitting }) => (
                                                    <Form style={{fontSize:"17px"}}>
                                                        <div className="form-outline mb-5" >
                                                            <Field type='email' name="email" placeholder="Email"></Field>
                                                            <ErrorMessage name='email' component="div"></ErrorMessage>
                                                            <p className="form-label" htmlFor="form2Example17">Email</p>
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <Field type='password' name="password" placeholder="Password"></Field>
                                                            <ErrorMessage name='password' component="div"></ErrorMessage>
                                                            <p className="form-label" htmlFor="form2Example27">Password</p>
                                                        </div>
                                                        <div className="pt-1 mb-4">
                                                            <button className="btn btn-dark btn-lg " type="submit" disabled={isSubmitting}><h3>Login</h3></button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                            <div style={{fontSize:"20px"}}>
                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}><strong>Don't have an account? </strong><Link to="/registrationform"
                                                style={{ color: "#393f81" }}>Register here</Link></p>
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

export default LoginForm




