import React from "react";
import "./Signup.css";
// import { Link } from "react-router-dom";
// import google from "../../assets/icon/social/google.svg";
// import apple from "../../assets/icon/social/apple.svg";
// import kakao from "../../assets/icon/social/kakao.svg";
// import naver from "../../assets/icon/social/naver.svg";
import Topbar2 from "../../components/topbar/Topbar2";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../_actions/userAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    userEmail: Yup.string().email("올바른 이메일 형식이 아닙니다!").required("이메일을 입력하세요!"),
    userChkEmail: Yup.string()
      .oneOf([Yup.ref("userEmail"), null], "이메일이 일치하지 않습니다!")
      .required("필수 입력 값입니다!"),
    userPassword: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .required("패스워드를 입력하세요!"),
    // .matches(
    //   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
    //   "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!"
    // ),
  });

  const submit = async (values) => {
    const { userEmail, userChkEmail, userPassword } = values;
    try {
      await axios.post("http://52.53.207.20:8080/api/user/join", {
        userEmail,
        userChkEmail,
        userPassword,
        userAccess: "P",
        userNickname: "",
        userAge: "",
        userName: "",
        userPhone: "",
        userProfileImage: "",
        userGender: "",
        userNation: "",
        userAddress: "",
      });
      toast.success(
        <h3>
          회원가입이 완료되었습니다.
          <br />
          로그인 하세요😎
        </h3>,
        {
          position: "top-center",
          autoClose: 2000,
        }
      );
      navigate("/signup2");
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      toast.error(e.response.data.message + "😭", {
        position: "top-center",
      });
    }
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
                {/* <div className="Signup_ItemRight_btm_google">
                  <div className="Signup_ItemRight_btm_Itembox">
                    <div className="Signup_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={google} alt="google" />
                    </div>
                    <div className="Signup_ItemRight_btm_textbox">
                      <span className="Signup_ItemRight_btm_text">Continue with Google</span>
                    </div>
                  </div>
                </div> */}
                {/* <div className="Signup_ItemRight_btm_apple">
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
                </div> */}

                {/* <div className="Signup_ItemRight_btm_orBox">
                  <div className="Signup_ItemRight_btm_orBox_hrlf"></div>
                  <div className="Signup_ItemRight_btm_orBox_hrmd">or</div>
                  <div className="Signup_ItemRight_btm_orBox_hrrh"></div>
                </div> */}

                <div className="Signup_ItemRight_btm_Email">
                  {/* <span className="Signup_ItemRight_btm_Email_text">Sign up with Email</span> */}
                </div>
                <Formik
                  initialValues={{
                    userEmail: "",
                    userChkEmail: "",
                    password: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={submit}
                  validateOnMount={true}
                >
                  {({ values, handleSubmit, handleChange, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <ToastContainer />
                      <div className="Signup_ItemRight_btm_usernameBox">
                        <div className="Signup_ItemRight_btm_usernameBox_container">
                          <span className="Signup_ItemRight_btm_usernameBox_title">Email address</span>
                          <div className="Signup_ItemRight_btm_usernameBox_Input">
                            <input
                              className="Signup_username_input"
                              type="text"
                              placeholder=""
                              name="userEmail"
                              onChange={handleChange}
                              value={values.userEmail}
                            />
                            <div className="error-message">
                              <ErrorMessage name="userEmail" />
                            </div>
                          </div>
                        </div>
                        <div className="Signup_ItemRight_btm_usernameBox_container">
                          <span className="Signup_ItemRight_btm_usernameCheckBox_title">Check your Email address</span>
                          <div className="Signup_ItemRight_btm_usernameCheckBox__Input">
                            <input
                              className="Signup_username_input"
                              type="text"
                              placeholder=""
                              name="userChkEmail"
                              onChange={handleChange}
                              value={values.userChkEmail}
                            />
                            <div className="error-message">
                              <ErrorMessage name="userChkEmail" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Signup_ItemRight_btm_passwordBox">
                        <span className="Signup_ItemRight_btm_passwordBox_title">Password</span>
                        <div className="Signup_ItemRight_btm_passwordBox_Input">
                          <input
                            className="password_input"
                            type="password"
                            placeholder=""
                            name="userPassword"
                            onChange={handleChange}
                            value={values.userPassword}
                          />
                          <div className="error-message">
                            <ErrorMessage name="userPassword" />
                          </div>
                        </div>
                      </div>
                      {/* <Link to="/signup2" className="link"> */}
                      <div className="Signup_ItemRight_btm_NextBox">
                        <div className="Signup_ItemRight_btm_NextBtn">
                          <button type="submit" className="Signup_ItemRight_btm_NextBtn_text">
                            Next
                          </button>
                        </div>
                      </div>
                      {/* </Link> */}
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
