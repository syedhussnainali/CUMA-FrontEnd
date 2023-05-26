import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import profile from "../../images/profile.png";
import "./userprofile.css";

const User = () => {
  return (
    <main className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Profile</h1>
      </div>
      <section className="userContainer">
        <div className="userShow">
          <div className="userTopShow">
            <img src={profile} alt="user" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">User</span>
              <span className="userShowjob">Faculty Member</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details</span>
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
          <span className="userUpdateTitle">Edit Profile</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Prof. Kalyani"
                />
              </div>
              <div className="userUpdateItem">
                <label>Department</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="MAC"
                />
              </div>
              <div className="userUpdateItem">
                <label>Mobile</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+1 234046 38"
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
                <img src={profile} alt="upload" className="userUpdateImg" />
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
