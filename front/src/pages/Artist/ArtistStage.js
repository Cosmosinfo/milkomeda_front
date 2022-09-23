import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStage.css'
import StageCard from '../../components/StageCard/StageCard';
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';



function ArtistStage() {
  return (
    <>

          <div className='ArtistStage'>
            <div className='ArtistStage_Wrapper'>
              <ArtistInfoCard />

              
              <div className='ArtistStage_Rh'>
                  <div className='ArtistStage_Rh_Memu'>
                        <ul className='ArtistStage_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <li className='ArtistStage_Rh_MemuBoxText'>Home</li>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <li className='ArtistStage_Rh_MemuBoxText'>Notice</li>
                        </Link> 
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artiststage" className="link">
                          <li className='ArtistStage_Rh_MemuBoxTextStage'>Stage</li>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <li className='ArtistStage_Rh_MemuBoxText'>Schedule</li>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <li className='ArtistStage_Rh_MemuBoxText'>Store</li>
                        </Link>
                        <div className='ArtistStage_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <li className='ArtistStage_Rh_MemuBoxText'>Post</li>
                        </Link>
                        
                        </ul>
                  </div>

                  
                  <div className='ArtistStage_Rh_btm'>
                    <div className="ArtistStage_Rh_btm_Top">

                          <ul className='ArtistStage_Rh_btm_Top_lf'>

                              <li className="ArtistStage_Rh_btm_Stage">Live&nbsp;Stage</li>
                              <li className="ArtistStage_Rh_btm_LiveStage_us">Upcoming&nbsp;Stage</li>
                              <li className="ArtistStage_Rh_btm_LiveStage_ps">Previous&nbsp;Stage</li>

                          </ul>

                    </div>



                    <div className='ArtistStage_Rh_btm_btm'>
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