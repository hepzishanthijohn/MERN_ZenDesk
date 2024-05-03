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
  }, [pageNumber]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/mentor');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`https://mernstack-zendesk.onrender.com/mentor/${id}`)
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
          <td>
            <Link to={`/portal/updateMentor/${mentor._id}`} className="btn btn-success mr-2">Edit</Link>
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
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Mentors List</h1>
      <div className='d-flex justify-content-center'>
        <Link to="/portal/createMentor" className="btn btn-success mb-4" style={{ background: "#7a1be1", fontSize: "20px" }}>Add Mentor</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>COURSE</th>
              <th>CONTACT</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {displayMentors}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
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
  );
};

export default MentorList;
