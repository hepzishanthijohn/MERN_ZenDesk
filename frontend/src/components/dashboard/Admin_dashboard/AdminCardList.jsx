import React from 'react';
import { faBook, faBookDead, faBookReader, faCalendar, faChalkboardTeacher, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AdminCard } from './AdminCard';

/*cards datalist*/
export function AdminCardList() {
    const cardData = [
        {
            title: "REGISTERD USER",
            count: 1500,
            colors: "success",
            icon: faUserAlt
        },
        {
            title: "MENTORS",
            count: 100,
            colors: "warning",
            icon: faChalkboardTeacher
        },
        {
            title: "VISITORS",
            count: 350,
            colors: "info",
            icon: faUsers,

        },
        {
            title: "NEW MEMBER",
            count: "58",
            colors: "primary",
            icon: faUserPlus
        }
    ];
    return (
        <div className='row'>
            {cardData.map((dt) => <AdminCard data={dt}/>)}
        </div>
    );
}