import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


//Validation Schema using yup
const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at lease 8 characters.')
        .required('Required'),
});

function RegistrationForm() {
    const navigateTo = useNavigate();
    return (
        <>

<section className="vh-100" style={{ background:`linear-gradient(120deg, #4a0be2, #e6e6fa)`}}>
        <div className="registrationContainer d-flex justify-content-center align-items-center py-4  h-100">

              <div className="card d-flex align-items-center " >
                
                 
                  
                    <div className="card-body p-5  text-black">

                      

                        <div className="d-flex align-items-center mb-4 pb-4">
                          <i className="fa fa-cubes fa-3x me-5" style={{ color: "#ff6219" }}></i>
                          <span className="h3">Sign-Up</span>
                        </div>
      

                                            <Formik
                                                initialValues={{ name: '', email: '', password: '' }}
                                                validationSchema={RegistrationSchema}
                                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                                   
                                                    axios.post('https://mernstack-zendesk.onrender.com/auth/register', values, {
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        }
                                                    })
                                                        .then(response => {
                                                            // Assuming successful registration if no errors
                                                            navigateTo('/chooseUser');
                                                            // Handle response data here
                                                           
                                                            setSubmitting(false);
                                                            resetForm()
                                                        })
                                                        .catch(error => {
                                                            console.error('Error:', error);
                                                            setSubmitting(false);
                                                        });
                                                }}>
                                                {({ isSubmitting }) => (
                                                    <Form  >
                                                        <div className="form-outline mb-4">
                                                            <Field type='text' name="name" placeholder="Username"
                                                                className="form-control form-control"></Field>
                                                            <ErrorMessage name='name' component="div"></ErrorMessage>
                                                            <p className="form-label" htmlFor="form2Example17">Name</p>
                                                        </div>

                                                        <div className="form-outline mb-4">
                                                            <Field type='email' name="email" placeholder="Email"
                                                                className="form-control form-control "></Field>
                                                            <ErrorMessage name='email' component="div"></ErrorMessage>
                                                            <p className="form-label" htmlFor="form2Example17">Email</p>
                                                        </div>


                                                        <div className="form-outline mb-4">
                                                            <Field type='password' name="password" placeholder="Password"
                                                                className="form-control form-control"></Field>
                                                            <ErrorMessage name='password' component="div"></ErrorMessage>
                                                            <p className="form-label" htmlFor="form2Example27">Password</p>
                                                        </div>


                                                        <div className="pt-1 mb-4 ">
                                                            <button className="btn btn-dark " style={{borderRadius:"4px",fontSize:"19px", backgroundColor: "#4a1be2" }}  type="submit" disabled={isSubmitting}>Register</button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                            <p className="mb-5 pb-lg-8" style={{ color: "#393f81",fontSize:"19px" }}>Already have an account? <Link to="/AdminLogin"
                                                style={{ color: "#4a1be2",textDecoration:"underline" }}>login here</Link></p>




                                        </div>
                                    </div>
                                </div>
                           
                
            </section>
        </>
    )
}

export default RegistrationForm;








