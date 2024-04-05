import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './form.css'


const QueryForm = () => {
  const navigate = useNavigate();

  const [queryData, setqueryData] = useState({ queryTitle: '',queryDesc: ''});
  

  const handleChange = (e) => {
    setqueryData({ ...queryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/queries', queryData);
      navigate('/portal/querypage')
      // Optionally, you can update the state or show a success message
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };
  
  

  const [data, setData] = useState(undefined);

  const options = [
    "Class Doubt",
    "Placement related",
    "Coordination Related",
    "Pre-BootCamp Related",
  ];

  const langOption = [
    "English",
    "Tamil",
  ];

  const onOptionChangeHandler = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
        <h2 id='subhead'>Create your Queries</h2>
      <div className="row" id='queryPageContainer' style={{fontSize:"18px",color:"black"}}>

        <div className="col-md-6">
          <h5>Topic</h5>
          <div className="queryItems">
            <label htmlFor="category">Category</label><br />
            <select className="form-control" id="category" onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <div className="queryItems">
            <label htmlFor="language">Preferred Voice Communication Language</label><br />
            <select className="form-control" id="language" onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>
              {langOption.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <h5>Details</h5>
          <form onSubmit={handleSubmit}>
            <div className="queryItems">
              <label htmlFor="title">Query Title:</label><br />
              <input
                className="form-control"
                type="text"
                id="title"
                name="queryTitle"
                value={queryData.queryTitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <div className="queryItems">
                <label htmlFor="description">Query Description:</label><br />
                <textarea
                  className="form-control"
                  id="description"
                  name="queryDesc"
                  value={queryData.queryDesc}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button id='subBtn' type="submit" className="btn btn-primary">Submit</button>
            <button id='cancelBtn' className="btn btn-primary" onClick={() => navigate('/portal/querypage')}>Cancel</button>

          </form>


        </div>
      </div>
    </div>

  );
};

export default QueryForm;
