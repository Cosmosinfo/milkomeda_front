import React from 'react'
import './Signup3.css'
import Checkbox from '@mui/material/Checkbox';
function Signup3() {


    return (
        <>
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

                                <span className="Signup3_ItemRight_top_title_text">일반 회원 (팬)</span>



                            </div>

                            <div className="Signup3_ItemRight_middle">

                                <div className="Signup3_ItemRight_middle_signpro">

                                </div>

                                <div className="Signup3_ItemRight_middle_CheckBoxContainer">
                                    <div className="Signup3_ItemRight_middle_CheckBoxItem">
                                        <div className="Signup3_ItemRight_middle_CheckBoxItem_textBox">
                                            <span className="Signup3_ItemRight_middle_CheckBoxItem_textBox_text">Lorem ipsum (Mandatory)</span>
                                        </div>

                                        <div className="Signup3_ItemRight_middle_CheckBox">
                                            <Checkbox />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* <div className="Signu2p_ItemRight_btm_BtnBox">
                                <Link to="/signup" className="link">
                                    <div className="Signup3_ItemRight_btm_BackBtn">

                                        <span className="Signup3_ItemRight_btm_Btn_text">Back</span>

                                    </div>
                                </Link>
                                <Link to="/signup3" className="link">
                                    <div className="Signup3_ItemRight_btm_NextBtn">

                                        <span className="Signup3_ItemRight_btm_Btn_text">Next</span>

                                    </div>
                                </Link>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Signup3