import React from 'react'
import '../../assets/css/Artist/ArtistMain.css'

import MyPage from '../../components/Popup/MyPage'
import Notification from '../../components/Popup/Notification'
import Terms from '../../components/Popup/terms'

function ArtistMain() {
  return (
    <>

      <div className='ArtistMain'>
        <div className='ArtistMain_Wrapper'>
          < MyPage />
          <div className='ex'>
            <Notification />
          </div>

          <div className='ex'>
            <Terms />
          </div>
          
        </div>
        

      </div>



    </>
  )
}

export default ArtistMain