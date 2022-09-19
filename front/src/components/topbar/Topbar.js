import React from "react";
import "../../assets/css/Top/Topbar.css";

import { Link } from "react-router-dom";
import bell from '../../assets/icon/graw/bell.svg'
import hexagon from '../../assets/icon/ping/hexagon.svg'
import search from '../../assets/icon/graw/search.svg'
import more from '../../assets/icon/graw/more-vertical.svg'




export default function Topbar() {
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

            <input className="search_input" type="text" placeholder="Search" name="name" />

          </div>

          <div className="topbarRight">
            {/* <img className="Light" src={Light} alt="Light" /> */}

            <img className="more" src={more} alt="more" />

            <img className="bell" src={bell} alt="bell" />

            <img className="hexagon" src={hexagon} alt="hexagon" />

            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Avatar_logo" />

          </div>

        </div>
      </div>
    </>
  );
}
