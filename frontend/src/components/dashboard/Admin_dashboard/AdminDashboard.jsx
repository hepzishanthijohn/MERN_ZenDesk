import React, { useState, useEffect } from 'react';
import { AdminBarChart } from './AdminBarChart';
import  {AdminPieChart} from './AdminPieChart';
import { AdminCardList } from './AdminCardList';

import axios from 'axios';




const AdminDashboard = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive(prevState => !prevState);
  };

  useEffect(() => {
    const list = document.querySelectorAll(".navigation li");

    const activeLink = (event) => {
      list.forEach((item) => {
        item.classList.remove("hovered");
      });
      event.target.classList.add("hovered");
    };

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener("mouseover", activeLink));
    };
  }, []);  //Empty dependency array ensures that this effect runs only once, similar to componentDidMount
  //Memberlist
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/members');
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
 

  return (
    
        
          <div className='dashboardContainer' style={{fontSize:"22px"}}>
         <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" >Dashboard</h1>
            </div>
            <AdminCardList />
       {/* barchart */}
       
       <div className="row">

                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Users & Members</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-bar">
                                <AdminBarChart />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Male & Female</h6>
                        </div>
                        <div className="card-body">
                            <div className="chart-bar">
                                <AdminPieChart />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
  {/* ================ Order Details List ================= */}
  
       <div className="details">
         <div className="recentOrders">
           <div className="cardHeader">
             <h2>Members List</h2>
             <a href="#" className="btn">View All</a>
           </div>
           <div className="d-flex vw-90 vh-90 bg-primary justify-content-center align-items-center">
            <table className="table table-striped table-hover " >
            <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
        
      </tr>
    </thead>
    <tbody>
             {
                data.map((user,index)=>{
                 return <tr key={user._id}>
                     <td>{index+1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.contact}</td>
                                                                      
                 </tr>
                })
             }
         </tbody>
            </table>
           </div>
         </div>
         </div>
         </div>
          </div>
    
    
     
  );
};

export default AdminDashboard;
