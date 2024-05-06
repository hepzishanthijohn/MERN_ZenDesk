import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const StudentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // State variable for loading
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10; // Number of users per page

  useEffect(() => {
    fetchData();
  }, []); // Fetch data only on component mount

  const fetchData = async () => {
    setLoading(true); // Set loading to true when fetching data
    try {
      const response = await axios.get('https://mernstack-zendesk.onrender.com/student');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        await axios.delete(`https://mernstack-zendesk.onrender.com/student/${id}`);
        fetchData(); // Refresh data after deletion
      } catch (error) {
        console.log('Error deleting record:', error);
      }
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'index', key: 'index', render: (text, record, index) => index + 1 },
    { title: 'NAME', dataIndex: 'name', key: 'name' },
    { title: 'EMAIL', dataIndex: 'email', key: 'email' },
    { 
      title: 'COURSE', 
      dataIndex: 'course', 
      key: 'courseName',
      render: (course) => (course ? course.courseName : 'N/A'),
    },
    { title: 'CONTACT', dataIndex: 'contact', key: 'contact' },
    {
      title: 'ACTION',
      dataIndex: '_id',
      key: 'action',
      render: (id) => (
        <>
          <Link to={`/portal/updateStudent/${id}`}>
            <Button type="primary" icon={<EditOutlined />} style={{ marginRight: 8 }}>Edit</Button>
          </Link>
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(id)}>Delete</Button>
        </>
      ),
    },
  ];

  const pageCount = Math.ceil(data.length / usersPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="boxContainer">
      <div className="container">
      <h3 className="mt-5 mb-4 d-flex justify-content-center"><strong>Student List</strong></h3>
      <hr />
      <div style={{ marginBottom: 16 }}>
        <Link to="/portal/createStudent">
          <Button type="primary">Add Student</Button>
        </Link>
      </div>
      <div className="custom-table">
        {loading ? ( // Display loading indicator if loading is true
          <div className='d-flex justify-content-center fs-4'>Loading...</div>
        ) : (
          <Table
            columns={columns}
            dataSource={data.slice(pageNumber * usersPerPage, (pageNumber + 1) * usersPerPage)}
            pagination={false}
          />
        )}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="pagination justify-content-center"
        activeClassName="active"
      />
    </div>

    </div>
      );
};

export default StudentList;
