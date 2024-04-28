import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const ChooseUser = ({ visitor }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false)


  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12"
        const fields = { email, password }
        setLoader(true)

      }
      else {
        navigate('/loginform');
      }
    }

    else if (user === "Student") {
      if (visitor === "guest") {
        const email = "yogendra@12"
        const fields = { email, password }
        setLoader(true)

      }
      else {
        navigate('/studentLogin');
      }
    }

    else if (user === "Mentor") {
      if (visitor === "guest") {
        const email = "tony@12"
        const fields = { email, password }
        setLoader(true)

      }
      else {
        navigate('/mentorLogin');
      }
    }
  }
  return (
    <>
    <StyledContainer>
    <div className="card-deck">
        <div onClick={() => navigateHandler("Admin")}>
          <div className="card" style={{fontSize:"19px"}}>
           <StyledPaper>
           <div className="card-body">
              <div className="card-title"> <StyledTypography>Admin</StyledTypography></div>
              <p className="card-text">Login as an administrator to access the dashboard to manage app data.</p>
            </div>
           </StyledPaper>
            
          </div>
        </div>

        <div onClick={() => navigateHandler("Student")}>
          <div className="card" style={{fontSize:"19px"}}>
            <StyledPaper>
            
            <div className="card-body">
              <div className="card-title"><StyledTypography>Student</StyledTypography></div>
              <p className="card-text">Login as a student to explore course materials and assignments.</p>
            </div>
            
            </StyledPaper>
          </div>
          
        </div>
            
          
            

        
          

       
          
      </div>

    </StyledContainer>
          </>
    /* <StyledContainer>
          <Container>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <div onClick={() => navigateHandler("Admin")}>
                  <StyledPaper elevation={3}>
                    <Box mb={2}>
                      <AccountCircle fontSize="large" />
                    </Box>
                    <StyledTypography>
                      Admin
                    </StyledTypography>
                    Login as an administrator to access the dashboard to manage app data.
                  </StyledPaper>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledPaper elevation={3}>
                  <div onClick={() => navigateHandler("Student")}>
                    <Box mb={2}>
                      <School fontSize="large" />
                    </Box>
                    <StyledTypography>
                      Student
                    </StyledTypography>
                    Login as a student to explore course materials and assignments.
                  </div>
                </StyledPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledPaper elevation={3}>
                  <div onClick={() => navigateHandler("Mentor")}>
                    <Box mb={2}>
                      <Group fontSize="large" />
                    </Box>
                    <StyledTypography>
                      Mentor
                    </StyledTypography>
                    Login as a Mentor to create courses, assignments, and track student progress.
                  </div>
                </StyledPaper>
              </Grid>
            </Grid>
          </Container>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
          >
            <CircularProgress color="inherit" />
            Please Wait
          </Backdrop>
          
        </StyledContainer> */
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #411d70, #19118b);
  height: 120vh;
  
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled.div`
  padding: 20px;
  height: 15rem;
  width: 20rem;

  border-radius: 10px;
  text-align: center;
  background-color: white;
  color: black;
  cursor:pointer;
  &:hover {
    background-color: #2c2c7c;
    color:white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;