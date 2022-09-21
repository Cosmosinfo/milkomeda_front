import React from 'react'
import './ArtistMainCard.css'
import { Link } from "react-router-dom";

function ArtistMainCard() {
  return (
    <>
      
              
              <div className='ArtistMain_ContentItem'>
                <Link to="/artisthome" className="link">
                <div className='ArtistMain_ContentItemContainer'>
                  <div className='ArtistMain_ContentItemContainerTop'></div>
                  <div className='ArtistMain_ContentItemContainerBtm'>
                      <div className='ArtistMain_ContentItemContainerBtmArtistName'>
                      Artist Name
                      </div>

                      <div className='ArtistMain_ContentItemContainerBtmMusic'>
                        Music Genre
                      </div>
                  </div>
                </div>
                </ Link >
              </div>
              


             
          
    </>
  )
}

export default ArtistMainCard