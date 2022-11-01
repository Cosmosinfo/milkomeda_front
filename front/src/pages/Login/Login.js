import React from 'react'
import './Login.css'

function Login() {
    return (
        <>

            <div className='Login'>
                <div className='Login_Wrapper'>
                    <div className='Login_Container'>
                        <div className='Login_ItemLeft'>
                            {/* <img src="" className="Login_ItemLeft_img" alt="" /> */}
                            a
                        </div>


                        <div className="Login_ItemRight">
                            <div className="Login_ItemRight_top">

                                <span className="Login_ItemRight_top_title_text">Login</span>

                            </div>

                            <div className="Login_ItemRight_btm">
                                <div className="Login_ItemRight_btm_usernameBox">
                                    <span className="Login_ItemRight_btm_usernameBox_title">Email address or username</span>
                                    <div className="Login_ItemRight_btm_usernameBox_Input">
                                        <input className="username_input" type="text" placeholder="" name="username" />
                                    </div>



                                </div>

                                <div className="Login_ItemRight_btm_passwordBox">
                                    <span className="Login_ItemRight_btm_passwordBox_title">Password</span>
                                    <div className="Login_ItemRight_btm_passwordBox_Input">
                                        <input className="password_input" type="text" placeholder="" name="password" />
                                    </div>


                                    <span className="Login_ItemRight_btm_passwordBox_forget">Forgot your password?</span>




                                </div>

                                <div className="Login_ItemRight_btm_orBox">
                                    <div className="Login_ItemRight_btm_orBox_hrlf"></div>
                                    <div className="Login_ItemRight_btm_orBox_hrmd">or</div>
                                    <div className="Login_ItemRight_btm_orBox_hrrh"></div>
                                </div>

                                <div className="Login_ItemRight_btm_google">
                                    <div className="Login_ItemRight_btm_google_imgbox">
                                        <img src="http://" alt=""></img>
                                    </div>
                                    <div className="Login_ItemRight_btm_google_textbox">
                                        <div className="Login_ItemRight_btm_google_text"></div>
                                    </div>
                                </div>
                                <div className="Login_ItemRight_btm_apple"></div>
                                <div className="Login_ItemRight_btm_kakao"></div>
                                <div className="Login_ItemRight_btm_Naver"></div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login