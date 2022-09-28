import React, {useState, useRef, useEffect} from "react";
import "../../assets/css/Top/Topbar.css";

import { Link } from "react-router-dom";
import bell from '../../assets/icon/graw/bell.svg'
import hexagon from '../../assets/icon/ping/hexagon.svg'
import search from '../../assets/icon/graw/search.svg'
import more from '../../assets/icon/graw/more-vertical.svg'
import Mypage from '../Popup/MyPage'




export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false)
  // const modalEl   = useRef();

  // const openModal = function () {
  //   setShowModal(prev => !prev)
  // }

//   const handleClickOutside = ({ target }) => {
//     if (isOpen && !modalEl.current.contains(target)) setOpen(false);
//   };

// useEffect(() => {
//   window.addEventListener("click", handleClickOutside);
//   return () => {
//     window.removeEventListener("click", handleClickOutside);
//   };
// }, []);

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

            <img className="more" src={more} alt="more" />

            <img className="bell" src={bell} alt="bell" />

            <img className="hexagon" src={hexagon} alt="hexagon" />

            <button className="mypage_btn" onclick={() =>setIsOpen(true)}><img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Avatar_logo" /></button>
            

            

            
            

            

            
            

          </div>

        </div>
      </div>
    </>
  );
}
