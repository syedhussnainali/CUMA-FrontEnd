import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Topbar toggleSidebar={toggleSidebar} />{" "}
      {/* Pass the toggleSidebar function to the Topbar */}
      <div
        className={`container-fluid ${
          sidebarOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className="row">
<<<<<<< HEAD
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
=======
          <Sidebar sidebarOpen={sidebarOpen} />{" "}
          {/* Pass the sidebarOpen state to the Sidebar */}
          <Outlet />
>>>>>>> f975d2865d9ddce9ec6e7ecc1ae3336f31af63d3
        </div>
      </div>
    </>
  );
}

export default Dashboard;
