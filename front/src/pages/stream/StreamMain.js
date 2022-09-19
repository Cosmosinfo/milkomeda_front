import React from 'react'
import "../../assets/css/Stream/StreamMain.css"
import filter from '../../assets/icon/graw/filter.svg'
import StageCard from '../../components/StageCard/StageCard';

function StreamMain() {
    return (
        <>
            <div className="StreamMain">
                <div className="StreamMain_Wrapper">

                    

                    <div className="StreamMain_Top">

                        <ul className='StreamMain_Top_lf'>

                            <li className="StreamMain_Stage"><span className="StreamMain_Live">Live</span>&nbsp;Stage</li>
                            <li className="Stream_LiveStage_us">Upcoming&nbsp;Stage</li>
                            <li className="Stream_LiveStage_ps">Previous&nbsp;Stage</li>

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

                    {/* <div className="StreamMain_LiveStage_Container">
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

                    </div> */}

                   

                    

                    
                </div>
            </div>

            
        </>
    )
}

export default StreamMain