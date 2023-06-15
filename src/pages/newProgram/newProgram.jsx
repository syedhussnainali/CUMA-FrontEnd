import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseURL } from "../../constants";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";
import Card from "../../components/card/card";

const NewProgram = () => {
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
    faculty_list.push([data[value].id, data[value].name]);
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-4 mb-4">
      <h3 className="newUserTitle">Program Data Entry</h3>
      <div className="row mt-3 mb-3">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Card>
            <form className="row">
              <div className="col-12">
                <label>Program</label>
                <input
                  type="file"
                  placeholder="select"
                  className="form-control"
                />
              </div>
              <h2 className="divider mt-3 mb-3 text-center">OR</h2>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="project name"
                    className="form-control"
                  />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                  <label>Academic Level</label>
                  <select
                    name="academic level"
                    id="academic level"
                    className="form-control"
                  >
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                  <label>Faculty</label>
                  <select
                    name="faculty"
                    multiple="multiple"
                    id="faculty"
                    className="form-control"
                  >
                    {faculty_list.map((fac_list) => (
                      <option value={fac_list[0]}>{fac_list[1]}</option>
                    ))}
                  </select>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                  <label>Revision Start</label>
                  <input
                    type="date"
                    placeholder="mm-dd-yyyy"
                    className="form-control"
                  />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                  <label>Description</label>
                  <textarea
                    id="freeform"
                    placeholder="Enter Description"
                    name="freeform"
                    rows="4"
                    cols="50"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                  <label>Document ID</label>
                  <input
                    type="text"
                    placeholder="project scope"
                    className="form-control"
                  />
                </div>
                <div className="mt-3">
                  <Button className={classes.primary}>Create Program</Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewProgram;
