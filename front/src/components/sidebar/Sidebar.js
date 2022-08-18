import "../../assets/css/sidebar.css";
import {
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import home from '../../assets/icon/ping/home.svg'
import Stream from '../../assets/icon/graw/video.svg'
import Metaverse from '../../assets/icon/graw/globe.svg'
import Artist from '../../assets/icon/graw/headphones.svg'
import Store from '../../assets/icon/graw/shopping-bag.svg'
import Favorite from '../../assets/icon/graw/star.svg'
import Calendar from '../../assets/icon/graw/calendar.svg'
import MyAvatar from '../../assets/icon/graw/edit.svg'
import MyRoom from '../../assets/icon/graw/codepen.svg'
import Settings from '../../assets/icon/graw/settings.svg'
import Help from '../../assets/icon/graw/help-circle.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">

          <div className="sidebarList1">

            <Link to="/" className="link">
              <div className="sidebarListItem active">
                <img className="sidebarIcon" src={home} alt="home" />
                Home
              </div>
            </Link>

            <Link to="/stream" className="link">
              <div className="sidebarListItem1  active">
                <img className="sidebarIcon" src={Stream} alt="Stream" />
                Stream
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem1  active">
                <img className="sidebarIcon" src={Metaverse} alt="Metaverse" />
                Metaverse
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem1  active">
                <img className="sidebarIcon" src={Artist} alt="Artist" />
                Artist
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem1  active">
                <img className="sidebarIcon" src={Store} alt="Store" />
                Store
              </div>
            </Link>

          </div>

          <hr className="hr" />

          <div className="sidebarList2">


            <Link to="/" className="link">
              <div className="sidebarListItemFavorite active">
                <img className="sidebarIcon" src={Favorite} alt="Favorite" />
                Favorite
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem2 active">
                <img className="sidebarIcon" src={Calendar} alt="Calendar" />
                Calendar
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem2 active">
                <img className="sidebarIcon" src={MyAvatar} alt="MyAvatar" />
                My Avatar
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem2 active">
                <img className="sidebarIcon" src={MyRoom} alt="MyRoom" />
                My Room
              </div>
            </Link>

          </div>

          <hr className="hr2" />

          <div className="sidebarList3">

            <Link to="/" className="link">
              <div className="sidebarListItemSettings active">
                <img className="sidebarIcon" src={Settings} alt="Settings" />
                Settings
              </div>
            </Link>

            <Link to="/" className="link">
              <div className="sidebarListItem3 active">
                <img className="sidebarIcon" src={Help} alt="Help" />
                Help
              </div>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}