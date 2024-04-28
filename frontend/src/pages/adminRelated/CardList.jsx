import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { faBook, faTasks, faBookDead, faBookReader, faCalendar, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchData();
      }, [tasks]); // Refresh the data whenever tasks change
    
      const fetchData = async () => {
        try {
          const taskId=localStorage.getItem('currentTaskId')
          const currentStudentId = localStorage.getItem('currentStudentId');
          const response = await axios.get(`http://localhost:5003/taskSubmission/${currentStudentId}/tasks/submitted`);
          setTasks(response.data);
          
        } catch (error) {
          console.log('Error fetching tasks:', error);
        }
      };

      const [tasklist, setTaskslist] = useState([]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5003/tasks`);
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
