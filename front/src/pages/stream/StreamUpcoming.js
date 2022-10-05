import React from 'react'
import "../../assets/css/Stream/StreamUpcoming.css"
import filter from '../../assets/icon/graw/filter.svg'
import StageCard from '../../components/StageCard/StageCard';
import { Link } from "react-router-dom";

function StreamUpcoming() {
    return (
        <>
            <div className="StreamUp">
                <div className="StreamUp_Wrapper">



                    <div className="StreamUp_Top">

                        <ul className='StreamUp_Top_lf'>

                            <Link to="/stream" className="link">
                                <li className="StreamUp_Stage"><span className="StreamUp_Live">라이브</span>&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streamup" className="Stream_link">
                                <li className="StreamUp_LiveStage_us">다가오는&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streampv" className="Stream_link">
                                <li className="StreamUp_LiveStage_ps">지난&nbsp;스테이지</li>
                            </Link>

                        </ul>
                        <div className='StreamUp_Top_Rh'>
                            <div className="Stream_LiveStage_filter">
                                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                                <div className='Stream_LiveStage_filter_text'>
                                    Sort
                                </div>

                            </div>
                        </div>



                    </div>


                    <div className='StreamUp_btm'>
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

                    {/* <div className="StreamUp_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamUp_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamUp_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamUp_LiveStage_Container">
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

export default StreamUpcoming