import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistStageus.css'
import StageCard from '../../components/StageCard/StageCard';
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function ArtistStageus() {

  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <div className='ArtistStageus'>
        <div className='ArtistStageus_Wrapper'>
          <ArtistInfoCard />


          <div className='ArtistStageus_Rh'>
            <div className='ArtistStageus_Rh_Memu'>
              <ul className='ArtistStageus_Rh_MemuBox'>

                <Link to="/artisthome" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>{t("artisttop_home")}</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artistnotice" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>{t("artisttop_notice")}</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artiststage" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxTextStage'>{t("artisttop_stage")}</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artistschedule" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>{t("artisttop_sche")}</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artiststore" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>{t("artisttop_store")}</li>
                </Link>
                <div className='ArtistStageus_Rh_MemuBox_Line'></div>
                <Link to="/artistpost" className="link">
                  <li className='ArtistStageus_Rh_MemuBoxText'>{t("artisttop_post")}</li>
                </Link>

              </ul>
            </div>


            <div className='ArtistStageus_Rh_btm'>
              <div className="ArtistStageus_Rh_btm_Top">

                <ul className='ArtistStageus_Rh_btm_Top_lf'>

                  <Link to="/artiststage" className="link">
                    <li className="ArtistStageus_Rh_btm_Stage"><span className="ArtistStageus_Rh_btm_Stage_live">{t("stream_live")}</span> {t("stream_stage")}</li>
                  </Link>

                  <Link to="/artiststageus" className="link">
                    <li className="ArtistStageus_Rh_btm_LiveStage_us">{t("stream_up")}</li>
                  </Link>
                  <Link to="/artiststageps" className="link">
                    <li className="ArtistStageus_Rh_btm_LiveStage_ps">{t("stream_pre")}</li>
                  </Link>



                </ul>

              </div>



              <div className='ArtistStageus_Rh_btm_btm'>
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

export default ArtistStageus