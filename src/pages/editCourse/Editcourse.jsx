import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../constants";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";
import { MultiSelect } from "react-multi-select-component";

const EditCourse = () => {
  const { projectId, courseId } = useParams();
  const [data, setData] = useState([]);
  const [ugaAlignments, setUgaAlignments] = useState([]);
  const [courseCode, setCourseCode] = useState("");
  const [alsoKnownAs, setAlsoKnownAs] = useState("");
  const [formerlyKnownAs, setFormerlyKnownAs] = useState("");
  const [courseName, setCourseName] = useState("");
  const [revisionDate, setRevisionDate] = useState("");
  const [docID, setDocID] = useState("");
  const [error, setError] = useState("");
  const [selectedUGAAlignments, setSelectedUGAAlignments] = useState([]);
  const [outcomes, setOutcomes] = useState([{ description: "", alignments: [] }]);

  const fetchData = async () => {
    try {
      // Fetch data from the API and set the state
      const url = `${BaseURL}getProjectCourseByID?project_id=${projectId}&course_id=${courseId}`;
      const courseData = await axios.get(url); // Replace with your API call
      setCourseCode(courseData.data.course_code);
      setAlsoKnownAs(courseData.data.also_known_as);
      setFormerlyKnownAs(courseData.data.formerly_known_as);
      setCourseName(courseData.data.name);
      setRevisionDate(courseData.data.revision_start_date);
      setDocID(courseData.data.document_id);

      // Update the outcomes state with proper conditional check
      const fetchedOutcomes = courseData.data.outcomes.map((outcome) => ({
        description: outcome.description,
        alignments: outcome.legend ? outcome.legend.split("") : [],
      }));
      setOutcomes(fetchedOutcomes);

      // Fetch additional data like faculty and UGA alignments
      const UGAAlignmentList = `${BaseURL}uga_alignments_list`;
      const getUGAAlignment = axios.get(UGAAlignmentList);
      const UGAAlignmentResponse = await getUGAAlignment;
      const allUGAData = UGAAlignmentResponse.data;
      setUgaAlignments(allUGAData);
      setSelectedUGAAlignments(
        allUGAData.filter((uga) => courseData.data.alignments.includes(uga.legend))
      );

      console.log(courseData.data);
      console.log(fetchedOutcomes);
      console.log(allUGAData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [projectId, courseId]);

  const handleUGAChange = (selectedOptions, outcomeIndex) => {
    const selectedLegends = selectedOptions.map((option) => option.value);
    setOutcomes((prevOutcomes) => {
      const updatedOutcomes = [...prevOutcomes];
      updatedOutcomes[outcomeIndex].alignments = selectedLegends;
      return updatedOutcomes;
    });
  };

  const handleAddOutcome = () => {
    const newOutcome = { description: "", alignments: [] };
    setOutcomes((prevOutcomes) => [...prevOutcomes, newOutcome]);
  };

  const handleDeleteOutcome = (outcomeIndex) => {
    setOutcomes((prevOutcomes) => {
      const updatedOutcomes = [...prevOutcomes];
      updatedOutcomes.splice(outcomeIndex, 1);
      return updatedOutcomes;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BaseURL}updateProjectCourseByID`;
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };

    const body = {
      id: courseId,
      project_id: projectId,
      course_code: courseCode,
      also_known_as: alsoKnownAs,
      formerly_known_as: formerlyKnownAs,
      name: courseName,
      document_id: docID,
      revision_start_date: new Date(revisionDate),
      latest_modified: new Date().toISOString().split("T")[0],
      state: "draft",
      parent_course_id: null,
      alignments: outcomes.map((outcome) => ({
        description: outcome.description,
        legend: outcome.alignments.map((uga) => uga.value).join(""),
      })),
    };

    try {
      const response = await axios.post(url, body, config);
      if (response.data.success === false) {
        setError(response.data.message);
      } else {
        // Update the UI or perform any necessary actions with the updated course data
        window.location.href = `/edit-course/${projectId}`;
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while updating the course.");
    }
  };

  return (
    <React.Fragment>
      <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-4 mb-4">
        <h3>Edit Course Data</h3>
        <div className="row mt-3 mb-3">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form className="row" onSubmit={handleSubmit}>
              {/* Form content */}
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>
                  Course Code<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Course Code"
                  className="form-control"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Also Known As</label>
                <input
                  type="text"
                  placeholder="Also Known As"
                  className="form-control"
                  value={alsoKnownAs}
                  onChange={(e) => setAlsoKnownAs(e.target.value)}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <label>Formerly Known As</label>
                <input
                  type="text"
                  placeholder="Formerly Known As"
                  className="form-control"
                  value={formerlyKnownAs}
                  onChange={(e) => setFormerlyKnownAs(e.target.value)}
                />
              </div>
              {/* ... (Rest of the form fields same as NewCourse) ... */}
              <div className="mt-3">
                <Button className={classes.primary}>Update Course</Button>
                {error && <div className="error text-danger">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditCourse;
