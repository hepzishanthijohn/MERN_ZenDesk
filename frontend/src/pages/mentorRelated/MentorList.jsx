import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import ReactPaginate from 'react-paginate';

const MentorList = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const mentorsPerPage = 5; // Number of mentors per page
  const pagesVisited = pageNumber * mentorsPerPage;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5003/mentor');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://localhost:5003/mentor/${id}`)
        .then(response => {
          console.log('Record deleted successfully:', response);
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  };

  const displayMentors = data
    .slice(pagesVisited, pagesVisited + mentorsPerPage)
    .map((mentor, index) => {
      return (
        <tr key={mentor._id}>
          <td>{index + 1}</td>
          <td>{mentor.name}</td>
          <td>{mentor.email}</td>
          <td>{mentor.course ? mentor.course.courseName : 'N/A'}</td>
          <td>{mentor.contact}</td>
          <td className='d-flex justify-content-center'>
            <Link to={`/portal/updateMentor/${mentor._id}`} className="btn btn-success" style={{ marginRight: "10px" }}>Edit</Link>
            <button className="btn btn-danger" onClick={() => handleDelete(mentor._id)}>Delete</button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data.length / mentorsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Navbar />
      <h1 className='d-flex justify-content-center'>Mentors List</h1>
      <div className="d-flex  vh-80 bg-white justify-content-center ">
        <div className="w-50 bg-white rounded p-4">
          <Link to="/portal/createMentor" className="btn btn-success mb-5" style={{ background: "#7a1be1", fontSize: "20px" }}>Add +</Link>
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
              {displayMentors}
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
  );
};

export default MentorList;
