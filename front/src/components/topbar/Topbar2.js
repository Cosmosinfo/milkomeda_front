import { React, useState, useRef, useEffect } from "react";
import "../../assets/css/Top/Topbar2.css";
import { Link } from "react-router-dom";

import { ReactComponent as More } from "../../assets/icon/graw/more-vertical.svg";

import Terms from "../Popup/Term"
import search from '../../assets/icon/graw/search.svg'


export default function Topbar2() {
  const dropdownRef = useRef(null);
  const curRef = useRef(true);

  const dropdownRef2 = useRef(null);
  const curRef2 = useRef(true);

  const dropdownRef3 = useRef(null);
  const curRef3 = useRef(true);

  const [openProfile, setOpenProfile] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);

  useEffect(() => {
    console.log('useEffect')
    const pageClickEvent = (e) => {
      if (curRef.current) {
        curRef.current = false;
        return;
      } else {
        curRef.current = true;
      }

      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setOpenNoti(!openNoti);

      }
    };

    // If the item is active (ie open) then listen for clicks
    if (openNoti) {
      window.addEventListener('click', pageClickEvent);
    }
    return (openTerms, openProfile) => {
      window.removeEventListener('click', pageClickEvent);
    }





  }, [openNoti]);

  useEffect(() => {
    console.log('useEffect')
    const pageClickEvent2 = (e) => {
      if (curRef2.current) {
        curRef2.current = false;
        
        return;
      } else {
        curRef2.current = true;
      
      }

      // If the active element exists and is clicked outside of
      if (dropdownRef2.current !== null && !dropdownRef2.current.contains(e.target)) {
        setOpenTerms(!openTerms);

      }
    };

    // If the item is active (ie open) then listen for clicks
    if (openTerms) {
      window.addEventListener('click', pageClickEvent2);
    }
    return (openProfile, openNoti) => {
      window.removeEventListener('click', pageClickEvent2);
    }





  }, [openTerms]);

  useEffect(() => {
    console.log('useEffect')
    const pageClickEvent3 = (e) => {
      if (curRef3.current ) {
        curRef3.current = false;
        return;
      } else {
        curRef3.current = true;
        
      }

      // If the active element exists and is clicked outside of
      if (dropdownRef3.current !== null && !dropdownRef3.current.contains(e.target)) {
        setOpenProfile(!openProfile);
        

      }
    };


    // If the item is active (ie open) then listen for clicks
    if (openProfile) {
      window.addEventListener('click', pageClickEvent3);
    }
    return (openTerms, openNoti) => {
      window.removeEventListener('click', pageClickEvent3);
      
    }





  }, [openProfile]);

  

  


  return (
    <>
      <div className="topbar2">
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

            <div className="Icon_box">
            <More className="more" onClick={() => {
              setOpenTerms(!openTerms)
              curRef2.current = true;
            }} />

            </div>
            
            <nav
              ref={dropdownRef}
              className={`menus ${openTerms ? "active" : "inactive"}`}
            >
              <Terms />
            </nav>

            <Link to="/login" className="link loginbtm">
            <div className="topbarRight_loginBox">
                <span className="topbarRight_loginBox_text">Login</span>
            </div>
            </Link>
            



          </div>

        </div>
      </div>
    </>
  );
}
