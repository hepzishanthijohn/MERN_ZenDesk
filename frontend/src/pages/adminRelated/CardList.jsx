import React from 'react';
import { faBook, faTasks, faBookDead, faBookReader, faCalendar, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    const cardData = [
        {
            id: 1,
            title: "TASK",
            count: 30,
            colors: "primary",
            icon: faBookReader
        },
        {
            id: 2,
            title: "SUBMITTED TASK",
            count: 15,
            colors: "primary",
            icon: faTasks
        },
        
        {
            id: 3,
            title: "PENDING TASK",
            count: 5,
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
