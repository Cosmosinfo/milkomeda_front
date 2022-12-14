import { React, useState, useRef, useEffect } from "react";
import "../../assets/css/Top/Topbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Bell } from "../../assets/icon/graw/bell.svg";
import { ReactComponent as Hexagon } from "../../assets/icon/ping/hexagon.svg";
import { ReactComponent as More } from "../../assets/icon/graw/more-vertical.svg";
import Japan from "../../assets/icon/country/japan.png";
import Korea from "../../assets/icon/country/korea.png";
import Mypage from "../../components/Popup/MyPage";
import Notification from "../../components/Popup/Notification";
import Terms from "../../components/Popup/Term";
import search from "../../assets/icon/graw/search.svg";
import { useTranslation } from "react-i18next";
import i18next from "../../Data/lang/i18n";

export default function Topbar() {
  // 다국어 번역
  const { t } = useTranslation();

  const placeholder = t("top_search");

  const clickHandler = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

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
      window.addEventListener("click", pageClickEvent);
    }
    return (openTerms, openProfile) => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [openNoti]);

  useEffect(() => {
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
      window.addEventListener("click", pageClickEvent2);
    }
    return (openProfile, openNoti) => {
      window.removeEventListener("click", pageClickEvent2);
    };
  }, [openTerms]);

  useEffect(() => {
    const pageClickEvent3 = (e) => {
      if (curRef3.current) {
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

    // If the item is active (ie open) then listen for click
    if (openProfile) {
      window.addEventListener("click", pageClickEvent3);
    }
    return (openTerms, openNoti) => {
      window.removeEventListener("click", pageClickEvent3);
    };
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

            <input className="search_input" type="text" placeholder={placeholder} name="name" />
          </div>

          <div className="topbarRight">
            <div className="countrybtm">
              <img className="country_img" onClick={() => clickHandler("ko")} src={Korea} alt=""></img>
            </div>
            <div className="countrybtm">
              <img className="country_img" onClick={() => clickHandler("jp")} src={Japan} alt=""></img>
            </div>
            {/* <button className="countrybtm" onClick={() => clickHandler("jp")}><img className="country_img" src={Japan} alt=""></img></button> */}
            <div className="Icon_box">
              <More
                className="more"
                onClick={() => {
                  setOpenTerms(!openTerms);
                  curRef2.current = true;
                }}
              />
            </div>
            <div className="Icon_box">
              <Bell
                className="bell"
                onClick={() => {
                  setOpenNoti(!openNoti);
                  curRef.current = true;
                }}
              />
            </div>
            <div className="Icon_box">
              <Hexagon className="hexagon" />
            </div>
            <button
              className="Avatar_logo"
              onClick={() => {
                setOpenProfile(!openProfile);
                curRef3.current = true;
              }}
            ></button>
            <nav ref={dropdownRef3} className={`menus3 ${openProfile ? "active" : "inactive"}`}>
              <Mypage />
            </nav>
            <nav ref={dropdownRef} className={`menus ${openTerms ? "active" : "inactive"}`}>
              <Terms />
            </nav>
            <nav ref={dropdownRef2} className={`menus ${openNoti ? "active" : "inactive"}`}>
              <Notification />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
