import "./newmap.css";

const NewUser = () => {
  return (
    <main className="newUser">
      <h1 className="newUserTitle">Create a New Map</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Kind</label>
          <select name="Kind" id="Kind" className="newUserSelect">
            <option value="Courses to Program Outcomes">
              Courses to Program Outcomes
            </option>
            <option value="Courses to CEAB Accreditation Standards">
              Courses to CEAB Accreditation Standards
            </option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Program</label>
          <select name="program" id="program" className="newUserSelect">
            <option value="717">717</option>
            <option value="718">718</option>
            <option value="719">719</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Access Controls</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Owners</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Members</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Guests</label>
          </div>
        </div>
        <button className="newUserButton">create</button>
      </form>
    </main>
  );
};

export default NewUser;
