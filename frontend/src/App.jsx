
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Portal from './pages/adminRelated/Portal';

import { Route, Routes,BrowserRouter } from 'react-router-dom';
import ClientDashboard from './pages/adminRelated/ClientDashboard';
import AdminDashboard from './pages/adminRelated/Admin_dashboard/AdminDashboard';
import LogoutPage from './pages/Logout'
import CreateForm from './components/member/CreateForm';
import ListData from './components/member/ListData';
import UpdateForm from './components/member/UpdateForm'
import Login from './components/Login/Login';
import Error from './components/Error'
import RegistrationForm from './components/main-components/RegistrationPage/RegistrationForm';
import LoginForm from './components/main-components/RegistrationPage/LoginForm';
import { MemberProvider } from './Context/MemberContext';
import { LoginProvider } from './Context/LoginContext';
import ClassSchedule from './components/sub-components/class/ClassSchedule'
import Application from './components/sub-components/other-elements/Application';
import Capstone from './components/sub-components/other-elements/Capstone';
import InterviewTasks from './components/sub-components/other-elements/InterviewTasks';
import CreateStudent from './pages/studentRelated/CreateStudent';
import StudentList from './pages/studentRelated/StudentList';
import UpdateStudent from './pages/studentRelated/UpdateStudent';
import CreateMentor from './pages/mentorRelated/CreateMentor';
import MentorList from './pages/mentorRelated/MentorList';
import MentorDashboard from './pages/mentorRelated/MentorDashBoardRelated/MentorDashboard';
import UpdateMentor from './pages/mentorRelated/UpdateMentor';
import StudentLoginForm from './pages/studentRelated/StudentLoginForm';
import MentorLoginForm from './pages/mentorRelated/MentorLoginForm';
import CourseList from './pages/courseRelated/CourseList';
import CreateCourse from './pages/courseRelated/CreateCourse';
import UpdateCourse from './pages/courseRelated/UpdateCourse';
import PortfolioSubmission from './components/sub-components/other-elements/PortfolioSubmission';
import Webcode from './components/sub-components/other-elements/Webcode';
import BlogPage from './components/main-components/blogpage/BlogPage'
import Home from './components/main-components/Homepage/Home';
import TaskPage from './components/sub-components/taskPage/TaskPage';
import { UserProvider } from './components/main-components/UserContext';
import Landing from './pages/Landing'
import Certificate from './components/sub-components/other-elements/Certificate';
import ChooseUser from './pages/ChooseUser';
import CreateTaskForm from './pages/tasksRelated/CreateTaskForm';
import SubmitTaskForm from './pages/tasksRelated/SubmitTaskForm';
import TaskDetails from './pages/tasksRelated/TaskDetails';
import TaskList from './pages/tasksRelated/TaskList';
import SubmissionPage from './pages/tasksRelated/Submissionpage';
import StudentTaskList from './pages/tasksRelated/StudentTaskList';
import StudentTaskListPage from './pages/tasksRelated/StudentTaskListPage';
import QueryFrontPage from './pages/queryRelated/QueryFrontPage';
import QueryResponse from './pages/queryRelated/QueryResponse'
import StudentQueryListPage from './pages/queryRelated/StudentQueryListPage';
import StudentQuerySubmissionpage from './pages/queryRelated/StudentQuerySubmissionpage';
import StudentTaskslist from './pages/tasksRelated/StudentTaskslist';

function App() {
  return (
    <UserProvider>
      <MemberProvider>
      <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BlogPage />} />
          <Route path='registrationform' element={<RegistrationForm />} />
          <Route path='loginform' element={<LoginForm />} />
          <Route path="landing" element={<Landing/>} />
          <Route  path="blog" element={<Home />}/>
          <Route path='login' element={<Login />} />
          <Route path='studentLogin' element={<StudentLoginForm />} />
          <Route path='mentorLogin' element={<MentorLoginForm />} />
          <Route path='logoutpage' element={<LogoutPage />}/>
          <Route path= 'chooseUser' element={<ChooseUser/>}/> 
          <Route path='/portal' element={<Portal />}>
            <Route path='clientdashboard' element={<ClientDashboard />} />
            <Route path='admindashboard' element={<AdminDashboard />} />
            <Route path='mentordashboard' element={<MentorDashboard />} />
            <Route path='class' element={<ClassSchedule />} />
            <Route path='task' element={<TaskPage />} />
            <Route path='application' element={<Application />} />
            <Route path='capstone' element={<Capstone />} />
            <Route path='interviewtask' element={<InterviewTasks />} />
            <Route path='portfoliosubmission' element={<PortfolioSubmission />} />
            {/* Student */}
            
            <Route path='createStudent' element={<CreateStudent />} />
            <Route path='studentList' element={<StudentList />} />
            <Route path='updateStudent/:id' element={<UpdateStudent />} />
            {/* Mentor */}
            <Route path='createMentor' element={<CreateMentor />} />
            <Route path='mentorList' element={<MentorList />} />
            <Route path='updateMentor/:id' element={<UpdateMentor />} />
            {/* Course */}
            
            <Route path='createCourse' element={<CreateCourse />} />
            <Route path='courseList' element={<CourseList />} />
            <Route path='updateCourse/:id' element={<UpdateCourse />} />
             {/* Tasks */}
             <Route path='createTask' element={<CreateTaskForm />} />
             <Route path='submitTaskForm' element={<SubmitTaskForm />} />
             <Route path='tasks/:id' element={<TaskDetails />} />
             <Route path="taskList" element={<TaskList/>} />
             <Route path='submissionTask' element={<SubmissionPage />} />
             <Route path='studentTaskList' element={<StudentTaskList />} />
             <Route path='studentTaskListPage/:id' element={<StudentTaskListPage />} />
             <Route path='studentTaskslist' element={<StudentTaskslist />} /> 

             {/* Queries */}
             <Route path='queryFrontPage' element={<QueryFrontPage />} />
             <Route path='queryResponsePage/:id' element={<QueryResponse />} />
             <Route path='studentqueries' element={<StudentQueryListPage />} />
             <Route path='studentquerysubmissionpage' element={<StudentQuerySubmissionpage />} />

            
            <Route path='webcode' element={<Webcode />} />
            <Route path='certificate' element={<Certificate />} />
            <Route path='createmember' element={<CreateForm />} />
            <Route path='listmember' element={<ListData />} />
            <Route path='Updatemember/:id' element={<UpdateForm />} />
            

            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </LoginProvider>
    </MemberProvider>
    </UserProvider>
  );
}

export default App;