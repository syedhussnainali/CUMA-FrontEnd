import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  GetApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import windsor from "../../images/windsor.png";
import "./editmap.css";

const User = () => {
  return (
    <main className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Map</h1>
        <Link to="">
          <button className="userAddButton">
            PDF <GetApp />
          </button>
        </Link>
        <span>
          <button className="userAddButton">
            Excel <GetApp />
          </button>
        </span>
      </div>
      <section className="userContainer">
        <div className="userShow">
          <div className="userTopShow">
            <img src={windsor} alt="user" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Map</span>
              <span className="userShowjob">Kind</span>
            </div>
          </div>
          <div className="newUserItem">
            <label>Internal comments (Project members only)</label>
            <textarea id="freeform" name="freeform" rows="4" cols="50">
              Enter text here...
            </textarea>
          </div>
        </div>

        <section className="userUpdate">
          <span className="userUpdateTitle">Edit comments</span>
          <div className="newUserItem">
            <label>Published comments</label>
            <textarea id="freeform" name="freeform" rows="4" cols="50">
              Enter text here...
            </textarea>
          </div>
        </section>
      </section>
      <div className="userUpdateRight">
        <button className="userUpdateButton">update</button>
      </div>
    </main>
  );
};

export default User;
