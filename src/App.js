import Landingpage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Layout from "./Layout";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProgramList from "./pages/programList/ProgramList";
import EditProgram from "./pages/editProgram/EditProgram";
import UserProfile from "./pages/userProfile/UserProfile";
import Home from "./pages/home/Home";
import NewProject from "./pages/newProject/newProject";
import CourseList from "./pages/courseList/CourseList";
import Projects from "./pages/projects/Projects";
import EditProject from "./pages/editProject/EditProject";
import NewProgram from "./pages/newProgram/newProgram";
import Programs from "./pages/programs/Programs";
import Course from "./pages/course/Course";
import NewCourse from "./pages/newCourse/newCourse";
import CuriMaps from "./pages/curiMaps/CuriMaps";
import NewMap from "./pages/newMap/NewMap";
import EditMap from "./pages/editMaps/EditMap";
import Board from "./pages/board/Board";

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Login />
          </Route>
          <Route path="/home">
            <Layout />
          </Route>
          <Route path="/userProfile">
            <Layout />
          </Route>
          <Route path="/projects">
            <Layout />
          </Route>
          <Route path="/edit-project/:projectId">
            <Layout />
          </Route>
          <Route path="/new-program/:projectId">
            <Layout />
          </Route>
          <Route path="/programs">
            <Layout />
          </Route>
          <Route path="/program-list">
            <Layout />
          </Route>
          <Route path="/edit-program/:projectId/:programId">
            <Layout />
          </Route>
          <Route path="/new-project">
            <Layout />
          </Route>
          <Route path="/course-list">
            <Layout />
          </Route>
          <Route path="/course/:projectId">
            <Layout />
          </Route>
          <Route path="/new-course/:projectId">
            <Layout />
          </Route>
          <Route path="/curiMaps">
            <Layout />
          </Route>
          <Route path="/newMap">
            <Layout />
          </Route>
          <Route path="/editMap">
            <Layout />
          </Route>
          <Route path="/board">
            <Layout />
          </Route>
        </Switch>
      </div>
=======
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Landingpage />} />
          <Route path="home" element={<Home />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="edit-project/:projectId" element={<EditProject />} />
          <Route path="new-program/:projectId" element={<NewProgram />} />
          <Route path="programs" element={<Programs />} />
          <Route path="program-list" element={<ProgramList />} />
          <Route
            path="edit-program/:projectId/:programId"
            element={<EditProgram />}
          />
          <Route path="new-project" element={<NewProject />} />
          <Route path="edit-project" element={<EditProject />} />
          <Route path="course-list" element={<CourseList />} />
          <Route path="course/:courseId" element={<Course />} />
          <Route path="new-course" element={<NewCourse />} />
          <Route path="curiMaps" element={<CuriMaps />} />
          <Route path="newMap" element={<NewMap />} />
          <Route path="editMap" element={<EditMap />} />
          <Route path="board" element={<Board />} />
        </Route>
      </Routes>
>>>>>>> f975d2865d9ddce9ec6e7ecc1ae3336f31af63d3
    </Router>
  );
}

export default App;
