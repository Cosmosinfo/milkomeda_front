import "../../assets/css/Side/sidebar.css";
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

        <div className="side_item_1">

          <div className="item_name">
            <img className="sidebarIcon" src={home} alt="home" />
            <Link to="/" className="item_link">
              Home
            </Link>

            <div className="item_nameBar">

              </div>
          </div>

          <div className="item_name">
            <img className="sidebarIcon" src={Stream} alt="Stream" />
            <Link to="/stream" className="item_link">
              Stream
            </Link>
          </div>

          <div className="item_name">
            <img className="sidebarIcon" src={Artist} alt="Artist" />
            <Link to="/artist" className="item_link">
              Artist
            </Link>
          </div>

          <div className="item_name">
            <img className="sidebarIcon" src={Store} alt="Store" />
            <Link to="/store" className="item_link">
              Store
            </Link>
          </div>

        </div>

        <hr className="hr" />

        <div className="side_item_2">

          <div className="item_name">
            <img className="sidebarIcon" src={Favorite} alt="Favorite" />
            <Link to="/" className="item_link">
              Favorite
            </Link>
          </div>

          <div className="Favorite_artist">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Artist_logo" />
          </div>


          <div className="item_name">
            <img className="sidebarIcon" src={Calendar} alt="Calendar" />
            <Link to="/" className="item_link">
              Calendar
            </Link>

              
          </div>

          {/* <div className="item_name">
            <img className="sidebarIcon" src={MyAvatar} alt="MyAvatar" />
            <Link to="/" className="item_link">
              MyAvatar
            </Link>
          </div>

          <div className="item_name">
            <img className="sidebarIcon" src={MyRoom} alt="MyRoom" />
            <Link to="/" className="item_link">
              MyRoom
            </Link>
          </div> */}

        </div>

       
        <hr className="hr2" />

        <div className="side_item_3">

          <div className="item_name">
            <img className="sidebarIcon" src={Settings} alt="Settings" />
            <Link to="/" className="item_link">
              Settings
            </Link>
          </div>

          <div className="item_name">
            <img className="sidebarIcon" src={Help} alt="Help" />
            <Link to="/" className="item_link">
              Help
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}