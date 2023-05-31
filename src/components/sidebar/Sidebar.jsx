import "./sidebar.css";
import {
  Home,
  Folder,
  Subject,
  Bookmark,
  Bookmarks,
  Book,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Assignment,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <main className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle text-black">dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/Project" className="link">
              <li className="sidebarListItem">
                <Folder className="sidebarIcon" />
                Projects
              </li>
            </Link>
            <Link to="/Program" className="link">
              <li className="sidebarListItem">
                <Subject className="sidebarIcon" />
                Programs
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle text-black">quick menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <Bookmark className="sidebarIcon" />
                Program Outcomes
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Bookmarks className="sidebarIcon" />
                Course Outcomes
              </li>
            </Link>
            <Link to="/curiMaps" className="link">
              <li className="sidebarListItem">
                <Book className="sidebarIcon" />
                Curriculum Maps
              </li>
            </Link>
          </ul>
        </div>


      </div>
    </main>
  );
};

export default Sidebar;
