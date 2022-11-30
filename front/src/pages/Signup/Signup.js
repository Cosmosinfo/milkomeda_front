import React from 'react'
import './Signup.css'
import { Link } from "react-router-dom";
import google from '../../assets/icon/social/google.svg'
import apple from '../../assets/icon/social/apple.svg'
import kakao from '../../assets/icon/social/kakao.svg'
import naver from '../../assets/icon/social/naver.svg'
import Topbar2 from '../../components/topbar/Topbar2'

import { useTranslation } from "react-i18next";

function Signup() {

    const { t } = useTranslation();

    return (
        <>
            < Topbar2 />
            <div className='Signup'>
                <div className='Signup_Wrapper'>
                    <div className='Signup_Container'>
                        <div className='Signup_ItemLeft'>
                            <div className='Signup_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Signup_ItemRight">
                            <div className="Signup_ItemRight_top">

                                <span className="Signup_ItemRight_top_title_text">{t("signup_signup")}</span>

                            </div>

                            <div className="Signup_ItemRight_btm">
                                <div className="Signup_ItemRight_btm_google">
                                    <div className="Signup_ItemRight_btm_Itembox">
                                        <div className="Signup_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={google} alt="google" />
                                        </div>
                                        <div className="Signup_ItemRight_btm_textbox">
                                            <span className="Signup_ItemRight_btm_text">{t("signup_google")}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="Signup_ItemRight_btm_apple">
                                    <div className="Signup_ItemRight_btm_Itembox">
                                        <div className="Signup_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={apple} alt="apple" />
                                        </div>
                                        <div className="Signup_ItemRight_btm_textbox">
                                            <span className="Signup_ItemRight_btm_text">{t("signup_apple")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="Signup_ItemRight_btm_kakao">
                                    <div className="Signup_ItemRight_btm_Itembox">
                                        <div className="Signup_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={kakao} alt="kakao" />
                                        </div>

                                        <div className="Signup_ItemRight_btm_textbox">
                                            <span className="Signup_ItemRight_btm_text_kakao">{t("signup_kakao")}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="Signup_ItemRight_btm_Naver">
                                    <div className="Signup_ItemRight_btm_Itembox">
                                        <div className="Signup_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={naver} alt="naver" />
                                        </div>
                                        <div className="Signup_ItemRight_btm_textbox">
                                            <span className="Signup_ItemRight_btm_text_naver">{t("signup_naver")}</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="Signup_ItemRight_btm_orBox">
                                    <div className="Signup_ItemRight_btm_orBox_hrlf"></div>
                                    <div className="Signup_ItemRight_btm_orBox_hrmd">or</div>
                                    <div className="Signup_ItemRight_btm_orBox_hrrh"></div>
                                </div>

                                <div className="Signup_ItemRight_btm_Email">
                                    <span className="Signup_ItemRight_btm_Email_text">{t("signup_email")}</span>
                                </div>

                                <div className="Signup_ItemRight_btm_usernameBox">
                                    <div className="Signup_ItemRight_btm_usernameBox_container">
                                        <span className="Signup_ItemRight_btm_usernameBox_title">{t("signup_input1")}</span>
                                        <div className="Signup_ItemRight_btm_usernameBox_Input">
                                            <input className="Signup_username_input" type="text" placeholder="" name="username" />
                                        </div>
                                    </div>

                                    <div className="Signup_ItemRight_btm_usernameBox_container">
                                        <span className="Signup_ItemRight_btm_usernameCheckBox_title">{t("signup_input2")}</span>
                                        <div className="Signup_ItemRight_btm_usernameCheckBox__Input">
                                            <input className="Signup_username_input" type="text" placeholder="" name="username" />
                                        </div>
                                    </div>




                                </div>

                                <div className="Signup_ItemRight_btm_passwordBox">
                                    <span className="Signup_ItemRight_btm_passwordBox_title">{t("signup_input3")}</span>
                                    <div className="Signup_ItemRight_btm_passwordBox_Input">
                                        <input className="password_input" type="text" placeholder="" name="password" />
                                    </div>







                                </div>
                                <Link to="/signup2" className="link">
                                    <div className="Signup_ItemRight_btm_NextBox">
                                        <div className="Signup_ItemRight_btm_NextBtn">

                                            <span className="Signup_ItemRight_btm_NextBtn_text">{t("signup_next")}</span>

                                        </div>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signup