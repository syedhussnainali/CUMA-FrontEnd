import "./testproject.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BaseURL } from '../../constants';

const NewUser = () => {
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
    faculty_list.push([data[value].id, data[value].name]);
  }
  return (
    <main className="newUser">
      <h1 className="newUserTitle">Program Data Entry</h1>
      <form className="newUserForm">
        <div className="importprog newUserItem">
          <label>
            Program</label>
          <input type="file" placeholder="select" />
        </div>
        <h2 className="divider">OR</h2>
        <div className="addproj_form">
          <div className="newUserItem">
            <label>Name</label>
            <input type="text" placeholder="project name" />
          </div>
          <div className="newUserItem">
            <label>Academic Level</label>
            <select
              name="academic level"
              id="academic level"
              className="newUserSelect"
            >
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
            </select>
          </div>

          <div className="newUserItem">
            <label>Faculty</label>
            <select name="faculty" multiple="multiple" id="faculty" className="newUserSelectMul">
              {faculty_list.map(fac_list => (
                <option value={fac_list[0]}>
                  {fac_list[1]}
                </option>
              ))}
            </select>
          </div>
          <div className="newUserItem">
            <label>Revision Start</label>
            <input type="date" placeholder="mm-dd-yyyy" />
          </div>

          <div className="newUserItem">
            <label>Description</label>
            <textarea id="freeform" placeholder="Enter Description" name="freeform" rows="4" cols="50">

            </textarea>
          </div>
          <div className="newUserItem">
            <label>Document ID</label>
            <input type="text" placeholder="project scope" />
          </div>

        </div>
        <button className="newUserButton">create</button>
      </form>
    </main>
  );
};

export default NewUser;
