import React from "react";
import "../../assets/css/Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import bell from '../../assets/icon/graw/bell.svg'
import hexagon from '../../assets/icon/ping/hexagon.svg'
import search from '../../assets/icon/graw/search.svg'
import more from '../../assets/icon/graw/more-vertical.svg'
import Light from '../../assets/icon/graw/sun.svg'



export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">milkomeda</span>
        </div>
        <div className="topmiddle">
          <div className="topbarIconContainer">
            <img src={search} alt="search" />

          </div>
          <div className="searchBar">

            <TextField
              sx={{
                width: 900,
                input: { color: 'gray' }
              }} fullWidth label="search" />

          </div>

        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <img src={Light} alt="Light" />
          </div>
          <div className="topbarIconContainer">
            <img src={more} alt="more" />
          </div>
          <div className="topbarIconContainer">
            <img src={bell} alt="bell" />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <img src={hexagon} alt="hexagon" />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
