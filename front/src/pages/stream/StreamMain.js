import React from 'react'
import "../../assets/css/Stream/StreamMain.css"
import filter from '../../assets/icon/graw/filter.svg'
import StageCard from '../../components/StageCard/StageCard';
import { Link } from "react-router-dom";

function StreamMain() {
    return (
        <>
            <div className="StreamMain">
                <div className="StreamMain_Wrapper">

                    

                    <div className="StreamMain_Top">

                        <ul className='StreamMain_Top_lf'>

                            <Link to="/stream" className="link">
                                <li className="StreamMain_Stage"><span className="StreamMain_Live">라이브</span>&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streamup" className="Stream_link">
                                <li className="StreamMain_LiveStage_us">다가오는&nbsp;스테이지</li>
                            </Link>

                            <Link to="/streampv" className="Stream_link">
                                <li className="StreamMain_LiveStage_ps">지난&nbsp;스테이지</li>
                            </Link>

                        </ul>
                        <div className='StreamMain_Top_Rh'>
                            <div className="Stream_LiveStage_filter">
                                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                                    <div className='Stream_LiveStage_filter_text'>
                                        Sort
                                    </div>
                                    
                            </div>
                        </div>
                       
                        

                    </div>


                    <div className='StreamMain_btm'>
                        
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

                   

                   

                    

                    
                </div>
            </div>

            
        </>
    )
}

export default StreamMain