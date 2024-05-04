import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const CourseList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [pageNumber, setPageNumber] = useState(0);
  const coursesPerPage = 5; // Number of courses per page
  const pagesVisited = pageNumber * coursesPerPage;

  useEffect(() => {
    fetchData();
  }, [pageNumber]); // Fetch data when pageNumber changes

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/course');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`https://mernstack-zendesk.onrender.com/course/${id}`)
        .then(response => {
          console.log('Record deleted successfully:', response);
          fetchData(); // Refresh data after deletion
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
    
  <div className="container">
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div className="course-list-container">
          <h1 className='text-center'>Course List</h1>
          <Link to="/portal/createCourse" className="btn btn-success mb-5" style={{ background: "#7a1be1", fontSize: "20px" }}>Add Course</Link>
          {loading ? ( // Show loading indicator while loading is true
            <div>Loading...</div>
          ) : (
            <div className="table-responsive">
              <table className='table'>
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
            </div>
          )}
          <PaginationContainer>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </PaginationContainer>
        </div>
      </div>
    </Container>
  </div>
  );
};

export default CourseList;

const Container = styled.div`
  padding: 20px;

  .course-list-container {
    max-width: 800px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  h1 {
    color: #7a1be1;
    margin-bottom: 20px;
  }

  .btn-success {
    background-color: #7a1be1;
    border-color: #7a1be1;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .table th, .table td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .table th {
    background-color: #f2f2f2;
    text-align: left;
    color: #333;
  }

  .btn-sm {
    padding: 5px 10px;
    font-size: 14px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    list-style: none;
    padding: 0;
  }

  .pagination li {
    margin-right: 5px;
  }

  .pagination li a {
    color: #333;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .pagination li a:hover {
    background-color: #f2f2f2;
  }

  .active a {
    background-color: #7a1be1;
    color: #fff;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;
