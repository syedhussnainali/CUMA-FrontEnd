import React, { useState } from "react";

import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import uwindsor from "../../images/uwindsor.jpg";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Course",
      headerName: "Course",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={uwindsor} alt="course" className="productListImg" />
            <div className="">{params.row.name}</div>
          </div>
        );
      },
    },
    { field: "Description", headerName: "Description", width: 270 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "Date",
      headerName: "Date Revised ",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
