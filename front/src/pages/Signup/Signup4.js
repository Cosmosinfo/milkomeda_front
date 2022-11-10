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



function Signup4() {
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

                                <span className="Signup4_ItemRight_top_title_text">일반 회원 (팬)</span>



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
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">약관동의</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">개인정보입력</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">결제정보입력</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_text">
                                            <span className="Signup4_ItemRight_middle_signpro_IconContainer_textBox_textinline">가입완료</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="Signup4_ItemRight_middle_CheckBoxContainer">

                                    {/* User Name */}
                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">user name</span>
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
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">Name</span>
                                        </div>
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput_Item">
                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder="Last Name" name="LastName" />
                                            </div>

                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder="First Name" name="FirstName" />
                                            </div>

                                        </div>


                                    </div>

                                    {/* Gender & Birth */}

                                    <div className="Signup4_ItemRight_middle_GB_Item">
                                        <div className="Signup4_ItemRight_middle_GB_Item_container">

                                            <div className="Signup4_ItemRight_middle_GB_Item_GenderBox">
                                                <span className='Signup4_ItemRight_middle_GB_Item_GenderText'>Gender</span>
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
                                                <span className="Signup4_ItemRight_middle_GB_Item_textBox_GenderInputBox_text" >Male</span>

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

                                                <span className="Signup4_ItemRight_middle_GB_Item_textBox_GenderInputBox_text">Female</span>
                                            </div>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_GB_Item_container">

                                            <div className='Signup4_ItemRight_middle_GB_Item_BirthTextBox'>
                                                <span className='Signup4_ItemRight_middle_GB_Item_BirthText'>Birth</span>
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
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">Address</span>
                                        </div>
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput_Item">
                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder="Country" name="Country" />
                                            </div>

                                            <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_nameInputBox">
                                                <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_name_input" type="text" placeholder="Town/City" name="TownCity" />
                                            </div>

                                        </div>


                                    </div>

                                    {/* E-mail */}

                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">E-mail</span>
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
                                            <span className="Signup4_ItemRight_middle_CountryItem_textBox_text">Phone Number</span>
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

                                        <span className="Signup2_ItemRight_btm_Btn_text">Back</span>

                                    </div>
                                </Link>
                                <Link to="/signup5" className="link">
                                    <div className="Signup2_ItemRight_btm_NextBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">Next</span>

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