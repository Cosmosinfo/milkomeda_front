import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistHome.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import StageCard from '../../components/StageCard/StageCard'

function ArtistHome() {
  return (
    <>

        <div className='ArtistHome'>
            <div className='ArtistHome_Wrapper'>
              <ArtistInfoCard />

              
              <div className='ArtistHome_Rh'>
                  <div className='ArtistHome_Rh_Memu'>
                        <ul className='ArtistHome_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <li className='ArtistHome_Rh_MemuBoxText'>Home</li>
                        </Link>
                        <div className='ArtistHome_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <li className='ArtistHome_Rh_MemuBoxText'>Notice</li>
                        </Link> 
                        <div className='ArtistHome_Rh_MemuBox_Line'></div>
                        <Link to="/artiststage" className="link">
                          <li className='ArtistHome_Rh_MemuBoxText'>Stage</li>
                        </Link>
                        <div className='ArtistHome_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <li className='ArtistHome_Rh_MemuBoxText'>Schedule</li>
                        </Link>
                        <div className='ArtistHome_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <li className='ArtistHome_Rh_MemuBoxText'>Store</li>
                        </Link>
                        <div className='ArtistHome_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <li className='ArtistHome_Rh_MemuBoxText'>Post</li>
                        </Link>
                        
                        </ul>
                  </div>

                  
                  <div className='AritstHome_Rh_btm'>
                      <div className='AritstHome_Rh_btm_topcard'>
                          <div className='AritstHome_Rh_btm_topcard_item'>

                          </div>

                          <div className='AritstHome_Rh_btm_topcard_item'>

                          </div>

                          <div className='AritstHome_Rh_btm_topcard_item'>

                          </div>
                      </div>

                     

                      <hr className='AritstHome_Rh_btm_hr'></hr>


                      <div className="AritstHome_Rh_btm_LiveStage">
                        <div className="AritstHome_Rh_btm_LiveStage_Title">
                          <p className='AritstHome_Rh_btm_Stage'><span className="AritstHome_Rh_btm_Live">Live</span> Stage</p>
                          <span class="AritstHome_Rh_btm_Upcoming">Upcoming&nbsp;Stage</span>
                        </div>

                        <div className="AritstHome_Rh_btm_LiveStage_Container">
                          <StageCard />

                          <StageCard />

                          <StageCard />

                         

                        

                        </div>


                      </div>

                      <hr className='AritstHome_Rh_btm_hr'></hr>



                      <div className="AritstHome_Rh_btm_LiveStage">
                        <div className="AritstHome_Rh_btm_LiveStage_Title">
                          <span class="AritstHome_Rh_btm_Previous">Previous&nbsp;Stage</span>
                        </div>

                        <div className="AritstHome_Rh_btm_LiveStage_Container">
                          <StageCard />

                          <StageCard />

                          <StageCard />

                         

                        

                        </div>


                      </div>

                  </div>

              </div>
              
            </div>
        </div>
    
    
    </>
  )
}

export default ArtistHome