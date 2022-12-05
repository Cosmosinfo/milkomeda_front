import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Artist/ArtistHome.css";
import ArtistInfoCard from "../../components/ArtistInfoCard/ArtistInfoCard";
import StageCard from "../../components/StageCard/StageCard";
import chevronright from "../../assets/icon/ping//chevron-right.svg";
import Topbar2 from "../../components/topbar/Topbar2";
import { useTranslation } from "react-i18next";

function ArtistHome() {
  const { t } = useTranslation();

  return (
    <>
      <Topbar2 />
      <div className="ArtistHome">
        <div className="ArtistHome_Wrapper">
          <ArtistInfoCard />
          <div className="ArtistHome_Rh">
            <div className="ArtistHome_Rh_Memu">
              <div className="ArtistHome_Rh_MemuBox">
                <Link to="/artisthome" className="link">
                  <div className="ArtistHome_Rh_MemuBoxTexthome">{t("artisttop_home")}</div>
                </Link>
                <div className="ArtistHome_Rh_MemuBox_Line"></div>
                <Link to="/artistnotice" className="link">
                  <div className="ArtistHome_Rh_MemuBoxText">{t("artisttop_notice")}</div>
                </Link>
                <div className="ArtistHome_Rh_MemuBox_Line"></div>
                <Link to="/artiststage" className="link">
                  <div className="ArtistHome_Rh_MemuBoxText">{t("artisttop_stage")}</div>
                </Link>
                <div className="ArtistHome_Rh_MemuBox_Line"></div>
                <Link to="/artistschedule" className="link">
                  <div className="ArtistHome_Rh_MemuBoxText">{t("artisttop_sche")}</div>
                </Link>
                <div className="ArtistHome_Rh_MemuBox_Line"></div>
                <Link to="/artiststore" className="link">
                  <div className="ArtistHome_Rh_MemuBoxText">{t("artisttop_store")}</div>
                </Link>
                <div className="ArtistHome_Rh_MemuBox_Line"></div>
                <Link to="/artistpost" className="link">
                  <div className="ArtistHome_Rh_MemuBoxText">{t("artisttop_post")}</div>
                </Link>
              </div>
            </div>

            <div className="AritstHome_Rh_btm">
              <div className="AritstHome_Rh_btm_topcard">
                <div className="AritstHome_Rh_btm_topcard_item">
                  <div className="AritstHome_Rh_btm_topcard_item_wrapper">
                    <div className="AritstHome_Rh_btm_topcard_item_top">
                      <span className="AritstHome_Rh_btm_topcard_item_top_text">{t("artisthome_rn")}</span>
                      <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                        <Link to="/artistnotice" className="link">
                          <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                            <span className="AritstHome_Rh_btm_topcard_item_top_moretext">{t("artisthome_more")}</span>
                            <img className="chevronright" src={chevronright} alt="chevronright" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="AritstHome_Rh_btm_topcard_item_btm">
                      <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox">
                        <spen className="AritstHome_Rh_btm_topcard_item_btm_text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.
                        </spen>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="AritstHome_Rh_btm_topcard_item">
                  <div className="AritstHome_Rh_btm_topcard_item_wrapper">
                    <div className="AritstHome_Rh_btm_topcard_item_top">
                      <span className="AritstHome_Rh_btm_topcard_item_top_text">{t("artisthome_us")}</span>
                      <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                        <Link to="/artistschedule" className="link">
                          <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                            <span className="AritstHome_Rh_btm_topcard_item_top_moretext">{t("artisthome_more")}</span>
                            <img className="chevronright" src={chevronright} alt="chevronright" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="AritstHome_Rh_btm_topcard_item_btm">
                      <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox">
                        <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh">
                            <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_top">
                              <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_lf"></div>
                              <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_text">
                                Lorem ipsum dolor sit amet
                              </div>
                            </div>

                            <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_time">YYYY/MM/DD 18:00(KST)</spen>
                          </div>
                        </div>

                        <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh">
                            <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_top">
                              <div className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_lf"></div>
                              <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_text">
                                Lorem ipsum dolor sit amet
                              </spen>
                            </div>

                            <spen className="AritstHome_Rh_btm_topcard_item_btm_ustextbox_container_rh_time">YYYY/MM/DD 18:00(KST)</spen>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="AritstHome_Rh_btm_topcard_item">
                  <div className="AritstHome_Rh_btm_topcard_item_wrapper">
                    <div className="AritstHome_Rh_btm_topcard_item_top">
                      <span className="AritstHome_Rh_btm_topcard_item_top_text">{t("artisthome_fp")}</span>
                      <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                        <Link to="/artistpost" className="link">
                          <div className="AritstHome_Rh_btm_topcard_item_top_morebox">
                            <span className="AritstHome_Rh_btm_topcard_item_top_moretext">{t("artisthome_more")}</span>
                            <img className="chevronright" src={chevronright} alt="chevronright" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="AritstHome_Rh_btm_topcard_item_btm">
                      <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox">
                        <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">Lorem ipsum dolor sit amet</div>

                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">2{t("artisthome_time")}</div>
                        </div>

                        <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">Lorem ipsum dolor sit amet</div>

                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">4{t("artisthome_time")}</div>
                        </div>

                        <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">Lorem ipsum dolor sit amet</div>

                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">6{t("artisthome_time")}</div>
                        </div>

                        <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">Lorem ipsum dolor sit amet</div>

                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">8{t("artisthome_time")}</div>
                        </div>

                        <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container">
                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_descipt">Lorem ipsum dolor sit amet</div>

                          <div className="AritstHome_Rh_btm_topcard_item_btm_fptextbox_container_time">10{t("artisthome_time")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="AritstHome_Rh_btm_hr"></div>

              <div className="AritstHome_Rh_btm_LiveStage">
                <div className="AritstHome_Rh_btm_LiveStage_Title">
                  <p className="AritstHome_Rh_btm_Stage">
                    <span className="AritstHome_Rh_btm_Live">{t("home_live")}</span> {t("home_stage")}
                  </p>
                  <span className="AritstHome_Rh_btm_Upcoming">{t("stream_up")}</span>
                </div>

                <div className="AritstHome_Rh_btm_LiveStage_Container">
                  <StageCard />

                  <StageCard />

                  <StageCard />
                </div>
              </div>

              <div className="AritstHome_Rh_btm_hr"></div>

              <div className="AritstHome_Rh_btm_LiveStage">
                <div className="AritstHome_Rh_btm_LiveStage_Title">
                  <span className="AritstHome_Rh_btm_Previous">{t("stream_pre")}</span>
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
  );
}

export default ArtistHome;
