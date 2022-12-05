import React from 'react'
import './Signup3.css'
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import cursor from '../../assets/icon/signup/cursor 1.svg'
import user from '../../assets/icon/signup/user 1.svg'
import creditcard from '../../assets/icon/signup/credit-card 1.svg'
import shield from '../../assets/icon/signup/shield 1.svg'
import Topbar2 from '../../components/topbar/Topbar2'

import { useTranslation } from "react-i18next";

function Signup3() {

    const { t } = useTranslation();

    return (
        <>
            < Topbar2 />
            <div className='Signup3'>
                <div className='Signup3_Wrapper'>
                    <div className='Signup3_Container'>
                        <div className='Signup3_ItemLeft'>
                            <div className='Signup3_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup3_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Signup3_ItemRight">
                            <div className="Signup3_ItemRight_top">

                                <span className="Signup3_ItemRight_top_title_text">{t("signup3_title")}</span>



                            </div>

                            <div className="Signup3_ItemRight_middle">

                                <div className="Signup3_ItemRight_middle_signpro">
                                    <div className="Signup3_ItemRight_middle_signpro_IconContainer_hr"></div>
                                    <div className="Signup3_ItemRight_middle_signpro_IconContainer">
                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_box">
                                            <img className="Signup3_ItemRight_middle_signpro_IconContainer_Icon" src={cursor} alt="cursor" />
                                        </div>

                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup3_ItemRight_middle_signpro_IconContainer_Icon" src={user} alt="user" />
                                        </div>

                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup3_ItemRight_middle_signpro_IconContainer_Icon" src={creditcard} alt="creditcard" />
                                        </div>

                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup3_ItemRight_middle_signpro_IconContainer_Icon" src={shield} alt="shield" />
                                        </div>


                                    </div>
                                    <div className="Signup3_ItemRight_middle_signpro_IconContainer_textBox">
                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_1")}</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_2")}</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_3")}</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup3_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_4")}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="Signup3_ItemRight_middle_CheckBoxContainer">
                                    <div className="Signup3_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup3_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup3_ItemRight_middle_CheckBoxItem_textBox_text">Lorem ipsum ({t("signup3_1")})</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_CheckBox">
                                            <Checkbox style={{ color: '#F3017F' }} />
                                            <span className="Signup3_ItemRight_middle_CheckBox_text">{t("signup3_agree")}</span>
                                            <div>

                                            </div>


                                        </div>

                                    </div>

                                    <div className="Signup3_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup3_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup3_ItemRight_middle_CheckBoxItem_textBox_text">Lorem ipsum ({t("signup3_1")})</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_CheckBox">
                                            <Checkbox style={{ color: '#F3017F' }} />
                                            <span className="Signup3_ItemRight_middle_CheckBox_text">{t("signup3_agree")}</span>
                                            <div>

                                            </div>


                                        </div>

                                    </div>

                                    <div className="Signup3_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup3_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup3_ItemRight_middle_CheckBoxItem_textBox_text">Lorem ipsum ({t("signup3_2")})</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_CheckBox">
                                            <Checkbox className="css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root" />
                                            <span className="Signup3_ItemRight_middle_CheckBox_Opttext">{t("signup3_agree")}</span>
                                            <div>

                                            </div>


                                        </div>

                                    </div>


                                    <div className="Signup3_ItemRight_middle_CheckBoxBtm">
                                        <Checkbox style={{ color: '#F3017F' }} />
                                        <span className="Signup3_ItemRight_middle_CheckBox_Opttext">{t("signup3_agree")}</span>
                                    </div>

                                    <div className="Signup3_ItemRight_middle_CheckBoxBtm">
                                        <Checkbox style={{ color: '#F3017F' }} />
                                        <span className="Signup3_ItemRight_middle_CheckBox_Opttext">{t("signup3_agree")}</span>
                                    </div>



                                </div>


                            </div>

                            <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup2" className="link">
                                    <div className="Signup2_ItemRight_btm_BackBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup3_next")}</span>

                                    </div>
                                </Link>
                                <Link to="/signup4" className="link">
                                    <div className="Signup2_ItemRight_btm_NextBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup3_back")}</span>

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

export default Signup3