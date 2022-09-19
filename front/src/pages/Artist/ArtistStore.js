import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStore.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';

function ArtistStore() {
  return (
    <>
        
        <div className='ArtistStore'>
            <div className='ArtistStore_Wrapper'>
              <ArtistInfoCard />

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