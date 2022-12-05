import React, { useState } from "react";
import "./Signup.css";
// import { Link } from "react-router-dom";
import google from "../../assets/icon/social/google.svg";
import apple from "../../assets/icon/social/apple.svg";
import kakao from "../../assets/icon/social/kakao.svg";
import naver from "../../assets/icon/social/naver.svg";
import Topbar2 from "../../components/topbar/Topbar2";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/userAction";

function Signup() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    checkEmail: "",
    password: "",
  });

  const { email, checkEmail, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (email !== checkEmail) {
      window.alert("이메일이 맞지 않습니다");
    }
    let body = {
      email: email,
      checkEmail: checkEmail,
      password: password,
      type: "B",
    };

    dispatch(registerUser(body));
  };

  return (
    <>
      <Topbar2 />
      <div className="Signup">
        <div className="Signup_Wrapper">
          <div className="Signup_Container">
            <div className="Signup_ItemLeft">
              <div className="Signup_ItemLeft_imgbox">
                <img src="https://i.imgur.com/Ab8BFxf.png" className="Signup_ItemLeft_img" alt="" />
              </div>
            </div>

            <div className="Signup_ItemRight">
              <div className="Signup_ItemRight_top">
                <span className="Signup_ItemRight_top_title_text">회원가입</span>
              </div>

              <div className="Signup_ItemRight_btm">
                <div className="Signup_ItemRight_btm_google">
                  <div className="Signup_ItemRight_btm_Itembox">
                    <div className="Signup_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={google} alt="google" />
                    </div>
                    <div className="Signup_ItemRight_btm_textbox">
                      <span className="Signup_ItemRight_btm_text">Continue with Google</span>
                    </div>
                  </div>
                </div>
                <div className="Signup_ItemRight_btm_apple">
                  <div className="Signup_ItemRight_btm_Itembox">
                    <div className="Signup_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={apple} alt="apple" />
                    </div>
                    <div className="Signup_ItemRight_btm_textbox">
                      <span className="Signup_ItemRight_btm_text">Continue with Apple</span>
                    </div>
                  </div>
                </div>
                <div className="Signup_ItemRight_btm_kakao">
                  <div className="Signup_ItemRight_btm_Itembox">
                    <div className="Signup_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={kakao} alt="kakao" />
                    </div>

                    <div className="Signup_ItemRight_btm_textbox">
                      <span className="Signup_ItemRight_btm_text_kakao">Continue with Kakoa</span>
                    </div>
                  </div>
                </div>
                <div className="Signup_ItemRight_btm_Naver">
                  <div className="Signup_ItemRight_btm_Itembox">
                    <div className="Signup_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={naver} alt="naver" />
                    </div>
                    <div className="Signup_ItemRight_btm_textbox">
                      <span className="Signup_ItemRight_btm_text_naver">Continue with Naver</span>
                    </div>
                  </div>
                </div>

                <div className="Signup_ItemRight_btm_orBox">
                  <div className="Signup_ItemRight_btm_orBox_hrlf"></div>
                  <div className="Signup_ItemRight_btm_orBox_hrmd">or</div>
                  <div className="Signup_ItemRight_btm_orBox_hrrh"></div>
                </div>

                <div className="Signup_ItemRight_btm_Email">
                  <span className="Signup_ItemRight_btm_Email_text">Sign up with Email</span>
                </div>
                <form onSubmit={onSubmitHandler}>
                  <div className="Signup_ItemRight_btm_usernameBox">
                    <div className="Signup_ItemRight_btm_usernameBox_container">
                      <span className="Signup_ItemRight_btm_usernameBox_title">Email address</span>
                      <div className="Signup_ItemRight_btm_usernameBox_Input">
                        <input
                          className="Signup_username_input"
                          type="text"
                          placeholder=""
                          name="email"
                          onChange={onChange}
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="Signup_ItemRight_btm_usernameBox_container">
                      <span className="Signup_ItemRight_btm_usernameCheckBox_title">Check your Email address</span>
                      <div className="Signup_ItemRight_btm_usernameCheckBox__Input">
                        <input
                          className="Signup_username_input"
                          type="text"
                          placeholder=""
                          name="checkEmail"
                          onChange={onChange}
                          value={checkEmail}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="Signup_ItemRight_btm_passwordBox">
                    <span className="Signup_ItemRight_btm_passwordBox_title">Password</span>
                    <div className="Signup_ItemRight_btm_passwordBox_Input">
                      <input className="password_input" type="text" placeholder="" name="password" onChange={onChange} value={password} />
                    </div>
                  </div>
                  {/* <Link to="/signup2" className="link"> */}
                  <div className="Signup_ItemRight_btm_NextBox">
                    <div className="Signup_ItemRight_btm_NextBtn">
                      <button formAction="" className="Signup_ItemRight_btm_NextBtn_text">
                        Next
                      </button>
                    </div>
                  </div>
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
