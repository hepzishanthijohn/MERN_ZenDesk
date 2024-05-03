import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../../components/sub-components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const CreateTaskForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: ''
    // Add more fields as needed
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://mernstack-zendesk.onrender.com/tasks', formData);
      console.log('Task created successfully');
      navigate('/portal/studentTaskslist'); // Navigate to TaskList component after successful form submission
    } catch (error) {
      console.log('Error creating task:', error);
    }
  };

  return (
    <>
      <div className="container">
      <Container>
        <Content>
          <h1 className='mt-1 mb-4'>Create Task</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title:</Label>
              <Input type="text" name="title" value={formData.title} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Description:</Label>
              <TextArea name="description" value={formData.description} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label>Deadline:</Label>
              <Input type="date" name="deadline" value={formData.deadline} onChange={handleChange} />
            </FormGroup>
            <Button type="submit">Create Task</Button>
          </form>
        </Content>
      </Container>
      </div>
    </>
  );
};

export default CreateTaskForm;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 60%;
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.278);
  border-radius: 8px;
  padding: 50px 25px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const FormButton = styled(Button)`
  margin-top: 20px;
`;
