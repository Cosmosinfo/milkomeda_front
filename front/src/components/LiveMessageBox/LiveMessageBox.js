import React from 'react'
import './LiveMessageBox.css'

function LiveMessageBox() {
  return (
    <>

                            <div className='StreamLive_Right_btm'>
                                <div className='StreamLive_ChatBox'>
                                    <div className='StreamLive_ChatBox_UserName'>
                                        <div className="StreamLive_ChatBox_UserName_img">

                                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="StreamLive_UserName_img" />
                                            
                                        </div>
                                        <div className="StreamLive_ChatBox_UserName_text">User Name</div>
                                        <div className="StreamLive_ChatBox_time_text">17:00</div>
                                    </div>  

                                    <div className='StreamLive_ChatBox_chatContainer'>
                                    <div className='StreamLive_ChatBox_chatContainer_text'>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit

                                    </div>
                                    </div>
                                                                
                                </div>
                           </div>
    
    </>
  )
}

export default LiveMessageBox