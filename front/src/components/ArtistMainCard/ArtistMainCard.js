import React from 'react'
import './ArtistMainCard.css'
import { Link } from "react-router-dom";

function ArtistMainCard() {
  return (
    <>


      <div className='ArtistMain_ContentItem'>
        <Link to="/artisthome" className="link artistMainCard">
          <div className='ArtistMain_ContentItemContainer'>
            <div className='ArtistMain_ContentItemContainerTop'>
              <img src="https://i.imgur.com/PWcLqjm.jpg" className="ArtistMain_ContentItemContainerTop_Img" alt=""  />
            </div>
            <div className='ArtistMain_ContentItemContainerBtm'>
              <div className='ArtistMain_ContentItemContainerBtmArtistName'>
              Lubless Official
              </div>

              <div className='ArtistMain_ContentItemContainerBtmMusic'>
              Indie music
              </div>
            </div>
          </div>
        </ Link >
      </div>





    </>
  )
}

export default ArtistMainCard