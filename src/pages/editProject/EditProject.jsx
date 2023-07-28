import "./editproject.css";
import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import TabProgram from "../../components/tabs/tab-program/tabProgram";
import TabCourse from "../../components/tabs/tab-course/tabCourse";
import { useParams } from "react-router-dom";
import TabAssignCourseToProgram from "../../components/tabs/tab-assignCourseToProgram/tabAssignCourseToProgram";

const EditProject = () => {
  const { projectId } = useParams();
  const [projName, setprojName] = useState("");
  const [owners, setOwners] = useState("");
  const [members, setMembers] = useState("");
  const [guests, setguests] = useState("");
  const [error, setError] = useState("");

  const body = {
    name: projName,
    owners: owners,
    members: members,
    guests: guests,
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-4">
      <div className="row">
        <div className="col-12">
          <Tabs fill className="mt-3 mb-3">
            <Tab eventKey="programs" title="Programs">
              <TabProgram projectId={projectId} />
            </Tab>
            <Tab eventKey="courses" title="Courses">
              <TabCourse projectId={projectId} />
            </Tab>
            <Tab
              eventKey="assign-courses-to-programs"
              title="Assign Courses to Program"
            >
              <TabAssignCourseToProgram projectId={projectId}/>
            </Tab>
            <Tab eventKey="maps" title="Maps">
              maps
            </Tab>
            <Tab eventKey="pdc-packages" title="PDC Packages">
              PDC packages
            </Tab>
            <Tab eventKey="settings" title="Settings">
              settings
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
