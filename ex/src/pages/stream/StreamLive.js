import React from 'react'
import { Link } from "react-router-dom";
    import "../../assets/css/Stream/StreamLive.css"

function StreamLive() {
    return (
        <>
            <div className="StreamLive">
                <div className="StreamLive_Wrapper">
                    <div className="StreamLive_left">
                        {/* Streaming 라이브 뷰 */}
                        <div className="StreamLive_LiveView">
                            Live
                        </div>

                        {/* Streaming 타이틀 및 내용 */}
                        <div className="StreamLive_LiveDetails">

                            {/* Streaming 타이틀 */}
                            <div className="StreamLive_Title">
                                    <div className="StreamLive_Title_text">
                                        Title
                                    </div>
                            </div>

                            {/* Streaming 상세내용 */}
                            <div className="StreamLive_content">
                               <div className="StreamLive_Content_Info">

                               </div>

                               {/* <div className="StreamLive_Content_Details">

                               </div> */}
                            </div>
                        </div>

                        
                    </div>

                    <div className="StreamLive_Right">
                        live chat
                    </div>
                </div>
            </div>
        </>
    )
}

export default StreamLive