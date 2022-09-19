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
              < ArtistInfoCard />

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
                        <ul className='ArtistStage_Rh_top'>
                            <li className='ArtistStage_Rh_top_live'>Live Stage</li>
                            <li className='ArtistStage_Rh_top_Upcoming'>Upcoming Stage</li>
                            <li className='ArtistStage_Rh_top_Stage'>Previous Stage</li>
                        </ul>

                        <div className='ArtistStage_Rh_btm_box'>

                        <div className='ArtistStage_Rh_btm'>
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        
                        </div>

                        <div className='ArtistStage_Rh_btm'>
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        
                        </div>

                        <div className='ArtistStage_Rh_btm'>
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        
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
        </div>
    
    </>
  )
}

export default ArtistStage