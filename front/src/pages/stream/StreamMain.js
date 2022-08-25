import React from 'react'
import { Link } from "react-router-dom";
import "../../assets/css/Stream/StreamMain.css"
import filter from '../../assets/icon/graw/filter.svg'

function StreamMain() {
    return (
        <>
            <div className="StreamMain">
                <div className="StreamMain_Wrapper">
                    <div className="StreamMain_Top">
                        <div className="StreamMain_LiveStage_Title_left">
                            <span className="Live">Live</span>&nbsp;
                            <span className="Stage">Stage</span>
                        {/* 코드 리뷰 필요 */}
                            <div className="StreamMain_LiveStage_Title_middle">
                                <div className="Stream_LiveStage_us">Upcoming Stage</div>
                                <div className="Stream_LiveStage_ps">Previous Stage</div>
                            
                            </div>
                        </div>

                        <div className="Stream_LiveStage_Title_Right">
                        
                            <div className="Stream_LiveStage_filter">
                                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                                    Sort
                            </div>
                        </div>

                    </div>

                    <div className="home_LiveStage_Container">
                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                    </div>

                    <div className="home_LiveStage_Container">
                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                    </div>

                    <div className="home_LiveStage_Container">
                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                    </div>

                    <div className="home_LiveStage_Container">
                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                        <div className="home_LiveStage_Item">
              <Link to="/streamlive">
              <div className="home_LiveStage_Top">
              </div>
              </Link>
              <div className="home_LiveStage_btm">
                <div className="home_LiveStage_btm_Left">

                  <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="home_LiveStage_Artist_img" />


                </div>
                <div className="home_LiveStage_btm_Right">

                  <div className="home_LiveStage_NameBox">

                    <span className="home_LiveStage_NameBox_ArtistTitle">Title</span>

                  </div>
                  <div className="home_LiveStage_NameBox_ArtistName_Box">

                    <span className="home_LiveStage_NameBox_ArtistName">Artist Name</span>
                  </div>
                </div>
              </div>
                        </div>

                    </div>

                    
                </div>
            </div>

            
        </>
    )
}

export default StreamMain