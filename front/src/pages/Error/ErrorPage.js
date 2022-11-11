import React from 'react'
import '../../assets/css/Error/ErrorPage.css'
import Topbar from '../../components/topbar/Topbar'

function ErrorPage() {
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
                Page not found
              </div>

              <div className='ErrorPage_right_ErrorBox_middle'>
                <span className='ErrorPage_right_ErrorBox_middle_big'>Oops! Error 404</span>
                <span className='ErrorPage_right_ErrorBox_middle_small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
              </div>

              <div className='ErrorPage_right_ErrorBox_Btm'>
                <div className='ErrorPage_right_ErrorBox_Btm_text1'>
                  Back to Homepage
                </div>

                <div className='ErrorPage_right_ErrorBox_Btm_text2'>
                  Visit our help center
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