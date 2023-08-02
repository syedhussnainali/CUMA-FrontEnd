import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import Pagination from "react-bootstrap/Pagination";
import { BaseURL } from "../../../constants";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "../../button/button";
import classes from "../../button/button.module.css";
import { DeleteOutline, Edit } from "@material-ui/icons";

const TabCourses = ({ projectId }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [error, setError] = useState("");
  const [importedCourses, setImportedCourses] = useState([]);

  const fetchData = async () => {
    try {
      const allCoursesOfProject = `${BaseURL}getAllCoursesOfProject?id=${projectId}`;
      // const searchProjectCourses = `${BaseURL}searchProjectCourses?search_query=${searchQuery}`;

      const getAllCourses = axios.get(allCoursesOfProject);
      // const getSearchedCourses = axios.get(searchProjectCourses);

      const [allCoursesResponse, searchedCoursesResponse] = await axios.all([
        getAllCourses,
        // getSearchedCourses,
      ]);

      const allCoursesData = allCoursesResponse.data;
      // const searchedCoursesData = searchedCoursesResponse.data;

      setData(allCoursesData);

      console.log(allCoursesData);
      // setSelectedCourses(searchedCoursesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Handles select menu
  const handleCourses = (selectedOptions) => {
    const ids = selectedOptions
      .filter((item) => item !== null && item.value !== undefined)
      .map((option) => option.value);
    setSelectedCourses(ids);
    console.log(selectedCourses);
  };

  const handleImport = async () => {
    const url = `${BaseURL}copyCoursesToProject`;
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };

    const body = {
      project_id: projectId,
      course_ids: selectedCourses,
    };

    try {
      const response = await axios.post(url, body, config);
      if (response.data.status === false) {
        setError(response.error.message);
      } else {
        const importedCoursesData = response.data;
        setImportedCourses(importedCoursesData);
        setSearchQuery("");
        window.location.href = `/edit-course/${projectId}`;
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError("An error occurred while importing courses.");
    }
  };

  const handleDelete = (projectId, id) => {
    const url = `${BaseURL}deleteProjectCourse`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const body = {
      project_id: projectId,
      project_course_id: id,
    };

    axios
      .post(url, body, config)
      .then((res) => {
        console.log("Deleted course:", res.data);
        // Update the data array by filtering out the deleted row
        setData(data.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.log("Error deleting course:", error);
      });
  };

  // Pagination
  const calculateIndex = () => {
    const indexOfLastRow =
      currentPage === 1 ? rowsPerPage : currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    return [indexOfFirstRow, indexOfLastRow];
  };

  const [indexOfFirstRow, indexOfLastRow] = calculateIndex();

  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-4 mb-4">
      <h3>Courses</h3>
      <div className="row">
        <div className="col-12">
          <ButtonGroup>
            <Button onClick={handleImport}>Import Courses</Button>
            <Link to={`/new-course/${projectId}`}>
              <Button className={classes.primary}>Create new course</Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Course</th>
                <th>Date Revised</th>
                <th>Status & Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row) => (
                <tr key={row.id}>
                  <td className="align-middle">{row.id}</td>
                  <td className="align-middle">
                    <span>{row.name}</span>
                  </td>
                  <td className="align-middle">
                    <span>{row.revision_start_date}</span>
                  </td>
                  <td className="align-middle">
                    <span>{row.state}</span>
                    {row.state === "draft" ? (
                      <Link to={`/edit-course/${projectId}/${row.id}`}>
                          <Button className={classes.warning}>Edit</Button>
                      </Link>
                    ) : (
                      <Link to={`/edit-course/${projectId}/${row.id}`}>
                        <Button className={classes.warning}>
                          Begin a new revision
                        </Button>
                      </Link>
                    )}

                    <Button className={classes.danger}>
                      <DeleteOutline
                        className={classes.userListDelete}
                        onClick={() => handleDelete(projectId, row.id)}
                      />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handleClick(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
    </div>
  );
};

export default TabCourses;
