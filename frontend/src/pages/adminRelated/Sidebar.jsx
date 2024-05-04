import React, { useContext, useState,useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import jwt_decode from 'jwt-decode'
import { FaHome } from 'react-icons/fa';
import { MdGroupAdd } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import {Button, Layout} from 'antd';
import {Menu} from 'antd';
import { AiOutlineFileDone } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";
import { BsPatchQuestion } from "react-icons/bs";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons'
import { SiCoursera } from "react-icons/si";
import {HomeOutlined, AppstoreOutlined,AreaChartOutlined,PayCircleOutlined, SettingOutlined} from '@ant-design/icons'
import { useUserContext } from "../../components/main-components/UserContext";
import './sidebar.css';

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();
    const {Header, Sider} = Layout;

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
    
        if (userToken) {
            try {
                const decodedToken = jwt_decode(userToken);
              
                const role = decodedToken.user.role;
                setUserRole(role);
                
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            console.error('Admin token not found in local storage');
        }
    }, []);
    
    const [show, setShow] = useState(false);

    


    return (
        <>
        <div className='position-fixed w-100' style={{marginTop:"0px",marginBottom:"3rem",zIndex:"999"}}>
            <Navbar></Navbar>
        </div>
        <Sider collapsed={collapsed} 
        collapsible
        trigger= {null}
        
         className='sidebar'>
            <div className="sidebar-header">
                <p>Zen <br/> Clone</p> 
            </div>
            <div className="sidebar-content">
            <Menu className="menu-bar">
            
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Menu.Item  
                        key='Home' className='menubar-items '  icon={<FaHome style={{fontSize:"20px"}}/>}> Home</Menu.Item>
                        
                    </Link>
              
               
            {userRole && userRole === 'admin' &&(
                    
                        <Link to="/portal/admindashboard" style={{textDecoration:"none"}}>
                            <Menu.Item 
                        key='AdminDashboard' className='menubar-items ' icon={<AppstoreOutlined style={{fontSize:"20px"}}/>}> AdminDashboard</Menu.Item>
                        </Link>
                    
                )}
                {userRole && (userRole === 'admin' || userRole === 'student')&& (
                 
                    <Link to="/portal/clientdashboard" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='StudentDashboard' className='menubar-items ' icon={<AppstoreOutlined style={{fontSize:"20px"}}/>}> StudentDashboard</Menu.Item>
                        
                    </Link>
               )}
                {userRole && (userRole === 'admin' || userRole ===  'mentor')&& (
                
                    <Link to="/portal/mentordashboard" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='MentorDashboard' className='menubar-items ' icon={<AppstoreOutlined style={{fontSize:"20px"}}/>}> Mentor Dashboard</Menu.Item>
                        </Link>
               )}
                {userRole && userRole === 'admin'&& (
                    
                        <Link to="/portal/studentList" style={{textDecoration:"none"}}>
                        <Menu.Item 
                        key='Add Students' className='menubar-items ' icon={<MdGroupAdd style={{fontSize:"20px"}}/>}> Add Students</Menu.Item>
                        </Link>
                   
                )}
                {userRole && userRole === 'admin' && (
                    
                        <Link to="/portal/mentorList" style={{textDecoration:"none"}}>
                        <Menu.Item 
                        key='Add Mentors' className='menubar-items ' icon={<MdGroupAdd style={{fontSize:"20px"}}/>}> Add Mentors</Menu.Item>
                         </Link>
                   
                )}
                {userRole && userRole === 'admin' && (
                    
                        <Link to="/portal/courseList" style={{textDecoration:"none"}}>
                        <Menu.Item 
                        key='Add Courses' className='menubar-items ' icon={<SiCoursera style={{fontSize:"20px"}}/>}> Add Courses</Menu.Item>
                         </Link>
                   
                )}
                {userRole && userRole === 'admin'&&(
                    
                        <Link to="/portal/listmember" style={{textDecoration:"none"}}>
                        <Menu.Item 
                        key='Members' className='menubar-items ' icon={<FaPeopleGroup style={{fontSize:"20px"}}/>}> Members</Menu.Item>
                       </Link>
                   
                )}
                
                    <Link to="/portal/class" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='classes' className='menubar-items ' icon={<SiGoogleclassroom style={{fontSize:"20px"}}/>}> class</Menu.Item>
                       </Link>
               
                {userRole && userRole === 'admin' &&(
                
                    <Link to="/portal/studentqueries" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Student Queries' className='menubar-items ' icon={<BsPatchQuestion style={{fontSize:"20px"}}/>}> Student Queries</Menu.Item>
                      </Link>
               )}
                {userRole && userRole === 'student' &&(
                
                    <Link to="/portal/queryFrontPage" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Queries' className='menubar-items ' icon={<MdQuestionAnswer style={{fontSize:"20px"}}/>}> Queries</Menu.Item>
                      </Link>
               )}
                {userRole && userRole === 'admin'&&(
                    
                    <Link to="/portal/createTask"  style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Add Task' className='menubar-items ' icon={<FaTasks style={{fontSize:"20px"}}/>}> Add Task</Menu.Item>
                      </Link>
               
                )}
                {userRole && userRole === 'student'&&(
                
                    <Link to="/portal/taskList"  style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='TaskList' className='menubar-items ' icon={<FaClipboardList style={{fontSize:"20px"}}/>}>Tasks List</Menu.Item>
                      </Link>
               )}
                {userRole && userRole === 'admin'&&(
                    
                    <Link to="/portal/studentTaskList"  style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Student TasksList' className='menubar-items ' icon={<GrTask style={{fontSize:"20px"}}/>}> Student TasksList</Menu.Item>
                    </Link>
               
                )}
                
                {userRole && userRole ==='student'&&(
                
                    <Link to="/portal/submitTaskForm"  style={{textDecoration:"none"}}>
                        <Menu.Item 
                        key='Submitted Tasks' className='menubar-items ' icon={<GrTask style={{fontSize:"20px"}}/>}> Submitted Tasks</Menu.Item>
                    </Link>
               
                  )}
                
               
                
                
                    <Link to="/portal/webcode" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Webcode' className='menubar-items ' icon={<GoTasklist style={{fontSize:"20px"}}/>}> Webcode</Menu.Item>
                     </Link>
               
                
                    <Link to="/portal/capstone" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Capstone' className='menubar-items ' icon={<GoTasklist style={{fontSize:"20px"}}/>}> Capstone</Menu.Item>
                    </Link>
               
                
                
                    <Link to="/portal/portfoliosubmission" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='PortFolio Submission' className='menubar-items ' icon={<GoTasklist style={{fontSize:"20px"}}/>}> PortFolio Submission</Menu.Item>
                    </Link>
               
                
                    <Link to="/portal/application" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Interview Tasks' className='menubar-items ' icon={<AiOutlineFileDone style={{fontSize:"20px"}}/>}> Application</Menu.Item>
                     </Link>
               
                
                    <Link to="/portal/interviewtask" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Interview Tasks' className='menubar-items ' icon={<GoTasklist style={{fontSize:"20px"}}/>}> Interview Tasks</Menu.Item>
                    </Link>
               
                
                    <Link to="/portal/certificate" style={{textDecoration:"none"}}>
                    <Menu.Item 
                        key='Certificates' className='menubar-items ' icon={<PiCertificateFill style={{fontSize:"20px"}}/>}> Certificates</Menu.Item>
                   </Link>
                
                
                {userRole && userRole === 'admin' && (
                    
                        <Link to="#" style={{textDecoration:"none"}}>
                        <Menu.Item 
                        key='Settings' className='menubar-items ' icon={<MdOutlineSettingsSuggest style={{fontSize:"20px"}}/>}> Settings</Menu.Item>
                   </Link>
                   
                )}
            </Menu>
            </div>
            <div className="userinfo">
                
                <button className="btn btn-success btn-sm mr-2 bg-" onClick={() => navigate(-1)}>Back</button>
                <Link className="btn btn-success btn-sm" to="/logoutpage">Logout</Link>
            </div>

            <Layout>
            <Button  type='text'
            className='toggle d-flex justify-content-center alignt-items-center' 
            onClick={()=> setCollapsed(!collapsed)}
            icon={collapsed ? 
            <MenuUnfoldOutlined style={{}}/> : <MenuFoldOutlined/> } style={{color:"white"}}/>
         
            </Layout>
           
        </Sider>
        </>
    );
}

export default Sidebar;
