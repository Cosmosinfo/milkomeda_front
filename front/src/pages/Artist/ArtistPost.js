import React from 'react'
import { Link } from "react-router-dom";
import "../../assets/css/Artist/ArtistPost.css"
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import heart from '../../assets/icon/graw/heart.svg'
import message from '../../assets/icon/graw/message-circle.svg'


function ArtistPost() {
  return (
    <>


      <div className='ArtistPost'>
        <div className='ArtistPost_Wrapper'>
          <ArtistInfoCard />


          <div className='ArtistPost_Rh'>
            <div className='ArtistPost_Rh_Memu'>
              <ul className='ArtistPost_Rh_MemuBox'>

                <Link to="/artisthome" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>아티스트 홈</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artistnotice" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>공지사항</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artiststage" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>스테이지</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artistschedule" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>일정</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artiststore" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>스토어</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artistpost" className="link">
                  <li className='ArtistPost_Rh_MemuBoxTextPost'>팬 포스트</li>
                </Link>

              </ul>
            </div>


            <div className='ArtistPost_Rh_btm'>

              <div className='ArtistPost_Rh_btm_top'>
                <div className='ArtistPost_Rh_btm_top_itembox'>
                  <div className='ArtistPost_Rh_btm_top_itembox_lf'>
                    <div className='ArtistPost_Rh_btm_top_itembox_lf_img'>
                      <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="AritstHome_Rh_btm_ncitembox_left_artistbox_lt_img" />

                    </div>
                    <input className="ArtistPost_Rh_btm_top_itembox_lf_img_text" type="text" placeholder="메세지를 입력해주세요." name="name" />
                    {/* <span className='ArtistPost_Rh_btm_top_itembox_lf_img_text'>메세지를 입력해주세요.</span> */}
                  </div>

                  <div className='ArtistPost_Rh_btm_top_itembox_rh'>
                    <span className='ArtistPost_Rh_btm_top_itembox_rh_text'>등록</span>
                  </div>
                </div>
              </div>

              <div className='AritstHome_Rh_btm_noticecard'>
                <div className='AritstHome_Rh_btm_ncitembox'>
                  <div className='AritstHome_Rh_btm_ncitembox_left'>
                    <div className='AritstHome_Rh_btm_ncitembox_left_artistbox'>
                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_lt'>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="AritstHome_Rh_btm_ncitembox_left_artistbox_lt_img" />

                      </div>

                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh'>
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>아티스트</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2시간 전</span>
                        </div>


                      </div>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_descripbox'>
                      <span className='AritstHome_Rh_btm_ncitembox_left_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_Iconbox'>
                      <img className="AritstHome_Rh_btm_ncitembox_left_Icon" src={heart} alt="heart" />
                      0
                      <img className="AritstHome_Rh_btm_ncitembox_left_messageIcon" src={message} alt="message" />
                      0
                    </div>
                  </div>


                </div>
              </div>

              <div className='AritstHome_Rh_btm_noticecard'>
                <div className='AritstHome_Rh_btm_ncitembox'>
                  <div className='AritstHome_Rh_btm_ncitembox_left'>
                    <div className='AritstHome_Rh_btm_ncitembox_left_artistbox'>
                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_lt'>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="AritstHome_Rh_btm_ncitembox_left_artistbox_lt_img" />

                      </div>

                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh'>
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>아티스트</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2시간 전</span>
                        </div>


                      </div>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_descripbox'>
                      <span className='AritstHome_Rh_btm_ncitembox_left_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_Iconbox'>
                      <img className="AritstHome_Rh_btm_ncitembox_left_Icon" src={heart} alt="heart" />
                      0
                      <img className="AritstHome_Rh_btm_ncitembox_left_messageIcon" src={message} alt="message" />
                      0
                    </div>
                  </div>


                </div>
              </div>

              <div className='AritstHome_Rh_btm_noticecard'>
                <div className='AritstHome_Rh_btm_ncitembox'>
                  <div className='AritstHome_Rh_btm_ncitembox_left'>
                    <div className='AritstHome_Rh_btm_ncitembox_left_artistbox'>
                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_lt'>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="AritstHome_Rh_btm_ncitembox_left_artistbox_lt_img" />

                      </div>

                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh'>
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>아티스트</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2시간 전</span>
                        </div>


                      </div>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_descripbox'>
                      <span className='AritstHome_Rh_btm_ncitembox_left_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_Iconbox'>
                      <img className="AritstHome_Rh_btm_ncitembox_left_Icon" src={heart} alt="heart" />
                      0
                      <img className="AritstHome_Rh_btm_ncitembox_left_messageIcon" src={message} alt="message" />
                      0
                    </div>
                  </div>


                </div>
              </div>

              <div className='AritstHome_Rh_btm_noticecard'>
                <div className='AritstHome_Rh_btm_ncitembox'>
                  <div className='AritstHome_Rh_btm_ncitembox_left'>
                    <div className='AritstHome_Rh_btm_ncitembox_left_artistbox'>
                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_lt'>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="AritstHome_Rh_btm_ncitembox_left_artistbox_lt_img" />

                      </div>

                      <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh'>
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>아티스트</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2시간 전</span>
                        </div>


                      </div>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_descripbox'>
                      <span className='AritstHome_Rh_btm_ncitembox_left_descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</span>
                    </div>

                    <div className='AritstHome_Rh_btm_ncitembox_left_Iconbox'>
                      <img className="AritstHome_Rh_btm_ncitembox_left_Icon" src={heart} alt="heart" />
                      0
                      <img className="AritstHome_Rh_btm_ncitembox_left_messageIcon" src={message} alt="message" />
                      0
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

export default ArtistPost