import React, { useState, useEffect } from "react";
import "./project.css";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import windsor from "../../images/windsor.png";
import { DeleteOutline } from "@material-ui/icons";
import { projectRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { BaseURL } from '../../constants';

const UserList = () => {
  const [data, setData] = useState(projectRows);
  useEffect(() => {
    const url = `${BaseURL}project_list`;
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    }
    axios.get(url, config).then((response) => {
      //console.log(response.data)
      setData(response.data);
      if (response.data.success === 'false') {

      }
    }, (error) => {
      console.log(error);
    });
  }, []);
  //console.log("data: "+data);
  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "Projects",
      headerName: "Projects",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={windsor} alt="profile" className="userListImg" />
            <div className="">{params.row.name}</div>
          </div>
        );
      },
    },
    {
      field: "Owners",
      headerName: "Owners",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={windsor} alt="profile" className="userListImg" />
            <div className="">{params.row.owner}</div>
          </div>
        );
      },
    },
    {
      field: "Guests",
      headerName: "Guests",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={windsor} alt="profile" className="userListImg" />
            <div className="">{params.row.guests}</div>
          </div>
        );
      },
    },
    {
      field: "Members",
      headerName: "Members",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={windsor} alt="profile" className="userListImg" />
            <div className="">{params.row.member}</div>
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/testProject"}>
              <button className="testProjectBtn">Create Program</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <button className="newUserButton">
        <Link to={"/newUser"}>Add New</Link>
      </button><br />
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
