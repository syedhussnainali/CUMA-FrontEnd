import React, { useState, useEffect } from "react";
import "./widgetSm.css";
import windsor from "../../images/windsor.png";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import { BaseURL } from "../../constants";
import Button from "../button/button";


const WidgetSm = () => {
  const [data, setData] = useState({ name: "MAC" });
  useEffect(() => {
    const url = `${BaseURL}faculty_list`;
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios.get(url, config).then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  let faculty_list = [];
  for (let value in data) {
    faculty_list.push(data[value].name);
  }
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Faculty</span>

      <table className="table table-responsive no-border">
        <thead>
          <th></th>
          <th className="text-center">Program</th>
          <th></th>
        </thead>
        {faculty_list.map((name) => (
          <tr>
            <td>
              <img src={windsor} alt="profile" className="widgetSmImg" />
            </td>
            <td>
              <span className="widgetSmUsername">{name}</span>
            </td>
            <td>
              <Button className='primary'>See All</Button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetSm;
