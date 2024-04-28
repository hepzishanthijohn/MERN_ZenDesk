import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { faBook, faTasks, faBookDead, faBookReader, faCalendar, faClipboardList, faComments, faDollar, faRupee, faUser, faUserAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

/*cards datalist*/
export function CardList() {
    

    const cardData = [
        {
            id: 1,
            title: "STUDENTS",
            count: 150,
            colors: "primary",
            icon: faBookReader
        },
        {
            id: 2,
            title: "CLASSES",
            count: 25,
            colors: "primary",
            icon: faTasks
        },
        
        {
            id: 3,
            title: "PERFORMANCE",
            count: 80,
            colors: "primary",
            icon: faClipboardList,
        },
        {
            id: 4,
            title: "COURSES",
            count: "3",
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
