import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'



function Portal() {
    return (
        <>
            <Sidebar />
            <Outlet></Outlet>
        </>
    )
}

export default Portal