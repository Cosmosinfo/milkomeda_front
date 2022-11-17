import React from 'react'
import { Link } from "react-router-dom";
import "../../assets/css/Artist/ArtistPost.css"
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import heart from '../../assets/icon/graw/heart.svg'
import message from '../../assets/icon/graw/message-circle.svg'
import Topbar from '../../components/topbar/Topbar'

import { useTranslation } from "react-i18next";

function ArtistPost() {

  const { t } = useTranslation();

  const placeholder = t("artistspo_holder");
  return (
    <>

      <Topbar />
      <div className='ArtistPost'>
        <div className='ArtistPost_Wrapper'>
          <ArtistInfoCard />


          <div className='ArtistPost_Rh'>
            <div className='ArtistPost_Rh_Memu'>
              <ul className='ArtistPost_Rh_MemuBox'>

                <Link to="/artisthome" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>{t("artisttop_home")}</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artistnotice" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>{t("artisttop_notice")}</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artiststage" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>{t("artisttop_stage")}</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artistschedule" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>{t("artisttop_sche")}</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artiststore" className="link">
                  <li className='ArtistPost_Rh_MemuBoxText'>{t("artisttop_store")}</li>
                </Link>
                <div className='ArtistPost_Rh_MemuBox_Line'></div>
                <Link to="/artistpost" className="link">
                  <li className='ArtistPost_Rh_MemuBoxTextPost'>{t("artisttop_post")}</li>
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
                    <input className="ArtistPost_Rh_btm_top_itembox_lf_img_text" type="text" placeholder={placeholder} name="name" />
                    {/* <span className='ArtistPost_Rh_btm_top_itembox_lf_img_text'>메세지를 입력해주세요.</span> */}
                  </div>

                  <div className='ArtistPost_Rh_btm_top_itembox_rh'>
                    <span className='ArtistPost_Rh_btm_top_itembox_rh_text'>{t("artistspo_upload")}</span>
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
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>{t("artistnotice_name")}</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2{t("artisthome_time")}</span>
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
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>{t("artistnotice_name")}</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2{t("artisthome_time")}</span>
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
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>{t("artistnotice_name")}</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2{t("artisthome_time")}</span>
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
                        <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_artistName'>{t("artistnotice_name")}</span>

                        <div className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_btm'>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_day'>YYYY/MM/DD</span>
                          <span className='AritstHome_Rh_btm_ncitembox_left_artistbox_rh_time'>2{t("artisthome_time")}</span>
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