import React from 'react'
import { Link } from "react-router-dom";
import UpcomingStage from "../../components/MainPage/UpcomingStage/UpcomingStage"
import LiveStage from "../../components/MainPage/LiveStage/LiveStage";
import filter from '../../assets/icon//graw/filter.svg'
import "../../assets/css/Stream/StreamMain.css"

function StreamMain() {
    return (
        <>
<div className="StreamMain">

    <div className="StreamLiveStage">
        <span className="StreamLive">Live</span>&nbsp;
        <span className="StreamStage">Stage</span>

        <span className="StreamStageUS">Upcoming Stage</span>
        <span className="StreamStagePS">Previous Stage</span>

          
              <div className="Streamfilter">
                <img className="StreamIcon" src={filter} alt="filter" />
                Sort
              </div>
              
          
    </div>

    <div className="StageItem">

   <LiveStage/>

    </div>

    <div className="StageItem">

   <LiveStage/>

    </div>

    <div className="StageItem">

   <LiveStage/>

    </div>

    <div className="StageItem">

   <LiveStage/>

    </div>

</div>

       
        
        </>
    )
}

export default StreamMain