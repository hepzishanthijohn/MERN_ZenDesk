import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faUserAlt, faChalkboardTeacher, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { AdminCard } from './AdminCard';

/*cards datalist*/
export function AdminCardList() {
    const [mentorData, setMentorData] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    
    useEffect(() => {
        fetchMentorData();
    }, []);

    const fetchMentorData = async () => {
        try {
            const response = await axios.get('https://mernstack-zendesk.onrender.com/mentor');
            setMentorData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchStudentData();
    }, []);

    const fetchStudentData = async () => {
        try {
            const response = await axios.get('https://mernstack-zendesk.onrender.com/student');
            setStudentData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchCourseData();
    }, []);
    const fetchCourseData = async () => {
        try {
            const response = await axios.get('https://mernstack-zendesk.onrender.com/course');
            setCourseData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    // Count the number of mentors
    const mentorCount = mentorData.length;
    const studentCount = studentData.length;
    const courseCount = courseData.length;

    // Card Data

    const cardData = [
        {
            id: 1,
            title: "Students",
            count: studentCount.toString(),
            colors: "primary",
            icon: faUsers
        },
        {
            id: 2,
            title: "MENTORS",
            count: mentorCount.toString(),
            colors: "primary",
            icon: faUserAlt
        },
        {
            id: 3,
            title: "COURSES",
            count: courseCount.toString(),
            colors: "primary",
            icon: faChalkboardTeacher
        },
        {
            id: 4,
            title: "NEW MEMBER",
            count: "58",
            colors: "primary",
            icon: faUserPlus
        }
    ];

    return (
        <div className='row'>
            {cardData.map((dt) => <AdminCard key={dt.id} data={dt} />)}
        </div>
    );
}
