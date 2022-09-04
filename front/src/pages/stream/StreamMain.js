import React from 'react'
import { Link } from "react-router-dom";
import "../../assets/css/Stream/StreamMain.css"
import filter from '../../assets/icon/graw/filter.svg'
import StageCard from '../../components/StageCard/StageCard';

function StreamMain() {
    return (
        <>
            <div className="StreamMain">
                <div className="StreamMain_Wrapper">
                    <div className="StreamMain_Top">
                        <div className="StreamMain_LiveStage_Title_left">
                            <span className="Live">Live</span>&nbsp;
                            <span className="Stage">Stage</span>
                        {/* 코드 리뷰 필요 */}
                            <div className="StreamMain_LiveStage_Title_middle">
                                <div className="Stream_LiveStage_us">Upcoming Stage</div>
                                <div className="Stream_LiveStage_ps">Previous Stage</div>
                            
                            </div>
                        </div>

                        <div className="Stream_LiveStage_Title_Right">
                        
                            <div className="Stream_LiveStage_filter">
                                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                                    Sort
                            </div>
                        </div>

                    </div>

                    <div className="StreamMain_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamMain_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamMain_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                    <div className="StreamMain_LiveStage_Container">
                        <StageCard />

                        <StageCard />

                        <StageCard />

                        <StageCard />

                    </div>

                   

                    

                    
                </div>
            </div>

            
        </>
    )
}

export default StreamMain