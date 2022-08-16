import "./sidebar.css";
import {
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import home from '../../assets/icon/ping/home.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
            <img className="sidebarIcon" src={home} alt="home" />
            Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Stream
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Metaverse
            </li>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Artist
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Store
              </li>
            </Link>
            <hr />
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Favorite
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
