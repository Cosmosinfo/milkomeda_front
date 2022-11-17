import React from 'react'
import '../../assets/css/Error/ErrorPage.css'
import Topbar from '../../components/topbar/Topbar'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ErrorPage() {

  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <div className='ErrorPage'>
        <div className='ErrorPage_Wrapper'>
          <div className='ErrorPage_left'>

          </div>

          <div className='ErrorPage_right'>
            <div className='ErrorPage_right_ErrorBox'>
              <div className='ErrorPage_right_ErrorBox_top'>
                {t("error_1")}
              </div>

              <div className='ErrorPage_right_ErrorBox_middle'>
                <span className='ErrorPage_right_ErrorBox_middle_big'>{t("error_2")}</span>
                <span className='ErrorPage_right_ErrorBox_middle_small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
              </div>


              <div className='ErrorPage_right_ErrorBox_Btm'>
                <Link to="/" className="link">
                  <div className='ErrorPage_right_ErrorBox_Btm_text1'>
                    {t("error_3")}
                  </div>
                </Link>
                <div className='ErrorPage_right_ErrorBox_Btm_text2'>
                  {t("error_4")}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default ErrorPage