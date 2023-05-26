import "./newUser.css";
import React, { useState } from 'react';
import axios from "axios";
import { useGridControlState } from "@mui/x-data-grid";
import { BaseURL } from '../../constants';

const NewUser = () => {
  const [projName, setprojName] = useState('');
  const [owners, setOwners] = useState(window.sessionStorage.getItem("username"));
  const [members, setMembers] = useState('');
  const [guests, setguests] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BaseURL}addproject`;
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const body = {
      name: projName,
      owners: owners,
      members: members,
      guests: guests,
    }
    axios.post(url, body, config).then((response) => {
      if (response.data.success === 'false') {
        setError(response.data.message)
      } else {
        window.location.href = "/project"
        setError('')
      }
    }, (error) => {
      console.log(error);
    });

  };
  return (
    <main className="newUser">
      <h1 className="newUserTitle">New Project</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="Enter project name" value={projName}
            onChange={(e) => setprojName(e.target.value)} />
        </div>
        <div>
          <h4>Enter the UWin IDs of the people who should have access to this project. </h4>
          <ul>
            <li><b>Owners </b>can make changes to the project, including the settings on this page. </li>
            <li><b>Members </b>can make changes to the project, except for the settings on this page. </li>
            <li><b>Guests </b>can view information in the project, but cannot make any changes. </li>
          </ul>

          <b>Note: </b>The access control model is a work in progress. For now, assume that anyone can edit your project!
        </div>
        <div className="newUserItem">
          <label>Owners</label>
          <textarea id="owners" name="owners" rows="4" cols="50" value={owners} placeholder="Enter ID" onChange={(e) => setOwners(e.target.value)}>

          </textarea>
        </div>
        <div className="newUserItem">
          <label>Members</label>
          <textarea id="members" name="members" rows="4" cols="50" value={members} placeholder="Enter ID" onChange={(e) => setMembers(e.target.value)}>

          </textarea>
        </div>
        <div className="newUserItem">
          <label>Guests</label>
          <textarea id="guests" name="guests" rows="4" cols="50" placeholder="Enter ID" value={guests} onChange={(e) => setguests(e.target.value)}>

          </textarea>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create Project</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </main>
  );
};

export default NewUser;