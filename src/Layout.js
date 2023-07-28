import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
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

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Topbar toggleSidebar={toggleSidebar} /> {/* Pass the toggleSidebar function to the Topbar */}
      <div className={`container-fluid ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="row">
          <Sidebar sidebarOpen={sidebarOpen} /> {/* Pass the sidebarOpen state to the Sidebar */}
          <Switch>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/edit-project/:projectId">
              <EditProject />
            </Route>
            <Route path="/new-program/:projectId">
              <NewProgram />
            </Route>
            <Route path="/programs">
              <Programs />
            </Route>
            <Route path="/program-list">
              <ProgramList />
            </Route>
            <Route path="/edit-program/:projectId/:programId">
              <EditProgram />
            </Route>
            <Route path="/new-project">
              <NewProject />
            </Route>
            <Route path="/edit-project">
              <EditProject />
            </Route>
            <Route path="/course-list">
              <CourseList />
            </Route>
            <Route path="/course/:courseId">
              <Course />
            </Route>
            <Route path="/new-course/:projectId">
              <NewCourse />
            </Route>
            <Route path="/curiMaps">
              <CuriMaps />
            </Route>
            <Route path="/newMap">
              <NewMap />
            </Route>
            <Route path="/editMap">
              <EditMap />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
