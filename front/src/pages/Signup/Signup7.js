import React from 'react'
import './Signup7.css'
import { Link } from "react-router-dom";
import cursor from '../../assets/icon/signup/cursorW.svg'
import user from '../../assets/icon/signup/userW.svg'
import creditcard from '../../assets/icon/signup/credit-cardW.svg'
import shield from '../../assets/icon/signup/shield2.svg'
import Topbar2 from '../../components/topbar/Topbar2'

import { useTranslation } from "react-i18next";



function Signup7() {


    const { t } = useTranslation();

    return (
        <>
            < Topbar2 />
            <div className='Signup7'>
                <div className='Signup7_Wrapper'>
                    <div className='Signup7_Container'>
                        <div className='Signup7_ItemLeft'>
                            <div className='Signup7_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup7_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Signup7_ItemRight">
                            <div className="Signup7_ItemRight_top">

                                <span className="Signup7_ItemRight_top_title_text">{t("signup_4")}</span>



                            </div>

                            <div className="Signup7_ItemRight_middle">

                                <div className="Signup7_ItemRight_middle_signpro">

                                    <div className="Signup7_ItemRight_middle_signpro_IconContainer_hr"></div>


                                    <div className="Signup7_ItemRight_middle_signpro_IconContainer">
                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup7_ItemRight_middle_signpro_IconContainer_Icon" src={cursor} alt="cursor" />
                                        </div>

                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup7_ItemRight_middle_signpro_IconContainer_Icon" src={user} alt="user" />
                                        </div>

                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup7_ItemRight_middle_signpro_IconContainer_Icon" src={creditcard} alt="creditcard" />
                                        </div>

                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_box">
                                            <img className="Signup7_ItemRight_middle_signpro_IconContainer_Icon" src={shield} alt="shield" />
                                        </div>


                                    </div>
                                    <div className="Signup7_ItemRight_middle_signpro_IconContainer_textBox">
                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_1")}</span>
                                        </div>

                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_2")}</span>
                                        </div>

                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_3")}</span>
                                        </div>

                                        <div className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup7_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_4")}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="Signup7_ItemRight_middle_TextBox">
                                    <span className="Signup7_ItemRight_middle_TextBox_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                </div>




                            </div>

                            <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup6" className="link">
                                    <div className="Signup2_ItemRight_btm_BackBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup3_back")}</span>

                                    </div>
                                </Link>
                                <Link to="/" className="link">
                                    <div className="Signup2_ItemRight_btm_NextBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup7_1")}</span>

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

export default Signup7