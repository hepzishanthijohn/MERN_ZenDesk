import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import ReactPaginate from 'react-paginate';

const CourseList = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const coursesPerPage = 5; // Number of courses per page
  const pagesVisited = pageNumber * coursesPerPage;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5003/course');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://localhost:5003/course/${id}`)
        .then(response => {
          console.log('Record deleted successfully:', response);
          window.location.reload();
        })
        .catch(error => {
          console.log('Error deleting record:', error);
        });
    }
  };

  const displayCourses = data
    .slice(pagesVisited, pagesVisited + coursesPerPage)
    .map((course, index) => {
      return (
        <tr key={course._id}>
          <td>{index + 1}</td>
          <td>{course.courseName}</td>
          <td>
            <Link to={`/portal/updateCourse/${course._id}`} className="btn btn-sm me-1" style={{ marginRight: "10px" }}>
              <FontAwesomeIcon icon={faPen} color="#0db4b9" />
            </Link>
            <button className="btn btn-sm me-1" onClick={() => handleDelete(course._id)}>
              <FontAwesomeIcon icon={faTrash} color="#dc3545" />
            </button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data.length / coursesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Navbar />
      <h1 className='d-flex justify-content-center'>Course List</h1>
      <div className="d-flex vw-80 vh-80 justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-4">
          <Link to="/portal/createCourse" className="btn btn-success mb-5" style={{ background: "#7a1be1", fontSize: "20px" }}>Add +</Link>
          <table className='table' style={{ fontSize: "18px" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayCourses}
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

export default CourseList;
