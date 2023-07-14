import programTabStyle from "./tab-program.module.css";
import React, { useState, useEffect } from "react";
import { DeleteOutline } from "@material-ui/icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "../../button/button";
import { Link } from "react-router-dom";
import classes from "../../button/button.module.css";
import userListStyle from "../../../pages/programList/programList.module.css";
import Pagination from "react-bootstrap/Pagination";
import { BaseURL } from "../../../constants";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";

const TabProgram = ({ projectId }) => {
  const [data, setData] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOfficialProgram, setSelectedOfficialProgram] = useState([
    { value: "", label: "Select Program" },
  ]);
  const [showSelectProgramTab, setShowSelectProgramTab] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [error, setError] = useState("");
  const [importedPrograms, setImportedPrograms] = useState([]);

  const fetchData = async () => {
    try {
      const allProgramsOfProject = `${BaseURL}getAllProgramsOfProject?id=${projectId}`;
      const searchProjectProgram = `${BaseURL}searchProjectProgram?search_query=${searchQuery}`;

      const getAllPrograms = axios.get(allProgramsOfProject);
      const getSearchedProgram = axios.get(searchProjectProgram);

      const [allProgramsResponse, searchedProgramResponse] = await axios.all([
        getAllPrograms,
        getSearchedProgram,
      ]);

      const allProgramsData = allProgramsResponse.data;
      const searchedProgramData = searchedProgramResponse.data;

      setData(allProgramsData);
      setSelectedOfficialProgram(searchedProgramData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Toggle Select field on click of button
  const showOfficialProgramList = (e) => {
    setShowSelect(true);
  };

  const handleImport = async () => {
    const url = `${BaseURL}copyProgramsToProject`;
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };

    const programIds = selectedOfficialProgram.map((program) => program.id);
    console.log(programIds);
    const body = {
      project_id: projectId,
      program_ids: programIds,
    };

    try {
      const response = await axios.post(url, config, body);
      if (response.data.status == false) {
        setError(response.error.message);
      } else {
        const importedProgramsData = response.data;
        setImportedPrograms(importedProgramsData);
        setShowSelectProgramTab(true);
        setSearchQuery("");
      }
      console(response.data);
    } catch (error) {
      console.log(error);
      setError("An error occurred while importing programs.");
    }
  };

  //Handles select menu
  const handleOfficialProgram = (selectedOptions) => {
    setSelectedOfficialProgram(selectedOptions);
  };

  const handleDelete = (projectId, id) => {
    const url = `${BaseURL}deleteProjectProgram`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const body = {
      project_id: projectId,
      project_program_id: id,
    };

    axios
      .post(url, body, config)
      .then((res) => {
        console.log("Deleted program:", res.data);
        // Update the data array by filtering out the deleted row
        setData(data.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.log("Error deleting program:", error);
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
      <h3>Programs</h3>
      <div className="row">
        <div className="col-12">
          <ButtonGroup>
            <Button onClick={showOfficialProgramList}>
              Import official programs
            </Button>
            <Link to={`/new-program/${projectId}`}>
              <Button className={classes.primary}>Create new program</Button>
            </Link>
          </ButtonGroup>
        </div>
        {showSelect && (
          <div className="row mt-3">
            <div className="col-6 mt-2">
              <MultiSelect
                options={selectedOfficialProgram.map((item) => ({
                  value: item.id,
                  label: item.name,
                  key: item.id,
                }))}
                value={selectedOfficialProgram}
                onChange={handleOfficialProgram}
                labelledBy={"Select Official Program"}
                selectAllLabel={"Select All"}
                disableSearch={false}
                overrideStrings={{
                  selectSomeItems: "Select Programs",
                  allItemsAreSelected: "All Programs are selected",
                  searchPlaceholder: "Search Programs",
                  noOptions: "No Programs found",
                }}
              />
            </div>
            <div className="col-6">
              <Button className={classes.primary} onClick={handleImport}>
                Save
              </Button>
            </div>
            {/* {showSelectProgramTab && (
              <div className="table-responsive mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Program</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importedPrograms.map((e) =>
                      e.value !== "" ? (
                        <tr key={e.id}>
                          <td>{e.value}</td>
                          <td>{e.label}</td>
                        </tr>
                      ) : null
                    )}
                  </tbody>
                </table>
              </div>
            )} */}
          </div>
        )}
      </div>
      <div className="row">
        <div className="table-responsive mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Program</th>
                <th>Status</th>
                <th>Date Revised</th>
                <th>Action</th>
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
                    <span></span>
                  </td>
                  <td className="align-middle">
                    <span>{row.revision_start_date}</span>
                  </td>
                  <td className="align-middle">
                    <Link to={`/edit-program/${projectId}/` + row.id}>
                      <Button className={classes.warning}>Edit</Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Button className={classes.danger}>
                      <DeleteOutline
                        className={userListStyle.userListDelete}
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

export default TabProgram;
