import React, { useState, useEffect } from "react";
import styled from "./widgetSm.module.css";
import classes from "../button/button.module.css";
import windsor from "../../images/windsor.png";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import { BaseURL } from "../../constants";
import Button from "../button/button";
import Card from "../card/card";


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
    <Card>
      <h3 className={styled.widgetSmTitle}>Faculty</h3>
      <table className="table table-responsive no-border">
        <thead>
          <th></th>
          <th>Program</th>
          <th></th>
        </thead>
        {faculty_list.map((name) => (
          <tr>
            <td>
              <img src={windsor} alt="profile" className={styled.widgetSmImg} />
            </td>
            <td>
              <span className={styled.widgetSmUsername}>{name}</span>
            </td>
            <td>
              <Button className={classes.primary}>See All</Button>
            </td>
          </tr>
        ))}
      </table>
    </Card>
  );
};

export default WidgetSm;
