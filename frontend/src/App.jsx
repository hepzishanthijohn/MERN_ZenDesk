
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Portal from './components/dashboard/Portal';
import { Route, Routes } from 'react-router-dom';
import ClientDashboard from './components/dashboard/ClientDashboard';
import AdminDashboard from './components/dashboard/Admin_dashboard/AdminDashboard';
import CreateForm from './components/members/CreateForm';
import ListData from './components/members/ListData';
import UpdateForm from './components/members/UpdateForm'
import Login from './components/Login/Login';
import Error from './components/Error'
import RegistrationForm from './components/main-components/RegistrationPage/RegistrationForm';
import LoginForm from './components/main-components/RegistrationPage/LoginForm';
import { MemberProvider } from './components/Context/MemberContext';
import { LoginProvider } from './components/Context/LoginContext';
import ClassSchedule from './components/sub-components/class/ClassSchedule'
import QueryPage from './components/sub-components/queries/QueryPage';
import QueryForm from './components/sub-components/queries/QueryForm';
import Application from './components/sub-components/other-elements/Application';
import Capstone from './components/sub-components/other-elements/Capstone';
import InterviewTasks from './components/sub-components/other-elements/InterviewTasks';
import PortfolioSubmission from './components/sub-components/other-elements/PortfolioSubmission';
import Webcode from './components/sub-components/other-elements/Webcode';
import BlogPage from './components/main-components/blogpage/BlogPage'
import Home from './components/main-components/Homepage/Home';
import TaskPage from './components/sub-components/taskPage/TaskPage';
import { UserProvider } from './components/main-components/UserContext';
import Landing from './components/main-components/Landing'
import Certificate from './components/sub-components/other-elements/Certificate';

function App() {
  return (
    <UserProvider>
      <MemberProvider>
      <LoginProvider>
      
        <Routes>
          <Route path='/' element={<BlogPage />} />
          <Route path='registrationform' element={<RegistrationForm />} />
          <Route path='loginform' element={<LoginForm />} />
          <Route path="landing" element={<Landing/>} />
          <Route  path="blog" element={<Home />}/>
          <Route path='/portal' element={<Portal />}>
            <Route path='clientdashboard' element={<ClientDashboard />} />
            <Route path='admindashboard' element={<AdminDashboard />} />
            <Route path='class' element={<ClassSchedule />} />
            <Route path='task' element={<TaskPage />} />
            <Route path='application' element={<Application />} />
            <Route path='capstone' element={<Capstone />} />
            <Route path='interviewtask' element={<InterviewTasks />} />
            <Route path='portfoliosubmission' element={<PortfolioSubmission />} />
            <Route path='login' element={<Login />} />
            <Route path='webcode' element={<Webcode />} />
            <Route path='certificate' element={<Certificate />} />
            <Route path='queryform' element={<QueryForm />} />
            <Route path='querypage' element={<QueryPage />} />
            <Route path='createmember' element={<CreateForm />} />
            <Route path='listmember' element={<ListData />} />
            <Route path='Updatemember/:id' element={<UpdateForm />} />
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </LoginProvider>
    </MemberProvider>
    </UserProvider>
  );
}

export default App;