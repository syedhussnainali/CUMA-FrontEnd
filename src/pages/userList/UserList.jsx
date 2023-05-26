import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import windsor from "../../images/windsor.png";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Program",
      headerName: "program",
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
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "Date",
      headerName: "Date Revised",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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
