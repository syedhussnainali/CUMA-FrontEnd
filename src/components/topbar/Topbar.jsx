import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  PowerSettingsNew,
} from "@material-ui/icons";
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
        <div className="topCenter">
          <SearchBar
            style={{
              height: 45,
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topiconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to="/userProfile">
            <img src={avatar} alt="profile" className="topAvatar" />
          </Link>
          <a onClick={logout_session}>
            <div className="topbarIconContainer">
              <PowerSettingsNew />
            </div>
          </a>
        </div>
      </main>
    </section>
  );
};

export default Topbar;
