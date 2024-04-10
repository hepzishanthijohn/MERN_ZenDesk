import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LoginContext from '../../Context/LoginContext';
import axios from 'axios';

import './task.css';

function FormSubmission() {
  const [taskData, settaskData] = useState({ FESrcCodeLink: '', BESrcCodeLink: '', FEDpdURL: '', BEDpdURL: '' });
  const [tasksData, settasksData] = useState([]);
  const logindata = useContext(LoginContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    settaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/tasks');
      settasksData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`https://mernstack-zendesk.onrender.com/tasks/` + id)
        .then(response => {
          console.log('Record deleted successfully:', response);
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  };
  const defaultValue= "yet to be graded"
  const [comment, setComment] = useState('');
  const [values, setValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/tasks', taskData);
      navigate('/portal/task');
      window.location.reload();
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleSave = async (taskId, values) => {
    try {
      // Save the marks for the task in localStorage
      localStorage.setItem(`savedValues_${taskId}`, values);
      console.log(`Marks saved for task ${taskId}: ${values}`);
      window.location.reload();
    } catch (error) {
      console.error('Error saving marks:', error);
    }
  };

  return (
    <div className="taskContainer">
      <Navbar />
      <div className="taskPageContainer">
        <div className="taskContentContainer">
          <form onSubmit={handleSubmit}>
            <label htmlFor="FESrcCodeLink">Frontend Source Code Link:</label><br />
            <input type="text" id="FESrcCodeLink" name="FESrcCodeLink" value={taskData.FESrcCodeLink} onChange={handleChange} className="form-control" /><br />
            <label htmlFor="BESrcCodeLink">Backend Source Code Link:</label><br />
            <input type="text" id="BESrcCodeLink" name="BESrcCodeLink" value={taskData.BESrcCodeLink} onChange={handleChange} className="form-control" /><br />
            <label htmlFor="FEDpdURL">Frontend Deployed URL:</label><br />
            <input type="text" id="FEDpdURL" name="FEDpdURL" value={taskData.FEDpdURL} onChange={handleChange} className="form-control" /><br />
            <label htmlFor="BEDpdURL">Frontend Deployed URL:</label><br />
            <input type="text" id="BEDpdURL" name="BEDpdURL" value={taskData.BEDpdURL} onChange={handleChange} className="form-control" /><br />
            <label htmlFor="comment">Comment:</label><br />
            <input type="text" id="comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} /><br /><br />
            <input type="submit" value="Submit" />
          </form>

          <div>
            <h3>Submitted Tasks:</h3>
            <div className="taskContainer">
              <ul id='taskList'>
                {tasksData.map((task, index) => (
                  <div key={task._id} className="tasksList mt-2 pt-4">
                    <p>Front-end Source code : <a href={task.FESrcCodeLink} target="_blank" rel="noopener noreferrer">{task.FESrcCodeLink}</a></p>
                    <p>Front-end Deployed URL: <a href={task.BESrcCodeLink} target="_blank" rel="noopener noreferrer">{task.BESrcCodeLink}</a></p>
                    <p>Back-end Source code: <a href={task.FEDpdURL} target="_blank" rel="noopener noreferrer">{task.FEDpdURL}</a></p>
                    <p>Back-end Deployed URL: <a href={task.BEDpdURL} target="_blank" rel="noopener noreferrer">{task.BEDpdURL}</a></p>

                    <br />
                    <p>{task.comment}</p>
                    <br />
                    
                    {/* Save and delete buttons */}
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 text-center">
                        
                        <form onSubmit={(e) => {
                            
                            handleSave(task._id, values); // Pass the taskId and marks value to handleSave
                          }}>
                            {logindata.isAdminVisible ? (
                              <div>
                                <div>
                                <input
                                  type="text"
                                  
                                  onChange={(e) => setValue(e.target.value)}
                                  placeholder="Enter marks"
                                />
                                <button className="btn btn-primary mr-3 ml-2" type="submit">Save</button>
                                {/* Display the marks for the task */}
                               </div>
                               <p>Marks for the task: {localStorage.getItem(`savedValues_${task._id}`)}</p>
                              </div>
                              
                            ) : (
                              // If not admin, only display the marks
                              <p>Scored Marks: {localStorage.getItem(`savedValues_${task._id}`)||'Yet to be graded'}</p>
                            )}
                          </form>
                          <button type="button" onClick={() => handleDelete(task._id)} className="btn btn-danger">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSubmission;
