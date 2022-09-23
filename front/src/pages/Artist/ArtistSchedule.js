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
                          <li className='ArtistSchedule_Rh_MemuBoxTextSchedule'>Schedule</li>
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

                       
                            <div className='ArtistSchedule_Rh_btm_Schedulelf'>
                                2022. 08
                            </div>

                            <div className='ArtistSchedule_Rh_btm_ScheduleRh'>

                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container'>
                                    <span className='ArtistSchedule_Rh_btm_ScheduleRh_container_text'>Upcoming&nbsp;Schedule</span>
                                    
                                    {/* 스케줄 박스 */}
                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>3</div>
                                                <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>WED</spen>
                                            </div>

                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </spen>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                18:00~19:30(KST/90mins)
                                                </spen>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                Location
                                                </spen>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>3</div>
                                                <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>WED</spen>
                                            </div>

                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </spen>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                18:00~19:30(KST/90mins)
                                                </spen>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                Location
                                                </spen>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>3</div>
                                                <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>WED</spen>
                                            </div>

                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                </spen>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                18:00~19:30(KST/90mins)
                                                </spen>
                                                <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                Location
                                                </spen>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        

                  </div>

              </div>
              
            </div>
          </div>


    </>
  )
}

export default ArtistSchedule