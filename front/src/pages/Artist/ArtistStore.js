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
                        <ul className='ArtistStore_Rh_MemuBox'>
                            
                        <Link to="/artisthome" className="link">
                          <li className='ArtistStore_Rh_MemuBoxText'>아티스트 홈</li>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>       
                        <Link to="/artistnotice" className="link">
                          <li className='ArtistStore_Rh_MemuBoxText'>공지사항</li>
                        </Link> 
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artiststage" className="link">
                          <li className='ArtistStore_Rh_MemuBoxText'>스테이지</li>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artistschedule" className="link">
                          <li className='ArtistStore_Rh_MemuBoxText'>일정</li>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artiststore" className="link">
                          <li className='ArtistStore_Rh_MemuBoxTextStore'>스토어</li>
                        </Link>
                        <div className='ArtistStore_Rh_MemuBox_Line'></div>
                        <Link to="/artistpost" className="link">
                          <li className='ArtistStore_Rh_MemuBoxText'>팬 포스트</li>
                        </Link>
                        
                        </ul>
                  </div>

                  
                  <div className='AritstHome_Rh_btm'>
                     

                  </div>

              </div>
              
            </div>
          </div>

    </>
  )
}

export default ArtistStore