import React from 'react'
import '../../assets/css/Main/Home.css'
import Carousel from "../../components/MainPage/Carousel/Carousel"

function Home() {
  return (
    <div className="home">
      <div className='homeWrapper'>
        {/* ====================  Carousel  ======================== */}

        < Carousel />

        {/* ====================  New Artist  ======================== */}

        <div className="home_newArtist">
          <div className="home_newArtistTitle">
            New Artist
          </div>

          <div className="home_newArtistItem">
            <div className="home_newArtistItemContainer">
              <div className="home_newArtistItemContainerLeft">

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_Aritist_img" />


              </div>
              <div className="home_newArtistItemContainerRight">

                <div className="home_newArtistItemContainerNameBox">

                  <span className="home_newArtistItemContainerArtistName">Artist Name</span>

                </div>
                <div className="home_newArtistItemContainerMusicGenreBox">

                  <span className="home_newArtistItemContainerMusicGenre">Music Genre</span>
                </div>
              </div>
            </div>

            <div className="home_newArtistItemContainer">
              <div className="home_newArtistItemContainerLeft">

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_Aritist_img" />


              </div>
              <div className="home_newArtistItemContainerRight">

                <div className="home_newArtistItemContainerNameBox">

                  <span className="home_newArtistItemContainerArtistName">Artist Name</span>

                </div>
                <div className="home_newArtistItemContainerMusicGenreBox">

                  <span className="home_newArtistItemContainerMusicGenre">Music Genre</span>
                </div>
              </div>
            </div>

            <div className="home_newArtistItemContainer">
              <div className="home_newArtistItemContainerLeft">

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_Aritist_img" />


              </div>
              <div className="home_newArtistItemContainerRight">

                <div className="home_newArtistItemContainerNameBox">

                  <span className="home_newArtistItemContainerArtistName">Artist Name</span>

                </div>
                <div className="home_newArtistItemContainerMusicGenreBox">

                  <span className="home_newArtistItemContainerMusicGenre">Music Genre</span>
                </div>
              </div>
            </div>

            <div className="home_newArtistItemContainer">
              <div className="home_newArtistItemContainerLeft">

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_Aritist_img" />


              </div>
              <div className="home_newArtistItemContainerRight">

                <div className="home_newArtistItemContainerNameBox">

                  <span className="home_newArtistItemContainerArtistName">Artist Name</span>

                </div>
                <div className="home_newArtistItemContainerMusicGenreBox">

                  <span className="home_newArtistItemContainerMusicGenre">Music Genre</span>
                </div>
              </div>
            </div>

            <div className="home_newArtistItemContainer">
              <div className="home_newArtistItemContainerLeft">

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_Aritist_img" />


              </div>
              <div className="home_newArtistItemContainerRight">

                <div className="home_newArtistItemContainerNameBox">

                  <span className="home_newArtistItemContainerArtistName">Artist Name</span>

                </div>
                <div className="home_newArtistItemContainerMusicGenreBox">

                  <span className="home_newArtistItemContainerMusicGenre">Music Genre</span>
                </div>
              </div>
            </div>

            <div className="home_newArtistItemContainerLast">
              <div className="home_newArtistItemContainerLeft">

                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_Aritist_img" />


              </div>
              <div className="home_newArtistItemContainerRight">

                <div className="home_newArtistItemContainerNameBox">

                  <span className="home_newArtistItemContainerArtistName">Artist Name</span>

                </div>
                <div className="home_newArtistItemContainerMusicGenreBox">

                  <span className="home_newArtistItemContainerMusicGenre">Music Genre</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ====================  Live Stage  ======================== */}

        <div className="home_LiveStage">

        </div>


      </div>
    </div>
  )
}

export default Home