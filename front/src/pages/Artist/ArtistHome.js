import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistHome.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import StageCard from '../../components/StageCard/StageCard'
import chevronright from '../../assets/icon/ping//chevron-right.svg'

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
                          <li className='ArtistHome_Rh_MemuBoxTexthome'>Home</li>
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
                              <div className='AritstHome_Rh_btm_topcard_item_wrapper'>
                                  <div className='AritstHome_Rh_btm_topcard_item_top'>
                                      <span className='AritstHome_Rh_btm_topcard_item_top_text'>Recent&nbsp;Notice</span>
                                      <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                                          <span className='AritstHome_Rh_btm_topcard_item_top_moretext'>More</span>
                                          <img className="chevronright" src={chevronright} alt="chevronright" />
                                      </div>
                                  </div>

                                  <div className="AritstHome_Rh_btm_topcard_item_btm">
                                      <div className='AritstHome_Rh_btm_topcard_item_btm_rntextbox'>
                                          <spen className='AritstHome_Rh_btm_topcard_item_btm_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</spen>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className='AritstHome_Rh_btm_topcard_item'>
                              <div className='AritstHome_Rh_btm_topcard_item_wrapper'>
                                  <div className='AritstHome_Rh_btm_topcard_item_top'>
                                      <span className='AritstHome_Rh_btm_topcard_item_top_text'>Upcoming&nbsp;Schedule</span>
                                      <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                                          <span className='AritstHome_Rh_btm_topcard_item_top_moretext'>More</span>
                                          <img className="chevronright" src={chevronright} alt="chevronright" />
                                      </div>
                                  </div>

                                  <div className="AritstHome_Rh_btm_topcard_item_btm">
                                      <div className='AritstHome_Rh_btm_topcard_item_btm_ustextbox'>
                                          <div className='AritstHome_Rh_btm_topcard_item_btm_ustextbox_container'>
                                                

                                                <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh">
                                                      <div className='AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_top'>
                                                        <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_lf"></div>
                                                        <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_text">Lorem ipsum dolor sit amet</spen>
                                                      </div>
                                                      
                                                      
                                                      
                                                      <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_time">YYYY/MM/DD 18:00(KST)</spen>
                                                </div>
                                          </div>


                                          <div className='AritstHome_Rh_btm_topcard_item_btm_ustextbox_container'>
                                                

                                                <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh">
                                                      <div className='AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_top'>
                                                        <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_lf"></div>
                                                        <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_text">Lorem ipsum dolor sit amet</spen>
                                                      </div>
                                                      
                                                      
                                                      
                                                      <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_time">YYYY/MM/DD 18:00(KST)</spen>
                                                </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className='AritstHome_Rh_btm_topcard_item'>
                              <div className='AritstHome_Rh_btm_topcard_item_wrapper'>
                                  <div className='AritstHome_Rh_btm_topcard_item_top'>
                                      <span className='AritstHome_Rh_btm_topcard_item_top_text'>Fan&nbsp;Post</span>
                                      <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                                          <span className='AritstHome_Rh_btm_topcard_item_top_moretext'>More</span>
                                          <img className="chevronright" src={chevronright} alt="chevronright" />
                                      </div>
                                  </div>

                                  <div className="AritstHome_Rh_btm_topcard_item_btm">
                                      <div className='AritstHome_Rh_btm_topcard_item_btm_fptextbox'>
                                         <div className='AritstHome_Rh_btm_topcard_item_btm_fptextbox_container'>
                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">
                                               Lorem ipsum dolor sit amet
                                            </div>

                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">
                                            2hrs ago
                                            </div>
                                         </div>

                                         <div className='AritstHome_Rh_btm_topcard_item_btm_fptextbox_container'>
                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">
                                               Lorem ipsum dolor sit amet
                                            </div>

                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">
                                            2hrs ago
                                            </div>
                                         </div>

                                         <div className='AritstHome_Rh_btm_topcard_item_btm_fptextbox_container'>
                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">
                                               Lorem ipsum dolor sit amet
                                            </div>

                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">
                                            2hrs ago
                                            </div>
                                         </div>

                                         <div className='AritstHome_Rh_btm_topcard_item_btm_fptextbox_container'>
                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">
                                               Lorem ipsum dolor sit amet
                                            </div>

                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">
                                            2hrs ago
                                            </div>
                                         </div>

                                         <div className='AritstHome_Rh_btm_topcard_item_btm_fptextbox_container'>
                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">
                                               Lorem ipsum dolor sit amet
                                            </div>

                                            <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">
                                            2hrs ago
                                            </div>
                                         </div>
                                      </div>
                                  </div>
                              </div>
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