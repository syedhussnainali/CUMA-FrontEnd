import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseURL } from "../../constants";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

const NewProgram = () => {
  const { projectId } = useParams();
  const [data, setData] = useState([]);
  const [ugaAlignments, setUgaAlignments] = useState([]);
  const [file, setFile] = useState("");
  const [programName, setProgramName] = useState("");
  const [academicLevel, setAcademicLevel] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [revisionDate, setRevisionDate] = useState("");
  const [programDes, setProgramDes] = useState("");
  const [docID, setDocID] = useState("");
  const [error, setError] = useState("");
  const [selectedUGA, setSelectedUGA] = useState([]);
  const [UGADescription, setUGADescription] = useState("");
  const [outcomes, setOutcomes] = useState([
    { description: "", alignments: [] },
  ]);
  console.log(projectId);

  const fetchData = async () => {
    try {
      const allfaculty = `${BaseURL}faculty_list`;
      const UGAAlignmentList = `${BaseURL}uga_alignments_list`;

      const getFacultyList = axios.get(allfaculty);
      const getUGAAlignment = axios.get(UGAAlignmentList);

      const [facultyList, UGAAlignment] = await axios.all([
        getFacultyList,
        getUGAAlignment,
      ]);

      const allFacultyData = facultyList.data;
      const allUGAData = UGAAlignment.data;

      setData(allFacultyData);
      setUgaAlignments(allUGAData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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

  const handleUGAChange = (selectedOptions) => {
    setSelectedUGA(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BaseURL}addProjectProgram`;
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };

    const body = {
      project_id: projectId,
      name: programName,
      academic_level: academicLevel,
      faculty_id: selectedFaculty,
      document_id: docID,
      revision_start_date: new Date(revisionDate),
      latest_modified: new Date().toISOString().split("T")[0],
      state: "draft",
      parent_program_id: null,
      alignments: selectedUGA.map((uga) => ({
        legend: uga.value,
        description: UGADescription,
      })),
    };

    try {
      const response = await axios.post(url, body, config);
      if (response.data.success === false) {
        setError(response.data.message);
      } else {
        // Assuming the server responds with the updated project list
        const updatedProjectList = response.data.project_list;
        // Update the UI or perform any necessary actions with the updated project list

        window.location.href = `/edit-project/${projectId}`;
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while adding the project.");
    }
  };

  const handleAddOutcome = () => {
    const newOutcome = {
      description: UGADescription,
      alignments: selectedUGA,
    };
    setOutcomes([...outcomes, newOutcome]);
    setUGADescription("");
    setSelectedUGA([]);
  };

  const handleDeleteOutcome = (index) => {
    const updatedOutcomes = [...outcomes];
    updatedOutcomes.splice(index, 1);
    setOutcomes(updatedOutcomes);
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-4 mb-4">
      <h3>Program Data Entry</h3>
      <div className="row mt-3 mb-3">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                  rows="2"
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
              <div className="col-12 mt-3">
                <h4>Outcomes and UGA Alignments</h4>
                {/* {outcomes.map((outcome, index) => (
                  <div className="row" key={index}>
                    <div className="col-4 mt-3">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        value={UGADescription}
                        onChange={(e) => setUGADescription(e.target.value)}
                      />
                    </div>
                    <div className="col-4 mt-3">
                      <label>UGA Alignments</label>
                      <MultiSelect
                        options={ugaAlignments.map((uga) => ({
                          value: uga.id,
                          label: `${uga.legend} - ${uga.description}`,
                        }))}
                        value={selectedUGA}
                        onChange={handleUGAChange}
                        labelledBy="Select UGA Alignment"
                        selectAllLabel="Select All"
                        disableSearch={false}
                        overrideStrings={{
                          selectSomeItems: "Select UGA Alignments",
                          allItemsAreSelected:
                            "All UGA Alignments are selected",
                          searchPlaceholder: "Search UGA Alignments",
                          noOptions: "No UGA Alignments found",
                        }}
                      />
                    </div>
                    <div className="col-4 mt-3 d-flex justify-content-center align-items-center">
                      <Button onClick={handleAddOutcomes}>Add</Button>
                      &nbsp;&nbsp;&nbsp;
                      {index !== 0 && (
                        <div className="col-12 mt-3">
                          <Button
                            className={`${classes.danger}`}
                            onClick={() => handleDeleteOutcome(index)}
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))} */}
                {outcomes.map((outcome, index) => (
                <div key={index} className="row">
                  <div className="col-4 mt-3">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      value={outcome.description}
                      onChange={(e) => {
                        const updatedOutcomes = [...outcomes];
                        updatedOutcomes[index].description = e.target.value;
                        setOutcomes(updatedOutcomes);
                      }}
                    />
                  </div>
                  <div className="col-4 mt-3">
                    <label>UGA Alignments</label>
                    {/* <select
                      className="form-control"
                      value={outcome.alignments}
                      onChange={(e) => {
                        const updatedOutcomes = [...outcomes];
                        updatedOutcomes[index].alignments = e.target.value;
                        setOutcomes(updatedOutcomes);
                      }}
                    >
                      <option value="">Select UGA Alignment</option>
                      {ugaAlignments.map((uga) => (
                        <option key={uga.id} value={uga.id}>
                          {uga.legend} - {uga.description}
                        </option>
                      ))}
                    </select> */}
                    <MultiSelect
                        options={ugaAlignments.map((uga) => ({
                          value: uga.id,
                          label: `${uga.legend} - ${uga.description}`,
                        }))}
                        value={selectedUGA}
                        onChange={handleUGAChange}
                        labelledBy="Select UGA Alignment"
                        selectAllLabel="Select All"
                        disableSearch={false}
                        overrideStrings={{
                          selectSomeItems: "Select UGA Alignments",
                          allItemsAreSelected:
                            "All UGA Alignments are selected",
                          searchPlaceholder: "Search UGA Alignments",
                          noOptions: "No UGA Alignments found",
                        }}
                      />
                  </div>
                  {/* {index !== 0 && ( */}
                    <div className="col-2 mt-3 d-flex justify-content-center align-items-center">
                      <Button
                        className={`${classes.danger}`}
                        onClick={() => handleDeleteOutcome(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  {/* )} */}
                </div>
              ))}
              <div className="col-12 mt-3">
                <Button onClick={handleAddOutcome}>Add</Button>
              </div>
              </div>

              <div className="mt-3">
                <Button className={classes.primary}>Create Program</Button>
                {error && <div className="error text-danger">{error}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProgram;
