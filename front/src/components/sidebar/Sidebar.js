// eslint-disable-next-line
import "../../assets/css/Side/sidebar.css";
// import {
//   Timeline,
//   TrendingUp,
// } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import home_pink from '../../assets/icon/ping/home.svg'
import home_gray from '../../assets/icon/graw/home.svg'
import Stream_gray from '../../assets/icon/graw/video.svg'
import Stream_pink from '../../assets/icon/ping/video.svg'
// import Metaverse from '../../assets/icon/graw/globe.svg'
import Artist_gray from '../../assets/icon/graw/headphones.svg'
import Artist_pink from '../../assets/icon/ping/headphones.svg'
import Store_gray from '../../assets/icon/graw/shopping-bag.svg'
import Store_pink from '../../assets/icon/ping/shopping-bag.svg'
// import Favorite_gray from '../../assets/icon/graw/star.svg'
// import Favorite_pink from '../../assets/icon/ping/star.svg'
// import Calendar_gray from '../../assets/icon/graw/calendar.svg'
// import Calendar_pink from '../../assets/icon/ping/calendar.svg'
import Settings_gray from '../../assets/icon/graw/settings.svg'
import Settings_pink from '../../assets/icon/ping/settings.svg'
import Help_gray from '../../assets/icon/graw/help-circle.svg'
import Help_pink from '../../assets/icon/ping/help-circle.svg'

export default function Sidebar() {

  const location = useLocation();

  const urlObj = {
    home: ['/'],
    stage: ['/stream', '/StreamLive', '/streamup', '/streampv'],
    artist: ['/artist', '/artisthome', '/artistnotice', '/artiststage', '/artiststageus', '/artiststageps', '/artistschedule', '/artistpost', '/artiststore'],
    store: ['/store', '/storeDetail'],
    favorite: ['/'],
    calendar: ['/'],
    settings: ['/setting'],
    help: ['/help']
  }


  let curMenu = '';
  if (urlObj.home.indexOf(location.pathname) > -1) {
    curMenu = 'home';
  } else if (urlObj.stage.indexOf(location.pathname) > -1) {
    curMenu = 'stage';
  } else if (urlObj.artist.indexOf(location.pathname) > -1) {
    curMenu = 'artist';
  } else if (urlObj.store.indexOf(location.pathname) > -1) {
    curMenu = 'store';
  } else if (urlObj.settings.indexOf(location.pathname) > -1) {
    curMenu = 'settings';
  } else if (urlObj.help.indexOf(location.pathname) > -1) {
    curMenu = 'help';
  }


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <ul className="side_item_1">

          <li className="item_name">
            <img className="sidebarIcon" src={curMenu === 'home' ? home_pink : home_gray} alt="home" />
            {/* <img className="sidebarIcon" src={home_gray} alt="home" /> */}


            {
              curMenu === 'home' ? (
                <Link to="/" className="item_link">
                  <span className="home_title">홈</span>

                </Link>
              ) : (<Link to="/" className="item_link">
                <span className="home_title_change">홈</span>

              </Link>)

            }

            {
              curMenu === 'home' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)

            }



          </li>

          <li className="item_name">

            <img className="sidebarIcon" src={curMenu === 'stage' ? Stream_pink : Stream_gray} alt="Stream" />
            {
              curMenu === 'stage' ? (
                <Link to="/stream" className="item_link">
                  <span className="home_title">스테이지</span>

                </Link>
              ) : (<Link to="/stream" className="item_link">
                <span className="home_title_change">스테이지</span>

              </Link>)

            }

            {
              curMenu === 'stage' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)
            }

          </li>

          <li className="item_name">
            <img className="sidebarIcon" src={curMenu === 'artist' ? Artist_pink : Artist_gray} alt="Artist" />
            {
              curMenu === 'artist' ? (
                <Link to="/artist" className="item_link">
                  <span className="home_title">아티스트</span>

                </Link>
              ) : (<Link to="/artist" className="item_link">
                <span className="home_title_change">아티스트</span>

              </Link>)

            }
            {
              curMenu === 'artist' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)
            }
          </li>

          <li className="item_name">
            <img className="sidebarIcon" src={curMenu === 'store' ? Store_pink : Store_gray} alt="Store" />

            {
              curMenu === 'store' ? (
                <Link to="/store" className="item_link">
                  <span className="home_title">스토어</span>

                </Link>
              ) : (<Link to="/store" className="item_link">
                <span className="home_title_change">스토어</span>

              </Link>)

            }
            {
              curMenu === 'store' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)
            }
          </li>

        </ul>

        {/* <hr className="hr" /> */}

        {/* <ul className="side_item_2">

          <li className="item_name">
            <img className="sidebarIcon" src={curMenu === 'favorite' ? Favorite_pink : Favorite_gray} alt="Favorite" />
            
            {
              curMenu === 'favorite' ? (
                <Link to="/" className="item_link">
                <span className="home_title">즐겨찾기</span>
              
                </Link>
              ) : (<Link to="/" className="item_link">
              <span className="home_title_change">즐겨찾기</span>
            
              </Link>)
              
            }
            {
              curMenu === 'favorite' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)
            }
          </li>


          <li className="item_name">
            <img className="sidebarIcon" src={curMenu === 'store' ? Store_pink : Store_gray} alt="Calendar" />
            <Link to="/" className="item_link">
              일정
            </Link>

              
          </li>


        </ul> */}




        <ul className="side_item_3">

          <hr className="hr2" />

          <li className="item3_name">
            <img className="sidebarIcon" src={curMenu === 'settings' ? Settings_pink : Settings_gray} alt="Settings" />
            {
              curMenu === 'settings' ? (
                <Link to="/setting" className="item_link">
                  <span className="home_title">설정</span>

                </Link>
              ) : (<Link to="/setting" className="item_link">
                <span className="home_title_change">설정</span>

              </Link>)

            }
            {
              curMenu === 'settings' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)
            }
          </li>

          <li className="item3_name">
            <img className="sidebarIcon" src={curMenu === 'help' ? Help_pink : Help_gray} alt="Help" />
            {
              curMenu === 'help' ? (
                <Link to="/help" className="item_link">
                  <span className="home_title">도움말</span>

                </Link>
              ) : (<Link to="/help" className="item_link">
                <span className="home_title_change">도움말</span>

              </Link>)

            }
            {
              curMenu === 'help' ? (
                <div className="item_nameBar">

                </div>
              ) : (<></>)
            }
          </li>


        </ul>

      </div>
    </div>
  );
}