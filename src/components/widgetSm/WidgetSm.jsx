import React, { useState, useEffect } from "react";
import "./widgetSm.css";
import windsor from "../../images/windsor.png";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import { BaseURL } from '../../constants';


const WidgetSm = () => {
  const [data, setData] = useState({ name: "MAC" });
  useEffect(() => {
    const url = `${BaseURL}faculty_list`;
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    }
    axios.get(url, config).then((response) => {
      setData(response.data);
    }, (error) => {
      console.log(error);
    });
  }, []);

  let faculty_list = [];
  for (let value in data) {
    faculty_list.push(data[value].name);
  }
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Faculty</span>
      <ul className="widgetSmList">
        {faculty_list.map(name => (
          <li className="widgetSmListItem">
            <img src={windsor} alt="profile  " className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{name}</span>
              <span className="widgetSmUTitle">program</span>
            </div>
            <button className="widgetSmButton">
              See All
            </button>
          </li>
        ))}


      </ul>
    </div>
  );
};

export default WidgetSm;
