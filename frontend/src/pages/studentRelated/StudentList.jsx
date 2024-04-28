import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import ReactPaginate from 'react-paginate';

const StudentList = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5; // Number of users per page
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5003/student');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://localhost:5003/student/${id}`)
        .then(response => {
          console.log('Record deleted successfully:', response);
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  };

  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <tr key={user._id}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.course ? user.course.courseName : 'N/A'}</td>
          <td>{user.contact}</td>
          <td className='d-flex justify-content-center'>
            <Link to={`/portal/updateStudent/${user._id}`} className="btn btn-success" style={{ marginRight: "10px" }}>Edit</Link>
            <span><button className="btn btn-danger " onClick={(e) => handleDelete(user._id)}>Delete</button></span>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (

    <>
    <Navbar />
    <div>
      

      <div className="d-flex vw-80 vh-80  justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-4" >
          <h1 className='d-flex justify-content-center mt-5'>Student List</h1>
          <Link to="/portal/createStudent" className="btn btn-success mb-5" style={{ background: "#7a1be1", fontSize: "20px" }}>Add +</Link>
          <table className='table' style={{ fontSize: "18px" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>

    </>
      );
};

export default StudentList;
