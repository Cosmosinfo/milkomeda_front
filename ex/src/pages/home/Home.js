import React from 'react'
import { Link } from "react-router-dom";
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

            <Link to="/" className="link">
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
            </Link>

            <Link to="/" className="link">
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
            </Link>

            <Link to="/" className="link">
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
            </Link>

            <Link to="/" className="link">
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
            </Link>

            <Link to="/" className="link">
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
            </Link>

            <Link to="/" className="linkList">
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
            </Link>

          </div>

        </div>
        {/* ====================  Live Stage  ======================== */}

        <div className="home_LiveStage">
          <div className="home_LiveStageTitle">
            Live Stage
          </div>
          <div className="home_LiveStageItem">

          </div>
        </div>


      </div>
    </div >
  )
}

export default Home