import React from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icon/social/google.svg";
import apple from "../../assets/icon/social/apple.svg";
import kakao from "../../assets/icon/social/kakao.svg";
import naver from "../../assets/icon/social/naver.svg";
import "./Login.css";
import Topbar2 from "../../components/topbar/Topbar2";
// import { loginUser } from "../../_actions/userAction";
import { useDispatch } from "react-redux";
import { setToken } from "../../_reducers/AuthReducer";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { useTranslation } from "react-i18next";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string().email("올바른 이메일 형식이 아닙니다").required("이메일을 입력하세요"),
    userPassword: Yup.string().required("패스워드를 입력하세요"),
  });

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   let body = {
  //     email: email,
  //     password: password,
  //   };

  //   dispatch(loginUser(body));
  // };

  const submit = async (values) => {
    const { userEmail, userPassword } = values;
    try {
      const { data } = await axios.post("http://54.215.251.144:8080/api/user/login", {
        userEmail,
        userPassword,
      });
      console.log(data);
      console.log(data.jwt);
      dispatch(setToken(data.jwt));
      toast.success(<h3>로그인 성공😎</h3>, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
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
      <div className="Login">
        <div className="Login_Wrapper">
          <div className="Login_Container">
            <div className="Login_ItemLeft">
              <div className="Login_ItemLeft_imgbox">
                <img src="https://i.imgur.com/Ab8BFxf.png" className="Login_ItemLeft_img" alt="" />
              </div>
            </div>

            <div className="Login_ItemRight">
              <div className="Login_ItemRight_top">
                <span className="Login_ItemRight_top_title_text">로그인</span>
              </div>
              <div className="Login_ItemRight_btm">
                <Formik
                  initialValues={{
                    userEmail: "",
                    userPassword: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={submit}
                >
                  {({ values, handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                      <ToastContainer />
                      <div className="Login_ItemRight_btm_usernameBox">
                        <span className="Login_ItemRight_btm_usernameBox_title">Email address or username</span>
                        <div className="Login_ItemRight_btm_usernameBox_Input">
                          <input
                            className="Login_username_input"
                            type="text"
                            placeholder=""
                            name="userEmail"
                            onChange={handleChange}
                            value={values.userEmail}
                          />
                        </div>
                        <div className="error-message">
                          <ErrorMessage name="userEmail" />
                        </div>
                      </div>
                      <div className="Login_ItemRight_btm_passwordBox">
                        <span className="Login_ItemRight_btm_passwordBox_title">Password</span>
                        <div className="Login_ItemRight_btm_passwordBox_Input">
                          <input
                            className="password_input"
                            type="password"
                            placeholder=""
                            name="userPassword"
                            onChange={handleChange}
                            value={values.userPassword}
                          />
                        </div>
                        <div className="error-message">
                          <ErrorMessage name="userPassword" />
                        </div>
                        <span className="Login_ItemRight_btm_passwordBox_forget">Forgot your password?</span>
                      </div>
                      <button className="Login_ItemRight_btm_milko" type="submit">
                        <span className="Login_ItemRight_btm_text_milko">Login</span>
                      </button>
                    </form>
                  )}
                </Formik>
                <div className="Login_ItemRight_btm_orBox">
                  <div className="Login_ItemRight_btm_orBox_hrlf"></div>
                  <div className="Login_ItemRight_btm_orBox_hrmd">or</div>
                  <div className="Login_ItemRight_btm_orBox_hrrh"></div>
                </div>

                <div className="Login_ItemRight_btm_google">
                  <div className="Login_ItemRight_btm_Itembox">
                    <div className="Login_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={google} alt="google" />
                    </div>
                    <div className="Login_ItemRight_btm_textbox">
                      <span className="Login_ItemRight_btm_text">Continue with Google</span>
                    </div>
                  </div>
                </div>
                <div className="Login_ItemRight_btm_apple">
                  <div className="Login_ItemRight_btm_Itembox">
                    <div className="Login_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={apple} alt="apple" />
                    </div>
                    <div className="Login_ItemRight_btm_textbox">
                      <span className="Login_ItemRight_btm_text">Continue with Apple</span>
                    </div>
                  </div>
                </div>
                <div className="Login_ItemRight_btm_kakao">
                  <div className="Login_ItemRight_btm_Itembox">
                    <div className="Login_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={kakao} alt="kakao" />
                    </div>

                    <div className="Login_ItemRight_btm_textbox">
                      <span className="Login_ItemRight_btm_text_kakao">Continue with Kakao</span>
                    </div>
                  </div>
                </div>

                <div className="Login_ItemRight_btm_Naver">
                  <div className="Login_ItemRight_btm_Itembox">
                    <div className="Login_ItemRight_btm_Iconbox">
                      <img className="social_icon" src={naver} alt="naver" />
                    </div>
                    <div className="Login_ItemRight_btm_textbox">
                      <span className="Login_ItemRight_btm_text_naver">Continue with Naver</span>
                    </div>
                  </div>
                </div>

                <div className="Login_ItemRight_btm_hr"></div>

                <div className="Login_ItemRight_btm_accountbox">
                  <span className="Login_ItemRight_btm_account_text">Don’t have an account?</span>
                </div>
                <Link to="/signup" className="link">
                  <div className="Login_ItemRight_btm_milko">
                    <span className="Login_ItemRight_btm_text_milko">Sign up for MILKOMEDA</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
