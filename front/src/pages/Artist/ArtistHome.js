import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistHome.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'

function ArtistHome() {
  return (
    <>

        <div className='ArtistHome'>
            <div className='AritstHome_Wrapper'>
              <div className='AritstHome_Lf'>

                <div className='AritstHome_Lf_Wrapper'>
                  <div className='AritstHome_ArtistImg'>

                  </div>

                  <div className='AritstHome_ArtistNameBox'>
                      <div className='AritstHome_ArtistName'>Artist Name</div>
                      <div className='AritstHome_ArtistName2'>Name, Name, Name, Name</div>
                      <div className='AritstHome_MusicGenre'>Music Genre</div>
                  </div>

                  <div className='AritstHome_ArtistSnsBox'>
                      <div className='AritstHome_ArtistSns'>
                          <img className="ArtistSnsIcon" src={Instagram} alt="Instargram" />
                      </div>

                      <div className='AritstHome_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Facebook} alt="Instargram" />
                      </div>

                      <div className='AritstHome_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Twitter} alt="Instargram" />
                      </div>

                      <div className='AritstHome_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Youtube} alt="Instargram" />
                      </div>

                      <div className='AritstHome_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Global} alt="Instargram" />
                      </div>

                      
                  </div>

                  <div className='AritstHome_ArtistFollwer'>Follower 0,000</div>

                  <div className='AritstHome_ArtistFavoriteBox'>
                    <div className='AritstHome_ArtistFavoriteText'>Favorite</div>

                  </div>

                  <div className='AritstHome_Artist_Line'></div>

                  <div className='AritstHome_Artistdescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  </div>

                  <div className='AritstHome_ArtistMetaBox'>
                    <div className='AritstHome_ArtistMetaText'>
                    Artist’s Metaverse
                    </div>
                  </div>

                </div>
                

                  
              </div>

              <div className='AritstHome_Rh'>
                  <div className='AritstHome_Rh_Memu'>
                        <ul className='AritstHome_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <li className='AritstHome_Rh_MemuBoxText'>Home</li>
                        </Link>
                        <div className='AritstHome_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <li className='AritstHome_Rh_MemuBoxText'>Notice</li>
                        </Link> 
                        <div className='AritstHome_Rh_MemuBox_Line'></div>
                        <Link to="/artiststage" className="link">
                          <li className='AritstHome_Rh_MemuBoxText'>Stage</li>
                        </Link>
                        <div className='AritstHome_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <li className='AritstHome_Rh_MemuBoxText'>Schedule</li>
                        </Link>
                        <div className='AritstHome_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <li className='AritstHome_Rh_MemuBoxText'>Store</li>
                        </Link>
                        <div className='AritstHome_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <li className='AritstHome_Rh_MemuBoxText'>Post</li>
                        </Link>
                        
                        </ul>
                  </div>

                  <div className='AritstHome_Rh_Container'>
                      home
                  </div>


              </div>
                
            </div>
        </div>
    
    
    </>
  )
}

export default ArtistHome