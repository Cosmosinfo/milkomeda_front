import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistSchedule.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import chevronleft from '../../assets/icon/graw/chevron-left.svg'
import chevronright from '../../assets/icon/graw/chevron-right.svg'
// import { ResponsiveCalendar } from 'react-responsive-calendar'
// import Calendar from 'react-calendar';
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function ArtistSchedule() {

    const { t } = useTranslation();

    return (
        <>
            <Topbar />
            <div className='ArtistSchedule'>
                <div className='ArtistSchedule_Wrapper'>
                    <ArtistInfoCard />


                    <div className='ArtistSchedule_Rh'>
                        <div className='ArtistSchedule_Rh_Memu'>
                            <ul className='ArtistSchedule_Rh_MemuBox'>

                                <Link to="/artisthome" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>{t("artisttop_home")}</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artistnotice" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>{t("artisttop_notice")}</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artiststage" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>{t("artisttop_stage")}</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artistschedule" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxTextSchedule'>{t("artisttop_sche")}</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artiststore" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>{t("artisttop_store")}</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artistpost" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>{t("artisttop_post")}</li>
                                </Link>

                            </ul>
                        </div>


                        <div className='ArtistSchedule_Rh_btm'>


                            <div className='ArtistSchedule_Rh_btm_Schedulelf'>

                                <div className="ArtistSchedule_Rh_btm_Schedulelf_top">
                                    <div className="ArtistSchedule_Rh_btm_Schedulelf_top_text">
                                        2022. 08
                                    </div>


                                    <div className="ArtistSchedule_Rh_btm_Schedulelf_top_btm">
                                        <img src={chevronleft} alt="chevronleft" />
                                        <img src={chevronright} alt="chevronright" />
                                    </div>
                                </div>

                                <div className="ArtistSchedule_Rh_btm_Schedulelf_btm">
                                    <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_date">
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_sun")}</span>
                                        </div>
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_mon")}</span>
                                        </div>
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_tue")}</span>
                                        </div>
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_wed")}</span>
                                        </div>
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_thu")}</span>
                                        </div>
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_fri")}</span>
                                        </div>
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_dateBox">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">{t("artistsch_sat")}</span>
                                        </div>







                                    </div>

                                    <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_hr"></div>

                                    <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_container">
                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num">


                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >7</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >14</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >21</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text_pink" >28</span>

                                        </div>

                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num1">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >1</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >8</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >15</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >22</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >29</span>


                                        </div>

                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num1">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >2</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >9</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >16</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >23</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >30</span>

                                        </div>

                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num1">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text_pink" >3</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >10</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >17</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >24</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text_pink" >31</span>

                                        </div>

                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num2">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >4</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >11</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >18</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >25</span>



                                        </div>

                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num2">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >5</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >12</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >19</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >26</span>


                                        </div>

                                        <div className="ArtistSchedule_Rh_btm_Schedulelf_btm_num2">
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text_pink" >6</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >13</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >20</span>
                                            <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_num_text" >27</span>


                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div className='ArtistSchedule_Rh_btm_ScheduleRh'>

                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container'>
                                    <span className='ArtistSchedule_Rh_btm_ScheduleRh_container_text'>{t("artisthome_us")}</span>

                                    {/* 스케줄 박스 */}

                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_containerbox'>
                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>3</div>
                                                    <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>수</spen>
                                                </div>

                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                        {t("artistsch_title")}
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90{t("artistsch_min")})&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        &nbsp;
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        {t("artistsch_location")}
                                                    </spen>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>3</div>
                                                    <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>수</spen>
                                                </div>

                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                        {t("artistsch_title")}
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90{t("artistsch_min")})
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        {t("artistsch_location")}
                                                    </spen>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>6</div>
                                                    <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>토</spen>
                                                </div>

                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                        {t("artistsch_title")}
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90{t("artistsch_min")})
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        {t("artistsch_location")}
                                                    </spen>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>28</div>
                                                    <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>월</spen>
                                                </div>

                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                        {t("artistsch_title")}
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90{t("artistsch_min")})
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        {t("artistsch_location")}
                                                    </spen>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>30</div>
                                                    <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>수</spen>
                                                </div>

                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                        {t("artistsch_title")}
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90{t("artistsch_min")})
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        {t("artistsch_location")}
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
            </div>


        </>
    )
}

export default ArtistSchedule