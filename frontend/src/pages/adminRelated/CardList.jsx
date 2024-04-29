import React from 'react';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import { faBook, faTasks, faBookDead, faBookReader, faCalendar, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const [tasks, setTasks] = useState([]);
    const [userid,setUserid] = useState([])

    useEffect(() => {
      const userToken = localStorage.getItem('userToken');
      if (userToken) {
        try {
          const decodedToken = jwt_decode(userToken);
          const userName = decodedToken.user.name;
          const userId = decodedToken.user.id;
          setUserid(userId);
          
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      } else {
        console.error('Admin token not found in local storage');
      }
    }, [userid]); // Empty dependency array ensures the effect runs only once on component mount
  

   
    useEffect(() => {
      fetchData();
    }, [tasks]); // Refresh the data whenever tasks change
  
    const fetchData = async () => {
      try {
        const taskId=localStorage.getItem('currentTaskId')
        const currentStudentid = localStorage.getItem('currentStudentid');
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/taskSubmission/${currentStudentid}/tasks/submitted`);
        setTasks(response.data);
        
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };
    
  const [tasklist, setTaskslist] = useState([]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://mernstack-zendesk.onrender.com/tasks`);
        setTaskslist(response.data);
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [tasklist]);
     
    const submittedTaskCount = tasks.length;
    const totalTasklist = tasklist.length;
    const pendingTasks = totalTasklist - submittedTaskCount;


    const cardData = [
        {
            id: 1,
            title: "TASK",
            count: totalTasklist.toString(),
            colors: "primary",
            icon: faBookReader
        },
        {
            id: 2,
            title: "SUBMITTED TASK",
            count: submittedTaskCount.toString(),
            colors: "primary",
            icon: faTasks
        },
        
        {
            id: 3,
            title: "PENDING TASK",
            count: pendingTasks.toString(),
            colors: "primary",
            icon: faClipboardList,
        },
        {
            id: 4,
            title: "PERCENTAGE",
            count: "58",
            colors: "primary",
            icon:  faUserAlt
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <Card key={dt.id} data={dt} />)}
        </div>
    );
}
