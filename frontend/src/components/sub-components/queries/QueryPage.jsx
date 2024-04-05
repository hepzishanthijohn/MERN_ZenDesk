import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './form.css'

const QueryPage = () => {
  const [queryData, setQueryData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/queries');
      setQueryData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`https://mernstack-zendesk.onrender.com/queries/`+id)
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
      <h1 id='subhead'>create your queries</h1>
      <div className="queriesContainer">
      
      
      <button id='createQueryBtn' style={{height:"5rem",width:"16rem"}} onClick={() => navigate('/portal/queryform')}><strong>+ create Query</strong></button>
      <div  id='querySubmissionContainer' style={{fontSize:"18px"}}>
        <h2>All Queries</h2>
      <ul id='queriesList'>
        {queryData.map((query, index) => (
          <div key={query._id} id="queryList">
            <p> {query.queryTitle}</p>
            <p> {query.queryDesc}</p>
            <hr />
            <p style={{color:"grey"}}>sooner, it will be resolved</p>
            <button className='btn btn-danger'  onClick={(e)=>handleDelete(query._id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
};

export default QueryPage;
