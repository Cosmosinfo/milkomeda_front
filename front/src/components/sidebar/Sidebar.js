import "../../assets/css/Side/sidebar.css";
// import {
//   Timeline,
//   TrendingUp,
// } from "@material-ui/icons";
import { Link } from "react-router-dom";
import home from '../../assets/icon/ping/home.svg'
import Stream from '../../assets/icon/graw/video.svg'
// import Metaverse from '../../assets/icon/graw/globe.svg'
import Artist from '../../assets/icon/graw/headphones.svg'
import Store from '../../assets/icon/graw/shopping-bag.svg'
import Favorite from '../../assets/icon/graw/star.svg'
import Calendar from '../../assets/icon/graw/calendar.svg'
// import MyAvatar from '../../assets/icon/graw/edit.svg'
// import MyRoom from '../../assets/icon/graw/codepen.svg'
import Settings from '../../assets/icon/graw/settings.svg'
import Help from '../../assets/icon/graw/help-circle.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        
        <ul className="side_item_1">

          <li className="item_name">
            <img className="sidebarIcon" src={home} alt="home" />
            <Link to="/" className="item_link">
              홈
            </Link>

            <div className="item_nameBar">

              </div>
          </li>

          <li className="item_name">
            <img className="sidebarIcon" src={Stream} alt="Stream" />
            <Link to="/stream" className="item_link">
              스테이지
            </Link>
          </li>

          <li className="item_name">
            <img className="sidebarIcon" src={Artist} alt="Artist" />
            <Link to="/artist" className="item_link">
              아티스트
            </Link>
          </li>

          <li className="item_name">
            <img className="sidebarIcon" src={Store} alt="Store" />
            <Link to="/store" className="item_link">
              스토어
            </Link>
          </li>

        </ul>

        <hr className="hr" />

        <ul className="side_item_2">

          <li className="item_name">
            <img className="sidebarIcon" src={Favorite} alt="Favorite" />
            <Link to="/" className="item_link">
              즐겨찾기
            </Link>
          </li>


          <li className="item_name">
            <img className="sidebarIcon" src={Calendar} alt="Calendar" />
            <Link to="/" className="item_link">
              일정
            </Link>

              
          </li>


        </ul>

       
       

        <ul className="side_item_3">

        <hr className="hr2" />

          <li className="item3_name">
            <img className="sidebarIcon" src={Settings} alt="Settings" />
            <Link to="/" className="item_link">
              설정
            </Link>
          </li>

          <li className="item3_name">
            <img className="sidebarIcon" src={Help} alt="Help" />
            <Link to="/" className="item_link">
              도움말
            </Link>
          </li>

          
        </ul>

      </div>
    </div>
  );
}