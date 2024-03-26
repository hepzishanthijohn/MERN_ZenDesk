import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../Context/LoginContext';
import UserContext from '../Context/MemberContext';
import adminImg from './images/admin.png';
import userImg from './images/userImg.png';
import frontImage from './images/frontPage.png'

function Login() {
    const userdata = useContext(UserContext)
    const logindata = useContext(LoginContext);

    const navigate = useNavigate();
    return (
        <section className="vh-100 mt-5 pt-3" style={{fontSize:"19px"}}>

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={frontImage}
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a Email Id" onChange={(event) => userdata.setUsername(event.target.value)} />
                                <label className="form-label" htmlFor="form3Example3">EmailId</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex ms-3">
                                <button onClick={() => {
                                    logindata.setAdminVisible(true);
                                    navigate("/portal/admindashboard")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem",fontSize:"17px" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src={adminImg} />
                                    </div><p>Login as Admin</p>
                                </button>
                                <button onClick={() => {
                                    logindata.setAdminVisible(false);
                                    navigate("/portal/clientdashboard")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem",fontSize:"17px" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src={userImg} />
                                    </div><p>Login as a User</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Login