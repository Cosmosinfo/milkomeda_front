import React from 'react'
import './Signup6.css'
import { Link } from "react-router-dom";
import cursor from '../../assets/icon/signup/cursorW.svg'
import user from '../../assets/icon/signup/userW.svg'
import creditcard from '../../assets/icon/signup/credit-cardP.svg'
import shield from '../../assets/icon/signup/shield 1.svg'
import Mastercard from '../../assets/icon/signup/Mastercard-Logo 1.svg'
import oksign from '../../assets/icon/signup/oksign.svg'
import keypad from '../../assets/icon/signup/keypad.svg'
import Topbar2 from '../../components/topbar/Topbar2'

import { useTranslation } from "react-i18next";


function Signup6() {

    const { t } = useTranslation();

    return (
        <>
            < Topbar2 />
            <div className='Signup6'>
                <div className='Signup6_Wrapper'>
                    <div className='Signup6_Container'>
                        <div className='Signup6_ItemLeft'>
                            <div className='Signup6_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup6_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Signup6_ItemRight">
                            <div className="Signup6_ItemRight_top">

                                <span className="Signup6_ItemRight_top_title_text">{t("signup6_1")}</span>



                            </div>

                            <div className="Signup6_ItemRight_middle">

                                <div className="Signup6_ItemRight_middle_signpro">
                                    <div className="Signup6_ItemRight_middle_signpro_hrbox">
                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_hr"></div>
                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_hr2"></div>
                                    </div>
                                    <div className="Signup6_ItemRight_middle_signpro_IconContainer">
                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup6_ItemRight_middle_signpro_IconContainer_Icon" src={cursor} alt="cursor" />
                                        </div>

                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup6_ItemRight_middle_signpro_IconContainer_Icon" src={user} alt="user" />
                                        </div>

                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_box">
                                            <img className="Signup6_ItemRight_middle_signpro_IconContainer_Icon" src={creditcard} alt="creditcard" />
                                        </div>

                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_box3">
                                            <img className="Signup6_ItemRight_middle_signpro_IconContainer_Icon" src={shield} alt="shield" />
                                        </div>


                                    </div>
                                    <div className="Signup6_ItemRight_middle_signpro_IconContainer_textBox">
                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_1")}</span>
                                        </div>

                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_2")}</span>
                                        </div>

                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_3")}</span>
                                        </div>

                                        <div className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup6_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_4")}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="Signup6_ItemRight_middle_CheckBoxContainer">

                                    {/* Card Number */}
                                    <div className="Signup6_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup6_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup6_ItemRight_middle_CheckBoxItem_textBox_text">{t("signup6_2")}</span>
                                            <span className="Signup6_ItemRight_middle_CardItem_textBox_text">{t("signup6_3")}</span>
                                        </div>

                                        <div className="Signup6_ItemRight_middle_CheckBoxItem_textBox_textInput">

                                            <div className="Signup6_ItemRight_middle_CheckBoxItem_textBox_textInput_wrapper">
                                                <div className="Signup6_ItemRight_middle_CheckBoxItem_textBox_textInput_wrapperBox">
                                                    <img className="Signup6_ItemRight_middle_GB_Item_textBox_cardicon" src={Mastercard} alt="calendar" />
                                                    <input className="Signup6_ItemRight_middle_CardItem_textBox_username_input" type="text" placeholder="1234" name="username" />
                                                    <div className="Signup6_ItemRight_middle_CardItem_hr">-</div>
                                                    <input className="Signup6_ItemRight_middle_CardItem_textBox_username_input" type="text" placeholder="1234" name="username" />
                                                    <div className="Signup6_ItemRight_middle_CardItem_hr">-</div>
                                                    <input className="Signup6_ItemRight_middle_CardItem_textBox_username_input" type="text" placeholder="1234" name="username" />
                                                    <div className="Signup6_ItemRight_middle_CardItem_hr">-</div>
                                                    <input className="Signup6_ItemRight_middle_CardItem_textBox_username_input" type="text" placeholder="1234" name="username" />
                                                </div>



                                                <div className="Signup6_ItemRight_middle_CheckBoxItem_textBox_textInput_wrapperBox2">
                                                    <img className="Signup6_ItemRight_middle_GB_Item_textBox_cardicon" src={oksign} alt="calendar" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* CVV number */}

                                    <div className="Signup6_ItemRight_middle_EmailBoxItem">
                                        <div className="Signup6_ItemRight_middle_EmailBoxItem_textBox">
                                            <span className="Signup6_ItemRight_middle_EmailBoxItem_textBox_text">{t("signup6_4")}</span>
                                            <span className="Signup6_ItemRight_middle_CardItem_textBox_text">{t("signup6_5")}</span>
                                        </div>


                                        <div className="Signup6_ItemRight_middle_EmailBoxItem_textBox_textInput">

                                            <div className="Signup6_ItemRight_middle_EmailBoxItem_textBox_textInput_wrapper">
                                                <input className="Signup6_ItemRight_middle_EmailBoxItem_textBox_username_input" type="text" placeholder="" name="username" />
                                                <img className="Signup6_ItemRight_middle_GB_Item_textBox_cvvicon" src={keypad} alt="calendar" />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Expiry Date */}
                                    <div className="Signup6_ItemRight_middle_ExpiryItem">
                                        <div className="Signup6_ItemRight_middle_ExpiryItem_textBox">
                                            <span className="Signup6_ItemRight_middle_ExpiryItem_textBox_text">{t("signup6_7")}</span>
                                            <span className="Signup6_ItemRight_middle_CardItem_textBox_text">{t("signup6_8")}</span>
                                        </div>


                                        <div className="Signup6_ItemRight_middle_ExpiryItem_textBox_textInput">

                                            <div className="Signup6_ItemRight_middle_ExpiryItem_textBox_textInput_wrapper">
                                                <input className="Signup6_ItemRight_middle_ExpiryItem_textBox_username_input" type="text" placeholder="MM" name="username" />

                                            </div>

                                            <div className="Signup6_ItemRight_middle_ExpiryItem_textBox_textInput_wrapper">
                                                <input className="Signup6_ItemRight_middle_ExpiryItem_textBox_username_input" type="text" placeholder="YY" name="username" />

                                            </div>
                                        </div>

                                    </div>



                                    {/* Password */}
                                    <div className="Signup6_ItemRight_middle_EmailBoxItem">
                                        <div className="Signup6_ItemRight_middle_EmailBoxItem_textBox">
                                            <span className="Signup6_ItemRight_middle_EmailBoxItem_textBox_text">{t("signup6_9")}</span>
                                            <span className="Signup6_ItemRight_middle_CardItem_textBox_text">{t("signup6_10")}</span>
                                        </div>


                                        <div className="Signup6_ItemRight_middle_EmailBoxItem_textBox_textInput">

                                            <div className="Signup6_ItemRight_middle_EmailBoxItem_textBox_textInput_wrapper">
                                                <input className="Signup6_ItemRight_middle_EmailBoxItem_textBox_username_input" type="text" placeholder="" name="username" />
                                                <img className="Signup6_ItemRight_middle_GB_Item_textBox_cvvicon" src={keypad} alt="calendar" />
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </div>

                            <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup5" className="link">
                                    <div className="Signup2_ItemRight_btm_BackBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup3_back")}</span>

                                    </div>
                                </Link>
                                <Link to="/signup7" className="link">
                                    <div className="Signup2_ItemRight_btm_NextBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup3_next")}</span>

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

export default Signup6