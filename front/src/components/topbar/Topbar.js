import {React, useState , useRef, useEffect } from "react";
import "../../assets/css/Top/Topbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Bell } from "../../assets/icon/graw/bell.svg";
import { ReactComponent as Hexagon } from "../../assets/icon/ping/hexagon.svg";
import { ReactComponent as More } from "../../assets/icon/graw/more-vertical.svg";
import Mypage from "../../components/Popup/MyPage"
import Notification from "../../components/Popup/Notification"
import Terms from "../../components/Popup/Term"
import search from '../../assets/icon/graw/search.svg'


export default function Topbar() {
  const dropdownRef = useRef(null);
  const curRef = useRef(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
  // const onClick = () => {
  //   setOpenProfile(!openProfile)
  //   // setOpenTerms(!openTerms)
  //   curRef.current = true;
  // };

  useEffect(() => {
    console.log('useEffect')
    const pageClickEvent = (e) => {
      if(curRef.current) {
        curRef.current = false;
        return;
      } else {
        curRef.current = true;
      }
      
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setOpenProfile(!openProfile);
        
      }
    };
  
    // If the item is active (ie open) then listen for clicks
    if (openProfile) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

    

    
  
  }, [openProfile]);

  


  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="logo_name">
          
           
            <Link to="/" className="link">
               milkomeda
            </Link>
          </div>

          <div className="searchbar">


            <img className="search_logo" src={search} alt="search" />

            <input className="search_input" type="text" placeholder="검색어를 입력해주세요" name="name" />

          </div>

          <div className="topbarRight">
            {/* <img className="Light" src={Light} alt="Light" /> */}
            
            <More className="more" onClick={() => {setOpenTerms(!openTerms) 
              curRef.current = true;}}/>
            {/* <img className="more" src={more} alt="more" /> */}

            <Bell className="bell" onClick={() => {setOpenNoti(!openNoti) 
              curRef.current = true;}}/>
            {/* <img className="bell" src={bell} alt="bell" /> */}

            <Hexagon className="hexagon" />
           
            <button className="Avatar_logo" onClick={() => {setOpenProfile(!openProfile) 
              curRef.current = true;}} ></button>

            <nav
                ref={dropdownRef}
                className={`menu ${openProfile ? "active" : "inactive"}`}
              >
                <Mypage />
            </nav>

            <nav
                ref={dropdownRef}
                className={`menu ${openTerms ? "active" : "inactive"}`}
              >
                <Terms />
            </nav>

            <nav
                ref={dropdownRef}
                className={`menu ${openNoti ? "active" : "inactive"}`}
              >
                <Notification />
            </nav>
            {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Avatar_logo" /> */}
            {/* <button className="mypage_btn" onclick={() =>setIsOpen(true)}><img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Avatar_logo" /></button> */}
            

            

            
            

            

            
            

          </div>

        </div>
      </div>
    </>
  );
}
