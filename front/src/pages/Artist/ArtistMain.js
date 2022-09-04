import React from 'react'
import '../../assets/css/Artist/ArtistMain.css'
import filter from '../../assets/icon/graw/filter.svg'
import ArtistMainCard from '../../components/ArtistMainCard/ArtistMainCard'


// import MyPage from '../../components/Popup/MyPage'
// import Notification from '../../components/Popup/Notification'
// import Terms from '../../components/Popup/terms'

function ArtistMain() {
  return (
    <>

      <div className='ArtistMain'>
        <div className='ArtistMain_Wrapper'>
          <div className='ArtistMain_top'>
              <div className='ArtistMain_topText'> 
                  Artist
              </div>

              <div className='ArtistMain_imgBox'>
                <img className="ArtistMain_sortimg" src={filter} alt="filter" />
                Sort
              </div>
          </div>


          <ArtistMainCard />

          <ArtistMainCard />

          <ArtistMainCard />

          <ArtistMainCard />

          

        </div>


      </div>



    </>
  )
}

export default ArtistMain