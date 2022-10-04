import React from 'react'
import '../../assets/css/Artist/ArtistMain.css'
import filter from '../../assets/icon/graw/filter.svg'
import ArtistMainCard from '../../components/ArtistMainCard/ArtistMainCard'



function ArtistMain() {
  return (
    <>

      <div className='ArtistMain'>
        <div className='ArtistMain_Wrapper'>
          <div className='ArtistMain_top'>
            <div className='ArtistMain_top_lf'>
              <span className='ArtistMain_topText'>
                아티스트
              </span>

            </div>



            <div className='ArtistMain_top_rh'>
              <img className="ArtistMain_sortimg" src={filter} alt="filter" />
              <span className='ArtistMain_imgBox_text'>Sort</span>

            </div>



          </div>

          <div className='ArtistMain_btm'>
            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

            <ArtistMainCard />

          </div>




        </div>


      </div>



    </>
  )
}

export default ArtistMain