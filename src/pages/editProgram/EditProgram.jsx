import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseURL } from "../../constants";
import windsor from "../../images/windsor.png";
import userStyle from "./editProgram.module.css";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";
import Card from "../../components/card/card";

const EditProgram = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState("");
  const [programName, setProgramName] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [revisionDate, setRevisionDate] = useState("");
  const [programDes, setProgramDes] = useState("");
  const [docID, setDocID] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseURL}faculty_list`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //Select Faculty handler
  const handleFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
  };

  //Select Academic Level Handler
  const handleAcademicLevelChange = (e) => {
    setAcademicLevel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BaseURL}addProgram`;
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    
    const body = {
      name: programName,
      academic_level: academicLevel,
      faculty_id: selectedFaculty,
      document_id: docID,
      revision_start_date: new Date(revisionDate),
    };

    try {
      const response = await axios.post(url, body, config);
      if (response.data.success === false) {
        setError(response.data.message);
      } else {
        // Assuming the server responds with the updated project list
        const updatedProjectList = response.data.project_list;
        // Update the UI or perform any necessary actions with the updated project list

        window.location.href = "/program-list";
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while adding the project.");
    }
  };


  return (
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-4">
      <div className="row">
        <div className="col-10">
          <h3>Edit Program</h3>
        </div>
        {/* <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
          <Link to="/newUser">
            <Button className={classes.primary}>Create</Button>
          </Link>
        </div> */}
      </div>
      <div className="row mt-3 mb-3">
        
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Card>
            <h4>Edit Program</h4>
            <form className="row" onSubmit={handleSubmit}>
            <div className="col-12">
              <label>Program</label>
              <input
                type="file"
                placeholder="select"
                className="form-control"
                value={file}
                onChange={(e) => setFile(e.target.value)}
              />
            </div>
            <h2 className="divider mt-3 mb-3 text-center">OR</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Program Name"
                  className="form-control"
                  value={programName}
                  onChange={(e) => setProgramName(e.target.value)}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Academic Level</label>
                <select
                  name="academic level"
                  id="academic level"
                  className="form-control"
                  value={academicLevel}
                  onChange={handleAcademicLevelChange}
                >
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Faculty</label>
                {/* <select
                  name="faculty"
                  multiple="multiple"
                  id="faculty"
                  className="form-control"
                  value={faculty}
                  onChange={(e) => setFaculty(Array.from(e.target.selectedOptions, (option) => option.value))}
                >
                  {faculty_list.map((fac_list,index) => (
                    <option key={index} value={fac_list[0]}>{fac_list[1]}</option>
                  ))}
                </select> */}
                <select
                  name="faculty"
                  id="faculty"
                  className="form-control"
                  value={selectedFaculty}
                  onChange={handleFacultyChange}
                >
                  <option value="">Select Faculty</option>
                  {data.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Revision Start</label>
                <input
                  type="date"
                  placeholder="mm-dd-yyyy"
                  className="form-control"
                  value={revisionDate}
                  onChange={(e) => setRevisionDate(e.target.value)}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Description</label>
                <textarea
                  id="freeform"
                  placeholder="Program Description"
                  name="freeform"
                  rows="4"
                  cols="50"
                  className="form-control"
                  value={programDes}
                  onChange={(e) => setProgramDes(e.target.value)}
                ></textarea>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Document ID</label>
                <input
                  type="text"
                  placeholder="Program scope"
                  className="form-control"
                  value={docID}
                  onChange={(e) => setDocID(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <Button className={classes.primary}>Create Program</Button>
                {error && <div className="error text-danger">{error}</div>}
              </div>
            </div>
          </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditProgram;
