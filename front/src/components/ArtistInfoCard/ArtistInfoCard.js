import React from 'react'
import './ArtistInfoCard.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'


function ArtistInfoCard() {
  return (
    <>
        <div className='ArtistInfoCard_Lf'>

<div className='ArtistInfoCard_Lf_Wrapper'>
  <div className='ArtistInfoCard_ArtistImg'>

  </div>

  <div className='ArtistInfoCard_ArtistNameBox'>
      <div className='ArtistInfoCard_ArtistName'>Artist Name</div>
      <div className='ArtistInfoCard_ArtistName2'>Name, Name, Name, Name</div>
      <div className='ArtistInfoCard_MusicGenre'>Music Genre</div>
  </div>

  <div className='ArtistInfoCard_ArtistSnsBox'>
      <div className='ArtistInfoCard_ArtistSns'>
          <img className="ArtistSnsIcon" src={Instagram} alt="Instargram" />
      </div>

      <div className='ArtistInfoCard_ArtistSns'>
        <img className="ArtistSnsIcon" src={Facebook} alt="Instargram" />
      </div>

      <div className='ArtistInfoCard_ArtistSns'>
        <img className="ArtistSnsIcon" src={Twitter} alt="Instargram" />
      </div>

      <div className='ArtistInfoCard_ArtistSns'>
        <img className="ArtistSnsIcon" src={Youtube} alt="Instargram" />
      </div>

      <div className='ArtistInfoCard_ArtistSns'>
        <img className="ArtistSnsIcon" src={Global} alt="Instargram" />
      </div>

      
  </div>

  <div className='ArtistInfoCard_ArtistFollwer'>Follower 0,000</div>

  <div className='ArtistInfoCard_ArtistFavoriteBox'>
    <div className='ArtistInfoCard_ArtistFavoriteText'>Favorite</div>

  </div>

  <div className='ArtistInfoCard_Artist_Line'></div>

  <div className='ArtistInfoCard_Artistdescription'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  </div>

  <div className='ArtistInfoCard_ArtistMetaBox'>
    <div className='ArtistInfoCard_ArtistMetaText'>
    Artist’s Metaverse
    </div>
  </div>

</div>


  
        </div>

        
    
    
    
    </>
  )
}

export default ArtistInfoCard