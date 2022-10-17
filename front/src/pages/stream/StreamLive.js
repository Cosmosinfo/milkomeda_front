import React from 'react'
import { Link } from "react-router-dom";
import Share from '../../assets/icon/graw/share-2.svg'
import Report from '../../assets/icon/graw/alert-triangle.svg'
import "../../assets/css/Stream/StreamLive.css"
// import Gift from '../../assets/icon/graw/gift.svg'
// import Smile from '../../assets/icon/graw/smile.svg'
// import Send from '../../assets/icon/ping/send.svg'
// import LiveMessageBox from '../../components/LiveMessageBox/LiveMessageBox'
import ReactPlayer from 'react-player'
import StreamChatBox from '../../components/StreamLiveChat/StreamChatBox'

function StreamLive() {
    // function resize(obj) {
    //     obj.style.height = "1px";
    //     obj.style.height = (12+obj.scrollHeight)+"px";
    // }



    return (
        <>
            <div className="StreamLive">
                <div className="StreamLive_Wrapper">
                    <div className="StreamLive_Wrapper_container">
                        <div className="StreamLive_left">
                            {/* Streaming 라이브 뷰 */}
                            <div className="StreamLive_LiveView">
                                <ReactPlayer
                                    className='player'
                                    url='https:www.youtube.com/watch?v=R3b4gX7mA78'
                                    width='100%'
                                    height='100%'
                                    playing={true}
                                    muted={true}
                                    controls={true}
                                />

                            </div>

                            {/* Streaming 타이틀 및 내용 */}
                            <div className="StreamLive_LiveDetails">

                                {/* Streaming 타이틀 */}
                                <div className="StreamLive_Title">

                                    <span className='StreamLive_Title_text'>
                                        러블레스(Lubless) X 투영(To.young) - I've gotta feelin' like (Lyric video)
                                    </span>




                                    <div className='StreamLive_Title_right'>
                                        <div className="StreamLive_Title_right_Share">
                                            <img className="StreamLive_Title_right_ShareIcon" src={Share} alt="Share" />
                                            공유
                                        </div>

                                        <div className="StreamLive_Title_right_Report">
                                            <img className="StreamLive_Title_right_ReportIcon" src={Report} alt="Report" />
                                            신고
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

                                                    <span className="StreamLive_address_Container_Namebox_Location">공연 장소</span>

                                                </div>
                                                <div className="StreamLive_address_Container_Namebox_LocationAddr">

                                                    <span className="StreamLive_address_Container_Namebox_LocationAddr_text">서울 마포구 잔다리로 32 서문빌딩 지하1층(왓챠홀)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Streaming 날짜 */}
                                    <div className='StreamLive_Content_Info_Date'>
                                        <div className='StreamLive_Content_Info_Date_textBox'>
                                            <span className="StreamLive_Content_Info_Date_textBox_text">날짜 / 시간</span>
                                            <span className="StreamLive_Content_Info_year_textBox_text">2022.12.05.Mon<br />18:00~19:00(KST/90mins)</span>
                                        </div>
                                    </div>
                                    {/* Streaming 아티스트 이름 */}
                                    <div className='StreamLive_Content_Info_ArtistName'>

                                        <div className='StreamLive_Content_Info_ArtistName_top'>
                                            <Link to="/artisthome" className="link">
                                                <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />

                                                    <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                                        <span className="StreamLive_Content_Info_ArtistName_contanier_text">Lubless</span>
                                                    </div>


                                                </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                                <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />

                                                    <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                                        <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                                                    </div>


                                                </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                                <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />

                                                    <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                                        <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                                                    </div>


                                                </div>
                                            </Link>


                                        </div>

                                        <div className='StreamLive_Content_Info_ArtistName_top'>
                                            <Link to="/artisthome" className="link">
                                                <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />

                                                    <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                                        <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                                                    </div>


                                                </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                                <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />

                                                    <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                                        <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                                                    </div>


                                                </div>
                                            </Link>

                                            <Link to="/artisthome" className="link">
                                                <div className='StreamLive_Content_Info_ArtistName_contanierBox'>
                                                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_Artist_img" />

                                                    <div className='StreamLive_Content_Info_ArtistName_contanier_textBox'>
                                                        <span className="StreamLive_Content_Info_ArtistName_contanier_text">아티스트</span>
                                                    </div>


                                                </div>
                                            </Link>


                                        </div>





                                    </div>
                                </div>

                                <div className="StreamLive_Content_Details">
                                    <div className='StreamLive_Content_Details_text'>
                                        [I've gotta feelin' like]

                                        Dust in the air, blurred sight and it makes me feel like high

                                        music :  https://linksalad.net/US06go_3Wf

                                        PRODUCED BY BONGWOO, LENA, 투영
                                        COMPOSED BY BONGWOO, LENA, 투영
                                        LYRICS BY BONGWOO, LENA, 투영
                                        ARRANGED BY 투영

                                        VOCAL & CHORUS BY LENA
                                        DRUM, BASS, KEYBOARD, SYNTHESISER BY 투영

                                        RECORDED BY 오혜석 @MOL STUDIO
                                        MIXED BY 신유식, 투영
                                        MASTERED BY 강승희 @SONIC KOREA

                                        LYRIC VIDEO BY BONGWOO

                                        밴드 러블레스 Lubless
                                        "Lust bless you. Follow your heart."
                                        어딘가 고장 난 어른들을 위한 동화

                                        많은 성원 부탁 드립니다.
                                        감사합니다!

                                    </div>
                                </div>

                            </div>


                        </div>

                        {/* ====================  StreamLive_Right  ======================== */}
                        <div className="StreamLive_Right_Wrapper">
                            <StreamChatBox />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default StreamLive