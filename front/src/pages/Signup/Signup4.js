import React from 'react'
import './Signup4.css'
import { Link } from "react-router-dom";
import cursor from '../../assets/icon/signup/cursor 1.svg'
import user from '../../assets/icon/signup/user 1.svg'
import creditcard from '../../assets/icon/signup/credit-card 1.svg'
import shield from '../../assets/icon/signup/shield 1.svg'
import calendar from '../../assets/icon/signup/Group.svg'
import a from '../../assets/icon/signup/Japan.svg'
import b from '../../assets/icon/signup/Group197.svg'

import { pink } from "@mui/material/colors";
import { grey } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import Topbar2 from '../../components/topbar/Topbar2'

import { useTranslation } from "react-i18next";


function Signup4() {

    const { t } = useTranslation();

    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item }
    });


    return (
        <>
            < Topbar2 />
            <div className='Signup4'>
                <div className='Signup4_Wrapper'>
                    <div className='Signup4_Container'>
                        <div className='Signup4_ItemLeft'>
                            <div className='Signup4_ItemLeft_imgbox'>
                                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup4_ItemLeft_img" alt="" />
                            </div>


                        </div>


                        <div className="Signup4_ItemRight">
                            <div className="Signup4_ItemRight_top">

                                <span className="Signup4_ItemRight_top_title_text">{t("signup3_title")}</span>



                            </div>

                            <div className="Signup4_ItemRight_middle">

                                <div className="Signup4_ItemRight_middle_signpro">
                                    <div className="Signup4_ItemRight_middle_signpro_IconContainer_hr"></div>
                                    <div className="Signup4_ItemRight_middle_signpro_IconContainer">
                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_box">
                                            <img className="Signup4_ItemRight_middle_signpro_IconContainer_Icon" src={cursor} alt="cursor" />
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup4_ItemRight_middle_signpro_IconContainer_Icon" src={user} alt="user" />
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup4_ItemRight_middle_signpro_IconContainer_Icon" src={creditcard} alt="creditcard" />
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_box2">
                                            <img className="Signup4_ItemRight_middle_signpro_IconContainer_Icon" src={shield} alt="shield" />
                                        </div>


                                    </div>
                                    <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox">
                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_1")}</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_2")}</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_3")}</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">{t("signup_4")}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="Signup4_ItemRight_middle_CheckBoxContainer">

                                    {/* User Name */}
                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">{t("signup4_1")}</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput">

                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput_wrapper">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_username_input" type="text" placeholder="" name="username" />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Name  */}
                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">{t("signup4_2")}</span>
                                        </div>
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput_Item">
                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder={t("signup4_3")} name="LastName" />
                                            </div>

                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder={t("signup4_4")} name="FirstName" />
                                            </div>

                                        </div>


                                    </div>

                                    {/* Gender & Birth */}

                                    <div className="Signup4_ItemRight_middle_GB_Item">
                                        <div className="Signup4_ItemRight_middle_GB_Item_container">

                                            <div className="Signup4_ItemRight_middle_GB_Item_GenderBox">
                                                <span className='Signup4_ItemRight_middle_GB_Item_GenderText'>{t("signup4_5")}</span>
                                            </div>

                                            <div className="Signup4_ItemRight_middle_GB_Item_textBox_GenderInputBox">
                                                <Radio
                                                    className="Gender_radio"
                                                    {...controlProps('a')}
                                                    size="small"
                                                    label="Other"
                                                    sx={{
                                                        color: grey[500],
                                                        '&.Mui-checked': {
                                                            color: pink[600],
                                                        },
                                                    }}
                                                />
                                                <span className="Signup4_ItemRight_middle_GB_Item_textBox_GenderInputBox_text" >{t("signup4_6")}</span>

                                                <Radio
                                                    className="Gender_radio"
                                                    {...controlProps('b')}
                                                    size="small"
                                                    label="Other"
                                                    sx={{
                                                        color: grey[500],
                                                        '&.Mui-checked': {
                                                            color: pink[600],
                                                        },
                                                    }}
                                                />

                                                <span className="Signup4_ItemRight_middle_GB_Item_textBox_GenderInputBox_text">{t("signup4_7")}</span>
                                            </div>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_GB_Item_container">

                                            <div className='Signup4_ItemRight_middle_GB_Item_BirthTextBox'>
                                                <span className='Signup4_ItemRight_middle_GB_Item_BirthText'>{t("signup4_8")}</span>
                                            </div>
                                            <div className="Signup4_ItemRight_middle_GB_Item_textBox_birthInputBox">
                                                <input className="Signup4_ItemRight_middle_GB_Item_textBox_birthinput" type="text" placeholder="YYYY/MM/DD" name="LastName" />
                                                <img className="Signup4_ItemRight_middle_GB_Item_textBox_birthicon" src={calendar} alt="calendar" />
                                            </div>

                                        </div>
                                    </div>


                                    {/* Adress */}

                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">{t("signup4_9")}</span>
                                        </div>
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput_Item">
                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder={t("signup4_10")} name="Country" />
                                            </div>

                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder={t("signup4_11")} name="TownCity" />
                                            </div>

                                        </div>


                                    </div>

                                    {/* E-mail */}

                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">{t("signup4_12")}</span>
                                        </div>


                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput">

                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput_wrapper">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_username_input" type="text" placeholder="blackheart@milkomeda.co.kr" name="username" />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Country */}

                                    <div className="Signup4_ItemRight_middle_CountryItem">
                                        <div className="Signup4_ItemRight_middle_CountryItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CountryItem_textBox_text">{t("signup4_13")}</span>
                                        </div>
                                        <div className="Signup4_ItemRight_middle_CountryItem_textBox_textInput_Item">
                                            <div className="Signup4_ItemRight_middle_CountryItem_textBox_conInputBox">
                                                <img className="Signup4_ItemRight_middle_signpro_IconContainer_Icon" src={a} alt="creditcard" />
                                                <input className="Signup4_ItemRight_middle_CountryItem_textBox_name_input" type="text" placeholder="+ 82" name="Country" />
                                                <img className="Signup4_ItemRight_middle_signpro_IconContainer_Icon" src={b} alt="creditcard" />
                                            </div>

                                            <div className="Signup4_ItemRight_middle_CountryItem_textBox_numInputBox">
                                                <input className="Signup4_ItemRight_middle_CountryItem_textBox_name_numinput" type="text" placeholder="" name="TownCity" />
                                            </div>

                                        </div>


                                    </div>

                                </div>


                            </div>

                            <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup3" className="link">
                                    <div className="Signup2_ItemRight_btm_BackBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">{t("signup3_back")}</span>

                                    </div>
                                </Link>
                                <Link to="/signup5" className="link">
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

export default Signup4