import React from 'react'
import { Link } from "react-router-dom";
import '../../assets/css/Artist/ArtistSchedule.css'
import ArtistInfoCard from '../../components/ArtistInfoCard/ArtistInfoCard';
import chevronleft from '../../assets/icon/graw/chevron-left.svg'
import chevronright from '../../assets/icon/graw/chevron-right.svg'

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
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>아티스트 홈</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artistnotice" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>공지사항</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artiststage" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>스테이지</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artistschedule" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxTextSchedule'>일정</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artiststore" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>스토어</li>
                                </Link>
                                <div className='ArtistSchedule_Rh_MemuBox_Line'></div>
                                <Link to="/artistpost" className="link">
                                    <li className='ArtistSchedule_Rh_MemuBoxText'>팬 포스트</li>
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
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">SUN</span>
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">MON</span>
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">TUE</span>
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">WED</span>
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">THU</span>
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">FRI</span>
                                        <span className="ArtistSchedule_Rh_btm_Schedulelf_btm_date_text">SAT</span>
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
                                    <span className='ArtistSchedule_Rh_btm_ScheduleRh_container_text'>다가오는 일정</span>

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
                                                        제목
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90분)
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        장소
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
                                                        제목
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90분)
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        장소
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
                                                        제목
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90분)
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        장소
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
                                                        제목
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90분)
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        장소
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
                                                        제목
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90분)
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        장소
                                                    </spen>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item'>
                                            <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_wrapper'>
                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_date'>
                                                    <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datebox'>31</div>
                                                    <spen className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_datetext'>수</spen>
                                                </div>

                                                <div className='ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript'>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_text">
                                                        제목
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_time">
                                                        18:00~19:30(KST/90분)
                                                    </spen>
                                                    <spen className="ArtistSchedule_Rh_btm_ScheduleRh_container_item_descript_location">
                                                        장소
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