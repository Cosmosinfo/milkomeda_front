import React from 'react'
import './Signup4.css'
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import cursor from '../../assets/icon/signup/cursor 1.svg'
import user from '../../assets/icon/signup/user 1.svg'
import creditcard from '../../assets/icon/signup/credit-card 1.svg'
import shield from '../../assets/icon/signup/shield 1.svg'


function Signup4() {


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
                                       
                                </div>

                                <div className="Signup4_ItemRight_middle_CheckBoxContainer">
                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">user name</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox_textInput">
                                        <input className="Signup4_ItemRight_middle_CheckBoxItem_textBox_username_input" type="text" placeholder="" name="username" />
                                        </div>
                                        
                                    </div>

                                    {/* <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">Lorem ipsum (Mandatory)</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_CheckBox">
                                            <Checkbox style={{color:'#F3017F'}} />
                                            <span className="Signup4_ItemRight_middle_CheckBox_text">I agree to the Terms and Conditions</span>
                                        <div>
                                            
                                        </div>
                                        
                                        
                                        </div>
                                        
                                    </div>

                                    <div className="Signup4_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup4_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup4_ItemRight_middle_CheckBoxItem_textBox_text">Lorem ipsum (Optionnal)</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_CheckBox">
                                            <Checkbox style={{color:'#F3017F'}} />
                                            <span className="Signup4_ItemRight_middle_CheckBox_Opttext">I agree to the Terms and Conditions</span>
                                        <div>
                                            
                                        </div>
                                        
                                        
                                        </div>
                                        
                                    </div>

                                    
                                        <div className="Signup4_ItemRight_middle_CheckBoxBtm">
                                            <Checkbox style={{color:'#F3017F'}} />
                                            <span className="Signup4_ItemRight_middle_CheckBox_Opttext">I agree to the Terms and Conditions</span>
                                        </div>

                                        <div className="Signup4_ItemRight_middle_CheckBoxBtm">
                                            <Checkbox style={{color:'#F3017F'}} />
                                            <span className="Signup4_ItemRight_middle_CheckBox_Opttext">I agree to the Terms and Conditions (Optional)</span>
                                        </div> */}
                                   

                                    
                                </div>


                            </div>

                            <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup3" className="link">
                                    <div className="Signup2_ItemRight_btm_BackBtn">

                                        <span className="Signup2_ItemRight_btm_Btn_text">Back</span>

                                    </div>
                                </Link>
                                <Link to="/signup4" className="link">
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