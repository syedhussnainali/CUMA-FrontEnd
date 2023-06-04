import "./topbar.css";
import { FaPowerOff } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import SearchBar from "material-ui-search-bar";
import avatar from "../../images/avatar.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../constants";

const Topbar = () => {
  function logout_session() {
    const url = `${BaseURL}logout`;
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    }
    axios.get(url, config).then((response) => {
      if (response.data.success === 'true') {
        window.sessionStorage.removeItem("username");
        window.location.href = '/login'
      }
    }, (error) => {
      console.log(error);
    });
  }
  return (
    <section className="topbar">
      <main className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CuMA </span>
        </div>
        {/* <div className="topCenter">
          <SearchBar
            style={{
              height: 45,
              fontSize: "1rem",
            }}
          />
        </div> */}
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <SearchBar className="me-2"
            style={{
              height: 32,
              fontSize: "1rem",
            }}
          />
          <Link to="/userProfile" className="me-2">
            {/* <img src={avatar} alt="profile" className="topAvatar" /> */}
            <BiUser size={25} title="Profile" />
          </Link>
          <a onClick={logout_session}>
            <div className="topbarIconContainer">
              {/* <PowerSettingsNew /> */}
              <FaPowerOff className="text-danger" size={25} title="Sign Out" />
            </div>
          </a>
        </div>
      </main>
    </section>
  );
};

export default Topbar;
