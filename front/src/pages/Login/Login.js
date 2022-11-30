import React from 'react'
import { Link } from "react-router-dom";
import google from '../../assets/icon/social/google.svg'
import apple from '../../assets/icon/social/apple.svg'
import kakao from '../../assets/icon/social/kakao.svg'
import naver from '../../assets/icon/social/naver.svg'
import './Login.css'
import Topbar2 from '../../components/topbar/Topbar2'


import { useTranslation } from "react-i18next";

function Login() {

    const { t } = useTranslation();

    return (
        <>
            < Topbar2 />
            <div className='Login'>
                <div className='Login_Wrapper'>
                    <div className='Login_Container'>
                        <div className='Login_ItemLeft'>
                            <div className='Login_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Login_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Login_ItemRight">
                            <div className="Login_ItemRight_top">

                                <span className="Login_ItemRight_top_title_text">{t("home_more")}</span>

                            </div>

                            <div className="Login_ItemRight_btm">
                                <div className="Login_ItemRight_btm_usernameBox">
                                    <span className="Login_ItemRight_btm_usernameBox_title">{t("login_input1")}</span>
                                    <div className="Login_ItemRight_btm_usernameBox_Input">
                                        <input className="Login_username_input" type="text" placeholder="" name="username" />
                                    </div>



                                </div>

                                <div className="Login_ItemRight_btm_passwordBox">
                                    <span className="Login_ItemRight_btm_passwordBox_title">{t("login_input2")}</span>
                                    <div className="Login_ItemRight_btm_passwordBox_Input">
                                        <input className="password_input" type="text" placeholder="" name="password" />
                                    </div>


                                    <span className="Login_ItemRight_btm_passwordBox_forget">{t("login_password")}?</span>




                                </div>

                                <div className="Login_ItemRight_btm_orBox">
                                    <div className="Login_ItemRight_btm_orBox_hrlf"></div>
                                    <div className="Login_ItemRight_btm_orBox_hrmd">or</div>
                                    <div className="Login_ItemRight_btm_orBox_hrrh"></div>
                                </div>

                                <div className="Login_ItemRight_btm_google">
                                    <div className="Login_ItemRight_btm_Itembox">
                                        <div className="Login_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={google} alt="google" />
                                        </div>
                                        <div className="Login_ItemRight_btm_textbox">
                                            <span className="Login_ItemRight_btm_text">{t("login_google")}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="Login_ItemRight_btm_apple">
                                    <div className="Login_ItemRight_btm_Itembox">
                                        <div className="Login_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={apple} alt="apple" />
                                        </div>
                                        <div className="Login_ItemRight_btm_textbox">
                                            <span className="Login_ItemRight_btm_text">{t("login_apple")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="Login_ItemRight_btm_kakao">
                                    <div className="Login_ItemRight_btm_Itembox">
                                        <div className="Login_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={kakao} alt="kakao" />
                                        </div>

                                        <div className="Login_ItemRight_btm_textbox">
                                            <span className="Login_ItemRight_btm_text_kakao">{t("login_kakao")}</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="Login_ItemRight_btm_Naver">
                                    <div className="Login_ItemRight_btm_Itembox">
                                        <div className="Login_ItemRight_btm_Iconbox">
                                            <img className="social_icon" src={naver} alt="naver" />
                                        </div>
                                        <div className="Login_ItemRight_btm_textbox">
                                            <span className="Login_ItemRight_btm_text_naver">{t("login_naver")}</span>
                                        </div>
                                    </div>


                                </div>

                                <div className="Login_ItemRight_btm_hr"></div>

                                <div className="Login_ItemRight_btm_accountbox">
                                    <span className="Login_ItemRight_btm_account_text">{t("login_account")}</span>
                                </div>
                                <Link to="/signup" className="link">
                                    <div className="Login_ItemRight_btm_milko">

                                        <span className="Login_ItemRight_btm_text_milko">{t("login_signup")}</span>

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

export default Login