import React from 'react'
import { BarChart } from './BarChart';
import { CardList } from './CardList';
import { PieChart } from './PieChart';


function ClientDashboard() {
    return (
        <div className="container" style={{fontSize:"22px"}}>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" >Dashboard</h1>
            </div>
            <CardList />
            <div className="row">

                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">CODEKATA & WEBKATA ACTIVITY</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-bar">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">TASK</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-bar">
                                <PieChart />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ClientDashboard