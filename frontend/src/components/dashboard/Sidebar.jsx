import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/MemberContext';
import LoginContext from '../Context/LoginContext';
import './sidebar.css';

function Sidebar() {
    const userdata = useContext(UserContext);
    const logindata = useContext(LoginContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const toggleSidebar = () => {
        setShow(!show);
    };



    return (
        <div className={`sidebar ${show ? 'active' : ''}`}>
            <div className="sidebar-header">
                <h3>ZenClass</h3>
            </div>
            <div className="sidebar-content">
            <ul className="list-unstyled components">
            {logindata.isAdminVisible && (
                    <li>
                        <Link to="/portal/admindashboard" style={{textDecoration:"none",color:"black"}}>
                            <i className="fa fa-user-secret fa-2x fa-fw " style={{color:"#404040"}}></i>
                            <span><strong>Admin Dashboard</strong></span>
                        </Link>
                    </li>
                )}
                {logindata.isAdminVisible && (
                    <li>
                        <Link to="/portal/listmember" style={{textDecoration:"none",color:"black"}}>
                            <i className="fa fa-users fa-2x fa-fw " style={{color:"#404040"}}></i>
                            <span><strong>Members</strong></span>
                        </Link>
                    </li>
                )}
                <li>
                    <Link to="/" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-home fa-2x fa-fw" style={{marginRight:"4px", color:"#404040"}}></i>
                        <span><strong>Home</strong></span>
                    </Link>
                </li>
                <li>
                    <Link to="/portal/class" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-chalkboard-teacher fa-2x fa-fw" style={{ marginRight:"5px",color:"#404040"}}></i>
                        <span ><strong>Class</strong></span>
                    </Link>
                </li>
                <li >
                    <Link to="/portal/clientdashboard" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-th-large fa-2x fa-fw" style={{marginRight:"4px", color:"#404040"}}></i>
                        <span><strong>Dashboard</strong></span>
                    </Link>
                </li>
                <li >
                    <Link to="/portal/task"  style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-clipboard-list fa-2x fa-fw" style={{marginRight:"5px",color:"#404040"}}></i>
                        <span ><strong>Tasks</strong></span>
                    </Link>
                </li>
                <li>
                    <Link to="/portal/webcode" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-desktop fa-2x fa-fw" style={{ marginRight:"5px",color:"#404040"}}></i>
                        <span ><strong>Webcode</strong></span>
                    </Link>
                </li>
                <li >
                    <Link to="/portal/capstone" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-user-circle fa-2x fa-fw" style={{color:"#404040"}}></i>
                        <span ><strong>Capstone</strong></span>
                    </Link>
                </li>
                <li>
                    <Link to="/portal/querypage" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-question-circle fa-2x fa-fw" style={{marginRight:"5px",color:"#404040"}}></i>
                        <span ><strong>Queries</strong></span>
                    </Link>
                </li>
                <li style={{paddingRight:"14px"}}>
                    <Link to="/portal/portfoliosubmission" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-user-circle fa-2x fa-fw" style={{ marginRight:"5px",color:"#404040"}}></i>
                        <span ><strong>Portfolio Submission</strong></span>
                    </Link>
                </li>
                <li>
                    <Link to="/portal/application" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-clipboard fa-2x fa-fw" style={{ color:"#404040"}}></i>
                        <span ><strong>Application</strong></span>
                    </Link>
                </li>
                <li>
                    <Link to="/portal/interviewtask" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-clipboard-list fa-2x fa-fw" style={{ marginRight:"2px",color:"#404040"}}></i>
                        <span ><strong>Interview Tasks</strong></span>
                    </Link>
                </li>
                <li>
                    <Link to="/portal/certificate" style={{textDecoration:"none",color:"black"}}>
                        <i className="fa fa-certificate fa-2x fa-fw" style={{ marginRight:"5px",color:"#404040"}}></i>
                        <span ><strong>Certificates</strong></span>
                    </Link>
                </li>
                
                {logindata.isAdminVisible && (
                    <li>
                        <Link to="#" style={{textDecoration:"none",color:"black"}}>
                            <i className="fa fa-cogs fa-2x fa-fw " style={{color:"#404040"}}></i>
                            <span><strong>Settings</strong></span>
                        </Link>
                    </li>
                )}
            </ul>
            </div>
            <div className="userinfo">
                <span className="username">{userdata.username}</span>
                <button className="btn btn-outline-success btn-sm" onClick={() => navigate(-1)}>Back</button>
                <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
            </div>
            <button onClick={toggleSidebar} className="sidebar-toggle-btn">
                <i className={`fa fa-chevron-${show ? 'left' : 'right'}`}></i>
            </button>
        </div>
    );
}

export default Sidebar;
