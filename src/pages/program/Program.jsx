import "./program.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseURL } from '../../constants';


const Program = () => {
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
    <div className="pfeatured">
      {faculty_list.map(name => (
        <main className="pfeaturedItem">
          <span className="pfeaturedTitle">
            {name}
          </span>
          <section className="pfeaturedMoneyContainer">
            <span className="pfeaturedMoney">261</span>
            <span className="pfeaturedMoneyRate"></span>
          </section>
          <span className="pfeaturedSub">
            <button className="btn">See All</button>
          </span>
        </main>
      ))}


    </div>
  );
};

export default Program;
