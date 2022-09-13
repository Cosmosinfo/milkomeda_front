import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistHome.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'
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