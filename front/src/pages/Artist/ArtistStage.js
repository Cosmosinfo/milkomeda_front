import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStage.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'
import StageCard from '../../components/StageCard/StageCard';

function ArtistStage() {
  return (
    <>

        <div className='ArtistStage'>
            <div className='ArtistStage_Wrapper'>
              <div className='ArtistStage_Lf'>

                <div className='ArtistStage_Lf_Wrapper'>
                  <div className='ArtistStage_ArtistImg'>

                  </div>

                  <div className='ArtistStage_ArtistNameBox'>
                      <div className='ArtistStage_ArtistName'>Artist Name</div>
                      <div className='ArtistStage_ArtistName2'>Name, Name, Name, Name</div>
                      <div className='ArtistStage_MusicGenre'>Music Genre</div>
                  </div>

                  <div className='ArtistStage_ArtistSnsBox'>
                      <div className='ArtistStage_ArtistSns'>
                          <img className="ArtistSnsIcon" src={Instagram} alt="Instargram" />
                      </div>

                      <div className='ArtistStage_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Facebook} alt="Instargram" />
                      </div>

                      <div className='ArtistStage_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Twitter} alt="Instargram" />
                      </div>

                      <div className='ArtistStage_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Youtube} alt="Instargram" />
                      </div>

                      <div className='ArtistStage_ArtistSns'>
                        <img className="ArtistSnsIcon" src={Global} alt="Instargram" />
                      </div>

                      
                  </div>

                  <div className='ArtistStage_ArtistFollwer'>Follower 0,000</div>

                  <div className='ArtistStage_ArtistFavoriteBox'>
                    <div className='ArtistStage_ArtistFavoriteText'>Favorite</div>

                  </div>

                  <div className='ArtistStage_Artist_Line'></div>

                  <div className='ArtistStage_Artistdescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  </div>

                  <div className='ArtistStage_ArtistMetaBox'>
                    <div className='ArtistStage_ArtistMetaText'>
                    Artist’s Metaverse
                    </div>
                  </div>

                </div>
                

                  
              </div>

              <div className='ArtistStage_Rh'>
                  <div className='ArtistStage_Rh_Memu'>
                        <div className='ArtistStage_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <div className='ArtistStage_Rh_MemuBoxText'>Home</div>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <div className='ArtistStage_Rh_MemuBoxText'>Notice</div>
                        </Link> 
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artiststage" className="link">
                          <div className='ArtistStage_Rh_MemuBoxText'>Stage</div>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <div className='ArtistStage_Rh_MemuBoxText'>Schedule</div>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <div className='ArtistStage_Rh_MemuBoxText'>Store</div>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <div className='ArtistStage_Rh_MemuBoxText'>Post</div>
                        </Link>
                        </div>
                  </div>

                  <div className='ArtistStage_Rh_Container'>
                        <div className='ArtistStage_Rh_top'>
                            <div className='ArtistStage_Rh_top_live'>Live Stage</div>
                            <div className='ArtistStage_Rh_top_Upcoming'>Upcoming Stage</div>
                            <div className='ArtistStage_Rh_top_Stage'>Previous Stage</div>
                        </div>

                        <div className='ArtistStage_Rh_btm'>
                        <StageCard />

<StageCard />

<StageCard />
                        </div>

                        

                        


                  </div>


              </div>
                
            </div>
        </div>
    
    </>
  )
}

export default ArtistStage