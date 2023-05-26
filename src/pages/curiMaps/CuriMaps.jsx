import React, { useState } from "react";
import "./curimaps.css";
import { DataGrid } from "@mui/x-data-grid";
import windsor from "../../images/windsor.png";
import { DeleteOutline } from "@material-ui/icons";
import { mapRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(mapRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Maps",
      headerName: "Maps",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={windsor} alt="profile" className="userListImg" />
            <div className="">{params.row.username}</div>
          </div>
        );
      },
    },
    {
      field: "Date",
      headerName: "Date Created",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editMap/" + params.row.id}>
              <button className="userListEdit">edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    {
      field: "Add",
      headerName: (
        <button className="newUserButton">
          <Link to={"/newMap"}>Add New</Link>
        </button>
      ),
      width: 300,
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
