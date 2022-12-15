import React, { useState, useEffect } from "react";
import LiveMessageBox from "../LiveMessageBox/LiveMessageBox";
// import Gift from "../../assets/icon/graw/gift.svg";
// import Smile from "../../assets/icon/graw/smile.svg";
import Send from "../../assets/icon/ping/send.svg";
import "./StreamChatBox.css";
import { useTranslation } from "react-i18next";
const webSocket = new WebSocket("ws://54.215.251.144:9999/MilcomedaSocket?roomId=0001,userId=test1");
webSocket.onopen = function (message) {
  // 콘솔 텍스트에 메시지를 출력한다.
  console.log("onopen:", message);
};

// const newArr = [];


function StreamChatBox() {
  // const state = {
  //   arr : newArr
  // }
  // 다국어
  const { t } = useTranslation();
  const data = [t("streamcb_live"), t("streamcb_comment")];
  const [btnActive, setBtnActive] = useState("");
  const [newArr, setArr] = useState([
    {socketMsg:'환영합니다.',},
   ]);
  const [text, setText] = React.useState("");
  // const [msg, setMsg] = useState([]);
  const onChange = (e) => setText(e.target.value);

  const [numberIncrease, setNumber] = useState(newArr.length);
  
  useEffect(() => {
    console.log("component did mount with useEffect!");
  }, [numberIncrease]);

  /// WebSocket 서버로 부터 메시지가 오면 호출되는 함수
  webSocket.onmessage = function (message) {
    // 콘솔 텍스트에 메시지를 출력한다.
    // const myObj = {name: "John", age: 31, city: "New York"};
    // const myJSON = JSON.stringify(message.data);
    // console.log("onmessage:", newValue);

    const newValue = JSON.parse(message.data, reviver);

    console.log("onmessage1:", newValue);
    // setMsg(newValue.socketMsg);
    // newArr.push(newValue);
    // setArr(newArr.push(newValue));
    newArr.push(newValue);
    setNumber(newArr.length);
    console.log('NewArr',newArr)
  };
  // Send 버튼을 누르면 호출되는 함수
  function sendMessage() {
    // 유저명 텍스트 박스 오브젝트를 취득
    // var user = document.getElementById("user");
    // // 송신 메시지를 작성하는 텍스트 박스 오브젝트를 취득
    // var message = document.getElementById("textMessage");
    // // 콘솔 텍스트에 메시지를 출력한다.
    // messageTextArea.value += user.value + "(me) => " + message.value + "\n";
    // WebSocket 서버에 메시지를 전송(형식 「{{유저명}}메시지」)
    var params = {
      socketMsg: text,
    };
    const myJSON = JSON.stringify(params);
    webSocket.send(myJSON);
    console.log('text',text)
    setText("")
    // 송신 메시지를 작성한 텍스트 박스를 초기화한다.
    // message.value = "";
  }

  // WebSocket 서버와 접속이 끊기면 호출되는 함수
  webSocket.onclose = function (message) {
    // 콘솔 텍스트에 메시지를 출력한다.
    // console.log("onclose:", message);
  };
  // WebSocket 서버와 통신 중에 에러가 발생하면 요청되는 함수
  webSocket.onerror = function (message) {
    // 콘솔 텍스트에 메시지를 출력한다.
    // console.log("onerror:", message);
  };
  //stringfy converts
  function reviver(key, value) {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      sendMessage()
    }
  }

  return (
    <>
      <div className="StreamChatBox_Right_Container">
        <div className="StreamChatBox_Right_topbox">
          <div className="StreamChatBox_Right_topbox_container">
            <div className="StreamChatBox_Right_flexbox">
              <div className="StreamChatBox_Right_top">
                <div className="StreamChatBox_ChatBtn">
                  <div className="StreamChatBox_ChatBtn_LiveChat">
                    {data.map((item, idx) => {
                      return (
                        <>
                          <button
                            value={idx}
                            // eslint-disable-next-line
                            className={"StreamChatBox_ChatBtn_text" + (idx == btnActive ? " active" : "")}
                            onClick={toggleActive}
                          >
                            {item}
                          </button>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="StreamChatBox_Right_middle">
                {newArr !== undefined ? newArr.map((msg, index) => (
                  <LiveMessageBox key={index} msg={msg.socketMsg} />
                )): ''}
              </div>
            </div>
          </div>
        </div>
        <div className="StreamChatBox_Right_btmbox">
          <div className="StreamChatBox_MessageBox">
            <div className="StreamChatBox_MessageBox_textContainer">
              <input className="StreamChatBox_MessageBox_text" onChange={(e) => onChange(e)} value={text} onKeyPress={onKeyPress}/>
              <div className="StreamChatBox_MessageBox_IconContainer">
                {/* <img className="StreamChatBox_MessageBox_IconContainer_Icon" src={Gift} alt="Share" />
                                <img className="StreamChatBox_MessageBox_IconContainer_Icon" src={Smile} alt="Share" /> */}
                <img className="StreamChatBox_MessageBox_IconContainer_Icon" src={Send} alt="" onClick={sendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StreamChatBox;
