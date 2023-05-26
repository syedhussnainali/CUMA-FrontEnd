import "./editproject.css";
import React, { useState } from "react";
import axios from "axios";

const NewUser = () => {
  const [projName, setprojName] = useState("");
  const [owners, setOwners] = useState("");
  const [members, setMembers] = useState("");
  const [guests, setguests] = useState("");
  const [error, setError] = useState("");

  const body = {
    name: projName,
    owners: owners,
    members: members,
    guests: guests,
  };

  return (
    <main className="newUser">
      <h1 className="newUserTitle">Edit</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="Enter project name" />
        </div>
        <div>
          <h4>
            Enter the UWin IDs of the people who should have access to this
            project.{" "}
          </h4>
          <ul>
            <li>
              <b>Owners </b>can make changes to the project, including the
              settings on this page.{" "}
            </li>
            <li>
              <b>Members </b>can make changes to the project, except for the
              settings on this page.{" "}
            </li>
            <li>
              <b>Guests </b>can view information in the project, but cannot make
              any changes.{" "}
            </li>
          </ul>
          <b>Note: </b>The access control model is a work in progress. For now,
          assume that anyone can edit your project!
        </div>
        <div className="newUserItem">
          <label>Owners</label>
          <textarea
            id="owners"
            name="owners"
            rows="4"
            cols="50"
            value={owners}
            placeholder="Enter ID"
            onChange={(e) => setOwners(e.target.value)}
          >
            {" "}
          </textarea>{" "}
        </div>
        <div className="newUserItem">
          {" "}
          <label>Members</label>{" "}
          <textarea
            id="members"
            name="members"
            rows="4"
            cols="50"
            value={members}
            placeholder="Enter ID"
            onChange={(e) => setMembers(e.target.value)}
          >
            {" "}
          </textarea>{" "}
        </div>
        <div className="newUserItem">
          <label>Guests</label>{" "}
          <textarea
            id="guests"
            name="guests"
            rows="4"
            cols="50"
            placeholder="Enter ID"
            value={guests}
            onChange={(e) => setguests(e.target.value)}
          >
            {" "}
          </textarea>{" "}
        </div>
        <div className="newUserItem">
          <label>Date</label>
          <input type="date" placeholder="mm-dd-yyyy" />
        </div>
        <div className="newUserItem">
          <label>Export</label>
          <select name="export" id="export" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Description</label>
          <textarea id="freeform" name="freeform" rows="4" cols="50">
            Enter text here...
          </textarea>
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Submit</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </main>
  );
};

export default NewUser;
