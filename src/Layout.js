import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import ProgramList from "./pages/programList/ProgramList";
import EditProgram from "./pages/editProgram/EditProgram";
import UserProfile from "./pages/userProfile/UserProfile";
import Home from "./pages/home/Home";
import CreateProject from "./pages/createProject/createProject";
import CourseList from "./pages/courseList/CourseList";
import Project from "./pages/project/Project";
import EditProject from "./pages/editProject/EditProject";
import CreateProgram from "./pages/testProject/createProgram";
import Program from "./pages/program/Program";
import Product from "./pages/product/Product";
import CreateCourse from "./pages/createCourse/CreateCourse";
import CuriMaps from "./pages/curiMaps/CuriMaps";
import NewMap from "./pages/newMap/NewMap";
import EditMap from "./pages/editMaps/EditMap";
import Board from "./pages/board/Board";

function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Switch>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/edit-project">
              <EditProject />
            </Route>
            <Route path="/create-program">
              <CreateProgram />
            </Route>
            <Route path="/program">
              <Program />
            </Route>
            <Route path="/program-list">
              <ProgramList />
            </Route>
            <Route path="/edit-program/:programId">
              <EditProgram />
            </Route>
            <Route path="/create-project">
              <CreateProject />
            </Route>
            <Route path="/edit-project">
              <EditProject />
            </Route>
            <Route path="/course-list">
              <CourseList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/create-course">
              <CreateCourse />
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
