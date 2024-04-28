import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './form.css'
import Navbar from '../../components/sub-components/Navbar/Navbar'
import axios from 'axios'


const QueryPage = () => {
  const [queryData, setQueryData] = useState([]);
  const navigate = useNavigate()
  const [username, setUsername] = useState(null);
  const [userid,setUserid] =useState(null)
  const [userRole, setUserRole] = useState(null);
    

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
    
        if (userToken) {
            try {
                const decodedToken = jwt_decode(userToken);
              
                const userName = decodedToken.user.name;
                const userId = decodedToken.user.id;
                const role = decodedToken.user.role;
                setUserRole(role);
                
                setUserid(userId)
                setUsername(userName);
                
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            console.error('Admin token not found in local storage');
        }
    }, []);

  useEffect(() => {
    fetchData();
  }, [queryData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5003/query/student/${userid}`);
      setQueryData(response.data);
      
      // console.log(response.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://localhost:5003/query/`+id)
        .then(response => {
          console.log('Record deleted successfully:', response);
          // Optionally, you can perform additional actions like updating state or re-fetching data
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  }

  const handleViewTask = (queryId, queryTitle) => {
    localStorage.setItem('currentQueryId', queryId);
    localStorage.setItem('currentQueryTitle', queryTitle);
  };


  return (
    <>
    <Navbar></Navbar>
    <div >
      <div>
      <div className='ml-5'>
      <h1 className='d-flex justify-content-center'>My Queries</h1>
    <hr />
      <button id='createQueryBtn' style={{height:"5rem",width:"16rem"}} onClick={() => navigate(`/portal/studentquerysubmissionpage`)}><strong>+ create Query</strong></button>
      <div  id='querySubmissionContainer' style={{fontSize:"18px",width:"70%"}}>
        <h2>All Queries</h2>
      <ul id='queriesList'>
        {queryData.map((query, index) => (
          <div key={query._id} id="queryList">
            <p> Category : {query.category}</p>
            <p> Preferred Voice Communication :{query.preferredVoiceCommunication}</p>
            <p> {query.title}</p>
            <p> {query.description}</p>
            <hr />
            <p style={{color:"grey"}}>sooner, it will be resolved</p>
            <div className='d-flex justify-content-end'>
            {userRole === 'student'? (  
            <button className='btn btn-danger mr-5'  onClick={(e)=>handleDelete(query._id)}>Delete</button>
            ):null}
            {userRole === 'admin'?(
            <Link
            to={`/portal/studentquerysubmissionpage/${query._id}`}
            className="btn btn-primary ml-2 mr-5"
            onClick={() => handleViewTask(query._id, query.title)}
          >
            view
          </Link>
           ): null} 
            </div>
            </div>
        ))}
      </ul>
    </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default QueryPage;
