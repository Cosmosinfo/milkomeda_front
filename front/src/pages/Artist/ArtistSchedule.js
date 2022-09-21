import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistSchedule.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';

function ArtistSchedule() {
  return (
    <>

<div className='ArtistSchedule'>
            <div className='ArtistSchedule_Wrapper'>
              <ArtistInfoCard />

              
              <div className='ArtistSchedule_Rh'>
                  <div className='ArtistSchedule_Rh_Memu'>
                        <ul className='ArtistSchedule_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <li className='ArtistSchedule_Rh_MemuBoxText'>Home</li>
                        </Link>
                        <div className='ArtistSchedule_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <li className='ArtistSchedule_Rh_MemuBoxText'>Notice</li>
                        </Link> 
                        <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                        <Link to="/artiststage" className="link">
                          <li className='ArtistSchedule_Rh_MemuBoxText'>Stage</li>
                        </Link>
                        <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <li className='ArtistSchedule_Rh_MemuBoxText'>Schedule</li>
                        </Link>
                        <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <li className='ArtistSchedule_Rh_MemuBoxText'>Store</li>
                        </Link>
                        <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <li className='ArtistSchedule_Rh_MemuBoxText'>Post</li>
                        </Link>
                        
                        </ul>
                  </div>

                  
                  <div className='ArtistSchedule_Rh_btm'>
            

                  </div>

              </div>
              
            </div>
          </div>


    </>
  )
}

export default ArtistSchedule