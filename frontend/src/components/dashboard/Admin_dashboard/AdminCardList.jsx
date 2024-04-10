import React from 'react';
import { faBook, faBookDead, faBookReader, faCalendar, faChalkboardTeacher, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AdminCard } from './AdminCard';

/*cards datalist*/
export function AdminCardList() {
    
    const cardData = [
        {
            id: 1,
            title: "REGISTERD USER",
            count: 1500,
            colors: "primary",
            icon: faUserAlt
        },
        {
            id: 2,
            title: "MENTORS",
            count: 100,
            colors: "primary",
            icon: faChalkboardTeacher
        },
        {
            id: 3,
            title: "VISITORS",
            count: 350,
            colors: "primary",
            icon: faUsers,

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
            {cardData.map((dt) => <AdminCard key={dt.id} data={dt}/>)}
        </div>
    );
}
