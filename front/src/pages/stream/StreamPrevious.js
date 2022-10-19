import React from 'react'
import "../../assets/css/Stream/StreamPrevious.css"
import filter from '../../assets/icon/graw/filter.svg'
import StageCard from '../../components/StageCard/StageCard';
import { Link } from "react-router-dom";

function StreamPrevious() {
    return (
        <>
            <div className="StreamPre">
                <div className="StreamPre_Wrapper">



                    <div className="StreamPre_Top">

                        <ul className='StreamPre_Top_lf'>
                            <Link to="/stream" className="link">
                                <li className="StreamPre_Stage"><span className="StreamPre_Live">라이브</span>&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streamup" className="Stream_link">
                                <li className="StreamPre_LiveStage_us">다가오는&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streampv" className="Stream_link">
                                <li className="StreamPre_LiveStage_ps">지난&nbsp;스테이지</li>
                            </Link>



                        </ul>
                        <div className='StreamPre_Top_Rh'>
                            <div className="Stream_LiveStage_filter">
                                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                                <div className='Stream_LiveStage_filter_text'>
                                    정렬
                                </div>

                            </div>
                        </div>



                    </div>


                    <div className='StreamPre_btm'>
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />
                    </div>

                    {/* <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamPre_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div> */}






                </div>
            </div>
        </>
    )
}

export default StreamPrevious