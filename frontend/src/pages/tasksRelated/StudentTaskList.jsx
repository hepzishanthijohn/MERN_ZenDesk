import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import ReactPaginate from 'react-paginate';

const StudentTaskList = () => {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const studentsPerPage = 5; // Number of students per page
  const pagesVisited = pageNumber * studentsPerPage;
  const [currentStudentId, setCurrentStudentId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/student');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleViewStudent = (studentId) => {
    localStorage.setItem('currentStudentId', studentId);
    // console.log(studentId)
  };

  const displayCourses = data
    .slice(pagesVisited, pagesVisited + studentsPerPage)
    .map((student, index) => {
      return (
        <tr key={student._id}>
          <td>{index + 1}</td>
          <td>{student.name}</td>
          <td>
            <Link
              to={`/portal/studentTaskListPage/${student._id}`}
              onClick={() => handleViewStudent(student._id)} // Store the student ID in local storage
              className="btn btn-primary "
              style={{ marginLeft: "30px" }}
            >
              View
            </Link>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      
      
      <div className="d-flex vw-80 vh-80 justify-content-center align-items-center">
        
        <div className="w-50 bg-white rounded p-4" style={{marginTop:"5rem"}}>
        <h1 className='d-flex justify-content-center mb-5'>Student Task Submission</h1>
          <table className='table' style={{ fontSize: "18px" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>task Submission</th>
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

export default StudentTaskList;
