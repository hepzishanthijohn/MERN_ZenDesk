import React from 'react';
import styled from 'styled-components';
import pagenotfound from '../assets/images/pagenotfound1.jpg';

const Pagenotfound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
         <ImgContainer>
      <div >
      <img src={pagenotfound} alt="Page Not Found" />
      </div>
    </ImgContainer>
    </div>
   
  );
};

export default Pagenotfound;

const ImgContainer = styled.div`
  width: 60%;
  background: white;
  background-image: url(${pagenotfound});
  background-size: cover;
 
`;
