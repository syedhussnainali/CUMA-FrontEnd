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
import Select from "react-select";

const TabProgram = ({ projectId }) => {
  const [data, setData] = useState([]);
  const [showSelect, setShowSelect] = useState(false);
  const [selectedOfficialProgram, setSelectedOfficialProgram] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${BaseURL}getAllProgramsOfProject?id=${projectId}`;
        const config = {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        };
        const response = await axios.get(url, config);
        setData(response.data);
        if (response.data.success == "false") {
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [projectId]);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const url = `${BaseURL}searchProjectProgram?search_query=${searchQuery}`;
        const config = {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        };
        const response = await axios.get(url, config);
        setData(response.data);
        if (response.data.success === "false") {
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchData();
  }, []);

  //Toggle Select field on click of button
  const showOfficialProgramList = (e) => {
    setShowSelect(true);
  };

  //Handles select menu
  // const handleOfficialProgram = (e) => {
  //   const selectedProgramId = e.target.value;
  //   setSelectedOfficialProgram(selectedProgramId);
  //   setSearchQuery(selectedProgramId);
  // };
  const handleOfficialProgram = (selectedOptions) => {
    const selectedProgramIds = selectedOptions.map((option) => option.value);
    setSelectedOfficialProgram(selectedOptions);
    setSearchQuery(selectedProgramIds);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${BaseURL}deleteprogram/${id}`)
      .then((res) => {
        console.log("Deleted program by ", res.data);
        setData(data.filter((row) => row.id !== id));
      })
      .catch((error) => {
        console.log("Error deleting program", error);
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
          <div className="col-12 mt-3">
            {/* <select
              name="officialProgram"
              id="officialProgram"
              className="form-control"
              value={selectedOfficialProgram}
              onChange={handleOfficialProgram}
            >
              <option value="">Select Official Program</option>
              {data.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select> */}
            <Select
              isMulti
              name="officialProgram"
              className="basic-multi-select"
              classNamePrefix="select"
              value={selectedOfficialProgram}
              options={data.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
              onChange={handleOfficialProgram}
            />
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
                    <Link to={"/edit-program/" + row.id}>
                      <Button className={classes.warning}>Edit</Button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Button className={classes.danger}>
                      <DeleteOutline
                        className={userListStyle.userListDelete}
                        onClick={() => handleDelete(row.id)}
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
