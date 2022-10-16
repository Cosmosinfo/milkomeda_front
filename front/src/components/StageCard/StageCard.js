import React from 'react'
import "./StageCard.css"
import { Link } from "react-router-dom";

function StageCard() {
  return (
    <>

      <Link to="/StreamLive" className="link stageCard">
        <div className="Stage_Top">
              <img className="Stage_Top_img" src="https://i.imgur.com/Vkuhwil.jpg" alt="" />
        </div>

        <div className="Stage_btm">
          <div className="Stage_btm_Left">

            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="Stage_Artist_img" />


          </div>
          <div className="Stage_btm_Right">

            <div className="Stage_NameBox">

              <span className="Stage_NameBox_ArtistTitle">I have gotta feelin like</span>

            </div>
            <div className="Stage_NameBox_ArtistName_Box">

              <span className="Stage_NameBox_ArtistName">러블레스(Lubless) X 투영(To.young)</span>
            </div>
          </div>
        </div>
      </Link>






    </>
  )
}

export default StageCard