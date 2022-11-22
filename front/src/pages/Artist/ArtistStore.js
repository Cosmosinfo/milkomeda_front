import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStore.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function ArtistStore() {

  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <div className='ArtistStage'>
        <div className='ArtistStage_Wrapper'>
          <ArtistInfoCard />


          <div className='ArtistStage_Rh'>
            <div className='ArtistStage_Rh_Memu'>
              <ul className='ArtistStage_Rh_MemuBox'>

                <Link to="/artisthome" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_home")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artistnotice" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_notice")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artiststage" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_stage")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artistschedule" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_sche")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artiststore" className="link">
                  <li className='ArtistStore_Rh_MemuBoxTextStore'>{t("artisttop_store")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artistpost" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_post")}</li>
                </Link>

              </ul>
            </div>


            <div className='ArtistStore_Rh_btm storehidden'>



              <div className='AritstHome_Rh_btm_noticecard'>
                <div className='AritstHome_Rh_btm_ncitembox storehidden'>
                  <div className='AritstHome_Rh_btm_ncitembox_left '>
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

export default ArtistStore