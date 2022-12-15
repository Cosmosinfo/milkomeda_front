import React, { useState } from "react";
// import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import "./Setting.css";
import Topbar from "../../components/topbar/Topbar";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Setting() {
  const [checked, setChecked] = useState(false);

  const submit = async (values) => {
    const { stageTitle, stageDescription, stageLocation } = values;
    try {
      await axios.post("http://54.215.251.144:8080/api/stage/stageInsert", {
        stageId: "0001",
        stageMakeUserId: "vboi2323",
        stageTitle,
        stageDescription,
        stageLocation,
        stageTimestamp: "2022-12-15 09:00:00",
        stageArtistId: "러블레스",
        stageThumbnailImage:
          "https://velog.velcdn.com/images/jooyoung/post/b20c7042-0649-4cd8-8083-981756fb1d0d/Dark%20Blue%20and%20Green%20Bold%20Tech%20Software%20Development%20Business%20Website.png",
        stageTicketPrice: "5000",
        stageCurrent: "B",
      });
      toast.success(<h3>등록이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 1000,
      });
      setChecked(true);
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + "😭", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Topbar />
      {checked ? (
        <div className="Signup_ItemRight_btm_usernameBox">
          <div className="Signup_ItemRight_btm_usernameBox_Bigtitle">OBS Setting</div>
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <span className="Signup_ItemRight_btm_usernameBox_title">Rtmp Server : rtmp://54.215.251.144/live</span>
          </div>
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <span className="Signup_ItemRight_btm_usernameBox_title">Stream Key : 0001</span>
          </div>
          <br />
          <br />
          <br />
          <div className="Signup_ItemRight_btm_usernameBox_Bigtitle">OBS Use Template</div>
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <a href="https://obsproject.com/" target="_blank" rel="noreferrer">
              OBS 프로그램 URL
            </a>
          </div>
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <span className="Signup_ItemRight_btm_usernameBox_title">1. 위의 url로 접속해 obs 프로그램을 다운받는다.</span>
          </div>
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <span className="Signup_ItemRight_btm_usernameBox_title">2. 프로그램을 키고 설정으로 간다.</span>
          </div>
          <br />
          <img src="img/obs_setting.png" alt="" className="obs_image" />
          <br />
          <br />
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <span className="Signup_ItemRight_btm_usernameBox_title">
              3. 위와 같이 obs setting에 있는 rtmp server와 stream key를 설정한다.
            </span>
          </div>
          <div className="Signup_ItemRight_btm_usernameBox_container">
            <span className="Signup_ItemRight_btm_usernameBox_title">
              4. 모든 설정이 끝난 후 스트리밍 시작을 누르면 실시간 방송이 송출된다.
            </span>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            stageTitle: "",
            stageDescription: "",
            stageLocation: "",
          }}
          onSubmit={submit}
          validateOnMount={true}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit} className="form">
              <ToastContainer />
              <div className="Signup_ItemRight_btm_usernameBox">
                <div className="Signup_ItemRight_btm_usernameBox_Bigtitle">스테이지 등록</div>
                <div className="Signup_ItemRight_btm_usernameBox_container">
                  <span className="Signup_ItemRight_btm_usernameBox_title">공연 날짜 / 시간</span>
                  <div className="Signup_ItemRight_btm_usernameBox_Input">
                    <input className="Signup_username_input" type="text" placeholder="ex) 2022-12-13 16:42:00" />
                  </div>
                </div>
                <div className="flex">
                  <div className="inputHalf">
                    <span className="Signup_ItemRight_btm_usernameBox_title">공연 제목</span>
                    <div className="Signup_ItemRight_btm_usernameBox_Input">
                      <input
                        className="Signup_username_input"
                        type="text"
                        placeholder="ex) 러블레스 단독 공연"
                        name="stageTitle"
                        onChange={handleChange}
                        value={values.stageTitle}
                      />
                    </div>
                  </div>
                  <div className="inputHalf">
                    <span className="Signup_ItemRight_btm_usernameBox_title">공연 기획 및 주최</span>
                    <div className="Signup_ItemRight_btm_usernameBox_Input">
                      <input className="Signup_username_input" type="text" placeholder="ex ) 코스모스" />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="inputHalf">
                    <span className="Signup_ItemRight_btm_usernameBox_title">공연 장소</span>
                    <div className="Signup_ItemRight_btm_usernameBox_Input">
                      <input
                        className="Signup_username_input"
                        type="text"
                        placeholder="ex) 동호로 18길 29"
                        name="stageLocation"
                        onChange={handleChange}
                        value={values.stageLocation}
                      />
                    </div>
                  </div>
                  <div className="inputHalf">
                    <span className="Signup_ItemRight_btm_usernameBox_title">참여 아티스트</span>
                    <div className="Signup_ItemRight_btm_usernameBox_Input">
                      <input className="Signup_username_input" type="text" placeholder="" name="artist" value="러블레스" />
                    </div>
                  </div>
                </div>
                <div className="Signup_ItemRight_btm_usernameBox_container">
                  <span className="Signup_ItemRight_btm_usernameBox_title">공연 설명</span>
                  <div className="Signup_ItemRight_btm_usernameBox_Input">
                    <input
                      className="Signup_username_input"
                      type="text"
                      placeholder="ex) 러블레스 단독콘서트입니다."
                      name="stageDescription"
                      onChange={handleChange}
                      value={values.stageDescription}
                    />
                  </div>
                </div>
                <div className="Signup_ItemRight_btm_NextBox">
                  <div className="Signup_ItemRight_btm_NextBtn">
                    <button type="submit" className="Signup_ItemRight_btm_NextBtn_text">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
    </>
  );
}

export default Setting;
