import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../sub-components/Navbar/Navbar'
import { Link } from 'react-router-dom';

const ListData = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/members');
      setData(response.data);
      // console.log(response.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`https://mernstack-zendesk.onrender.com/members`+id)
        .then(response => {
          console.log('Record deleted successfully:', response);
          // Optionally, you can perform additional actions like updating state or re-fetching data
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  };

  return (
        <div>
          <Navbar/>
          <h1>Members List</h1>
          <div className="d-flex vw-80 vh-80 bg-white justify-content-center align-items-center">
        <div className="vh-100 bg-white rounded p-2" >
            <Link to="/portal/createmember" className="btn btn-success">Add +</Link>
            
            <table className='table' style={{fontSize:"18px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.map((user,index)=>{
                        return <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td><Link to={`/portal/updatemember/${user._id}`} className="btn btn-success" style={{marginRight:"10px"}}>Edit</Link> 

                            <button  className="btn btn-danger " onClick={(e)=>handleDelete(user._id)}>Delete</button></td>
                           
                        </tr>
                       })
                    }
                </tbody>
            </table>
        </div>     
    </div>
        </div>
  );
};

export default ListData;
