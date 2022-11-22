import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStage.css'
import StageCard from '../../components/StageCard/StageCard';
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function ArtistStage() {

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
                  <li className='ArtistStage_Rh_MemuBoxTextStage'>{t("artisttop_stage")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artistschedule" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_sche")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artiststore" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_store")}</li>
                </Link>
                <div className='ArtistStage_Rh_MemuBox_Line'></div>
                <Link to="/artistpost" className="link">
                  <li className='ArtistStage_Rh_MemuBoxText'>{t("artisttop_post")}</li>
                </Link>

              </ul>
            </div>


            <div className='ArtistStage_Rh_btm'>
              <div className="ArtistStage_Rh_btm_Top">

                <ul className='ArtistStage_Rh_btm_Top_lf'>

                  <Link to="/artiststage" className="link">
                    <li className="ArtistStage_Rh_btm_Stage"><span className="ArtistStage_Rh_btm_Stage_live">{t("home_live")}</span> {t("home_stage")}</li>
                  </Link>

                  <Link to="/artiststageus" className="link">
                    <li className="ArtistStage_Rh_btm_LiveStage_us">{t("stream_up")}</li>
                  </Link>
                  <Link to="/artiststageps" className="link">
                    <li className="ArtistStage_Rh_btm_LiveStage_ps">{t("stream_pre")}</li>
                  </Link>





                </ul>

              </div>



              <div className='ArtistStage_Rh_btm_btm'>
                <StageCard />

                <StageCard />

                <StageCard />



              </div>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default ArtistStage