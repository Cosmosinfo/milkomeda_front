import React from 'react'
import { Link } from "react-router-dom";
import Share from '../../assets/icon/graw/share-2.svg'
import Report from '../../assets/icon/graw/alert-triangle.svg'
import "../../assets/css/Stream/StreamLive.css"
import Gift from '../../assets/icon/graw/gift.svg'
import Smile from '../../assets/icon/graw/smile.svg'
import Send from '../../assets/icon/ping/send.svg'
import LiveMessageBox from '../../components/LiveMessageBox/LiveMessageBox'

function StreamLive() {
    return (
        <>
            <div className="StreamLive">
                <div className="StreamLive_Wrapper">
                    <div className="StreamLive_left">
                        {/* Streaming 라이브 뷰 */}
                        <div className="StreamLive_LiveView">
                            Live
                        </div>

                        {/* Streaming 타이틀 및 내용 */}
                        <div className="StreamLive_LiveDetails">

                            {/* Streaming 타이틀 */}
                            <div className="StreamLive_Title">
                                    <div className="ew">
                                        <spen className='StreamLive_Title_text'>
                                            Title
                                        </spen>

                                    </div>
                                   
                                    
                                    <div className='StreamLive_Title_right'>
                                        <div className="StreamLive_Title_right_Share">
                                             <img className="StreamLive_Title_right_ShareIcon" src={Share} alt="Share" />
                                             Share
                                        </div>

                                        <div className="StreamLive_Title_right_Report">
                                             <img className="StreamLive_Title_right_ReportIcon" src={Report} alt="Report" />
                                             Report
                                        </div>
                                        
                                    </div>
                            </div>

                            {/* Streaming 상세내용 */}
                            
                               <div className="StreamLive_Content_Info">
                                     {/* Streaming 주소 */}
                                    <div className='StreamLive_Content_Info_address'>
                                        <div className="StreamLive_address_Container">
                                            <div className="StreamLive_address_Container_left">

                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_address_img" />


                                            </div>
                                            <div className="StreamLive_address_Container_right">

                                                <div className="StreamLive_address_Container_Namebox">

                                                 <span className="StreamLive_address_Container_Namebox_Location">Location</span>

                                                </div>
                                                <div className="StreamLive_address_Container_Namebox_LocationAddr">

                                                    <span className="StreamLive_address_Container_Namebox_LocationAddr_text">Location Address</span>
                                                </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* Streaming 날짜 */}
                                    <div className='StreamLive_Content_Info_Date'>
                                        <div className='StreamLive_Content_Info_Date_textBox'>
                                            <span className="StreamLive_Content_Info_Date_textBox_text">Date / Time</span>
                                            <span className="StreamLive_Content_Info_year_textBox_text">YYYY.MM.DD.Mon<br />18:00~19:00(KST/90mins)</span>
                                        </div>
                                    </div>
                                    {/* Streaming 아티스트 이름 */}
                                    <div className='StreamLive_Content_Info_ArtistName'>

                                        <div className='StreamLive_Content_Info_ArtistName_top'>
                                            <Link to="/artisthome" className="link">
                                            <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />
                                            
                                            <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">Artist Name</span>
                                            </div>

                                            
                                            </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                            <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />
                                            
                                            <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">Artist Name</span>
                                            </div>

                                            
                                            </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                            <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />
                                            
                                            <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">Artist Name</span>
                                            </div>

                                            
                                            </div>
                                            </Link>
                                            

                                        </div>

                                        <div className='StreamLive_Content_Info_ArtistName_top'>
                                            <Link to="/artisthome" className="link">
                                            <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />
                                            
                                            <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">Artist Name</span>
                                            </div>

                                            
                                            </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                            <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />
                                            
                                            <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">Artist Name</span>
                                            </div>

                                            
                                            </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                            <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />
                                            
                                            <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                            <span className="StreamLive_Content_Info_ArtistName_contanier_text">Artist Name</span>
                                            </div>

                                            
                                            </div>
                                            </Link>
                                            

                                        </div>

                                        
                           

                                        
                                    </div>
                               </div>

                               <div className="StreamLive_Content_Details">
                                    <div className='StreamLive_Content_Details_text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br />
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br />
 dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt

                                    </div>
                               </div>
                            
                        </div>

                        
                    </div>

                    {/* ====================  StreamLive_Right  ======================== */}

                    <div className="StreamLive_Right">
                        <div className='StreamLive_Right_Wrapper'>
                            

                            

                        


                            
                           <div className='StreamLive_Right_top'>
                                <div className='StreamLive_ChatBtn'>
                                    <div className='StreamLive_ChatBtn_LiveChat'>
                                        <div className="StreamLive_ChatBtn_LiveChat_text">Live Chat</div>
                                        <div className="StreamLive_ChatBtn_Comment_text">Comment</div>   
                                    </div>
                                </div>
                           </div>
                          
                          

                           <div className="StreamLive_Right_middle">

                            <LiveMessageBox />

                            <LiveMessageBox />

                            <LiveMessageBox />

                            <LiveMessageBox />

                            <LiveMessageBox />

                            <LiveMessageBox />

                            <LiveMessageBox />

                            <LiveMessageBox />
                           

                           </div>

                            
                           
                          
                            <div className='StreamLive_MessageBox'>
                                <input className='StreamLive_MessageBox_inputbox' type='text' placeholder='text'></input>
                                <div className='StreamLive_MessageBox_textContainer'>
                                     <span className="StreamLive_MessageBox_text">Message</span>

                                     <div className="StreamLive_MessageBox_IconContainer">
                                        <img className="StreamLive_MessageBox_IconContainer_Icon" src={Gift} alt="Share" />
                                        <img className="StreamLive_MessageBox_IconContainer_Icon" src={Smile} alt="Share" />
                                        <img className="StreamLive_MessageBox_IconContainer_Icon" src={Send} alt="Share" />
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

export default StreamLive