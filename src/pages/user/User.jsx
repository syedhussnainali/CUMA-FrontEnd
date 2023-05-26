import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import windsor from "../../images/windsor.png";
import "./user.css";

const User = () => {
  return (
    <main className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">edit</h1>
        <Link to="/newUser">
          <button className="userAddButton">create</button>
        </Link>
      </div>
      <section className="userContainer">
        <div className="userShow">
          <div className="userTopShow">
            <img src={windsor} alt="user" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Program</span>
              <span className="userShowjob">Faculty</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Program Created By</span>
            <div className="usershowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Prof. Kalyani</span>
            </div>
            <div className="usershowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">02/23/23</span>
            </div>
            <span className="userShowTitle">contact details</span>
            <div className="usershowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 234046 38</span>
            </div>
            <div className="usershowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">kalyani@uwindsor.ca</span>
            </div>
            <div className="usershowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">windsor</span>
            </div>
          </div>
        </div>
        <section className="userUpdate">
          <span className="userUpdateTitle">Edit Program</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="computer science"
                />
              </div>
              <div className="userUpdateItem">
                <label>Description</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="internship project outcome"
                />
              </div>
              <div className="userUpdateItem">
                <label>Created By</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Kalyani"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="windsor"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="kalyani@uwindsor.ca"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={windsor} alt="upload" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">update</button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default User;
