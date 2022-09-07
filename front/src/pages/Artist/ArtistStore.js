import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStore.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'

function ArtistStore() {
  return (
    <>
        
        <div className='ArtistStore'>
            <div className='ArtistStore_Wrapper'>
              <div className='ArtistStore_Lf'>

                <div className='ArtistStore_Lf_Wrapper'>
                  <div className='ArtistStore_ArtistImg'>

                  </div>

                  <div className='ArtistStore_ArtistNameBox'>
                      <div className='ArtistStore_ArtistName'>Artist Name</div>
                      <div className='ArtistStore_ArtistName2'>Name, Name, Name, Name</div>
                      <div className='ArtistStore_MusicGenre'>Music Genre</div>
                  </div>

                  <div className='ArtistStore_ArtistSnsBox'>
                      <div className='ArtistStore_ArtistSns'>
                          <img className="ArtistSnsIcon" src={Instagram} alt="Instargram" />
                      </div>

                      <div className='ArtistStore_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Facebook} alt="Instargram" />
                      </div>

                      <div className='ArtistStore_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Twitter} alt="Instargram" />
                      </div>

                      <div className='ArtistStore_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Youtube} alt="Instargram" />
                      </div>

                      <div className='ArtistStore_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Global} alt="Instargram" />
                      </div>

                      
                  </div>

                  <div className='ArtistStore_ArtistFollwer'>Follower 0,000</div>

                  <div className='ArtistStore_ArtistFavoriteBox'>
                    <div className='ArtistStore_ArtistFavoriteText'>Favorite</div>

                  </div>

                  <div className='ArtistStore_Artist_Line'></div>

                  <div className='ArtistStore_Artistdescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  </div>

                  <div className='ArtistStore_ArtistMetaBox'>
                    <div className='ArtistStore_ArtistMetaText'>
                    Artist’s Metaverse
                    </div>
                  </div>

                </div>
                

                  
              </div>

              <div className='ArtistStore_Rh'>
                  <div className='ArtistStore_Rh_Memu'>
                        <div className='ArtistStore_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <div className='ArtistStore_Rh_MemuBoxText'>Home</div>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <div className='ArtistStore_Rh_MemuBoxText'>Notice</div>
                        </Link> 
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/ArtistStore" className="link">
                          <div className='ArtistStore_Rh_MemuBoxText'>Stage</div>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <div className='ArtistStore_Rh_MemuBoxText'>Schedule</div>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <div className='ArtistStore_Rh_MemuBoxText'>Store</div>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <div className='ArtistStore_Rh_MemuBoxText'>Post</div>
                        </Link>
                        </div>
                  </div>

                  <div className='ArtistStore_Rh_Container'>
                        store
                  </div>


              </div>
                
            </div>
        </div>

    </>
  )
}

export default ArtistStore