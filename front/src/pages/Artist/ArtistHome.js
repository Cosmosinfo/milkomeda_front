import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistHome.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';

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