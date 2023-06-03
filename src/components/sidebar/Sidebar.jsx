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
    <div className="col-md-2 sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu mt-4">
          <h3 className="widgetSm_widgetSmTitle__1DLAD">dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem mt-2">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/Project" className="link">
              <li className="sidebarListItem mt-2">
                <Folder className="sidebarIcon" />
                Projects
              </li>
            </Link>
            <Link to="/Program" className="link">
              <li className="sidebarListItem mt-2">
                <Subject className="sidebarIcon" />
                Programs
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu mt-5">
          <h3 className="widgetSm_widgetSmTitle__1DLAD">quick menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem mt-2">
                <Bookmark className="sidebarIcon" />
                Program Outcomes
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem mt-2">
                <Bookmarks className="sidebarIcon" />
                Course Outcomes
              </li>
            </Link>
            <Link to="/curiMaps" className="link">
              <li className="sidebarListItem mt-2">
                <Book className="sidebarIcon" />
                Curriculum Maps
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
