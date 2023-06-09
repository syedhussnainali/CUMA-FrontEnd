import React, { useState } from "react";
import userListStyle from "./userList.module.css";
import { DataGrid } from "@mui/x-data-grid";
import windsor from "../../images/windsor.png";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";
import Pagination from "react-bootstrap/Pagination";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
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
    <div className="col-10 mt-5">
      <div className="row">
        <div className="col-10">
          <h3>List of Programs</h3>
        </div>
      </div>
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
                  <span>{row.username}</span>
                </td>
                <td className="align-middle">
                  <span></span>
                </td>
                <td className="align-middle">
                  <span></span>
                </td>
                <td className="align-middle">
                  <Link to={"/user/" + row.id}>
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
  );
};

export default UserList;
