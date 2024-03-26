import React from 'react';
import { faBook,faTasks, faBookDead, faBookReader, faCalendar, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            title: "TASK",
            count: 30,
            colors: "warning",
            icon: faBookReader
        },
        {
            title: "SUBMITTED TASK",
            count: 15,
            colors: "success",
            icon: faTasks
        },
        
        {
            title: "PENDING TASK",
            count: 5,
            colors: "info",
            icon: faClipboardList,

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
            {cardData.map((dt) => <Card data={dt} />)}
        </div>
    );
}