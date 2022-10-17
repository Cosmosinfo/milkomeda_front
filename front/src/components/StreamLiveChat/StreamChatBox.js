import React from 'react'
import LiveMessageBox from '../LiveMessageBox/LiveMessageBox'
import Gift from '../../assets/icon/graw/gift.svg'
import Smile from '../../assets/icon/graw/smile.svg'
import Send from '../../assets/icon/ping/send.svg'
import './StreamChatBox.css'

function StreamChatBox() {
    const MIN_TEXTAREA_HEIGHT = 20;

    const textareaRef = React.useRef(null);
    const [value, setValue] = React.useState("");
    const onChange = (event) => setValue(event.target.value);

    React.useLayoutEffect(() => {
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = "20px";
        // Set height
        if (textareaRef.current.scrollHeight > 80) {
            textareaRef.current.style.height = `80px`;

        } else {
            textareaRef.current.style.height = `${Math.max(
                textareaRef.current.scrollHeight,
                MIN_TEXTAREA_HEIGHT
            )}px`;

        }

    }, [value]);


  return (



    <>
                    <div className="StreamChatBox_Right_Container">
                    <div className="StreamChatBox_Right">
                        <div className='StreamChatBox_Right_container'>





                            <div className='StreamChatBox_Right_flexbox'>
                                <div className='StreamChatBox_Right_top'>
                                    <div className='StreamChatBox_ChatBtn'>
                                        <div className='StreamChatBox_ChatBtn_LiveChat'>
                                            <div className="StreamChatBox_ChatBtn_LiveChat_text">채팅</div>
                                            <div className="StreamChatBox_ChatBtn_Comment_text">댓글</div>
                                        </div>
                                    </div>
                                </div>




                                <div className="StreamChatBox_Right_middle">

                                    <LiveMessageBox />

                                    <LiveMessageBox />

                                    <LiveMessageBox />

                                    <LiveMessageBox />

                                    <LiveMessageBox />

                                    <LiveMessageBox />















                                </div>

                            </div>







                            <div className='StreamChatBox_MessageBox'>

                                <div className='StreamChatBox_MessageBox_textContainer'>

                                    <textarea
                                        className="StreamChatBox_MessageBox_text"
                                        onChange={onChange}
                                        ref={textareaRef}
                                        style={{
                                            minHeight: MIN_TEXTAREA_HEIGHT,
                                            resize: "none",
                                            height: MIN_TEXTAREA_HEIGHT
                                        }}
                                        value={value}
                                        placeholder="메세지를 입력해주세요"
                                    />
                                    <div className="StreamChatBox_MessageBox_IconContainer">
                                        <img className="StreamChatBox_MessageBox_IconContainer_Icon" src={Gift} alt="Share" />
                                        <img className="StreamChatBox_MessageBox_IconContainer_Icon" src={Smile} alt="Share" />
                                        <img className="StreamChatBox_MessageBox_IconContainer_Icon" src={Send} alt="Share" />
                                    </div>
                                </div>
                            </div>





                        </div>

                    </div>
                    </div>

    
    </>
  )
}

export default StreamChatBox