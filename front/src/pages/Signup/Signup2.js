import React, { useState } from "react";
import "./Signup2.css";
import { Link } from "react-router-dom";
import pan from "../../assets/icon/signup/pan.svg";
import artist from "../../assets/icon/signup/artist.svg";
import Topbar2 from "../../components/topbar/Topbar2";

import { useTranslation } from "react-i18next";

function Signup2() {
  const { t } = useTranslation();

  const data = [
    <div className="Signup2_ItemRight_middle_ItemBox_wrapper">
      <div className="Signup2_ItemRight_middle_user_Iconbox">
        <img className="Signup2_ItemRight_middle_user_Icon" src={pan} alt="pan" />
      </div>
      <div className="Signup2_ItemRight_middle_userTitle">{t("signup2_user")}</div>
      <div className="Signup2_ItemRight_middle_userDesBox">
        <span className="Signup2_ItemRight_middle_userDescip">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      <div className="Signup2_ItemRight_middle_checkBox">
        <div className="Signup2_ItemRight_middle_check">
          <div className="Signup2_ItemRight_middle_checkinner"></div>
        </div>
      </div>
    </div>,
    <div className="Signup2_ItemRight_middle_ItemBox_wrapper">
      <div className="Signup2_ItemRight_middle_user_Iconbox">
        <img className="Signup2_ItemRight_middle_user_Icon" src={artist} alt="artist" />
      </div>
      <div className="Signup2_ItemRight_middle_userTitle">{t("signup2_artist")}</div>

      <div className="Signup2_ItemRight_middle_userDesBox">
        <span className="Signup2_ItemRight_middle_userDescip">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </div>
      <div className="Signup2_ItemRight_middle_checkBox">
        <div className="Signup2_ItemRight_middle_check">
          <div className="Signup2_ItemRight_middle_checkinner"></div>
        </div>
      </div>
    </div>,
  ];

  const [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <>
      <Topbar2 />
      <div className="Signup2">
        <div className="Signup2_Wrapper">
          <div className="Signup2_Container">
            <div className="Signup2_ItemLeft">
              <div className="Signup2_ItemLeft_imgbox">
                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup2_ItemLeft_img" alt="" />
              </div>
            </div>
            <div className="Signup2_ItemRight">
              <div className="Signup2_ItemRight_top">
                <span className="Signup2_ItemRight_top_title_text">{t("signup2_type")}</span>
                <span className="Signup2_ItemRight_top_subtitle_text">{t("signup2_typedes")}</span>
              </div>
              <div className="Signup2_ItemRight_middle">
                {data.map((item, idx) => {
                  return (
                    <>
                      <div>
                        <button
                          value={idx}
                          // eslint-disable-next-line
                          className={"Signup2_ItemRight_middle_ItemBox " + (idx == btnActive ? " active" : "")}
                          onClick={toggleActive}
                        >
                          {item}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="Signu2p_ItemRight_btm_BtnBox">
                <Link to="/signup" className="link">
                  <div className="Signup2_ItemRight_btm_BackBtn">
                    <span className="Signup2_ItemRight_btm_Btn_text">{t("signup2_back")}</span>
                  </div>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <div className="Signup2_ItemRight_btm_NextBtn">
                    <span className="Signup2_ItemRight_btm_Btn_text">Confirm</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup2;
