import React from 'react'
import './MyPage.css'

import edit from '../../assets/icon/graw/edit-2.svg'
import myshop from '../../assets/icon/graw/shopping-cart.svg'
import setting from '../../assets/icon/graw/settings.svg'


function MyPage() {
    return (
        <>
            <div className='popWrapper'>
                <div className='popHeader'>
                    <div className='popHeader-Container'>
                        <div className='popHeader-imgbox'>
                            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" class="popHeader-userimg" />
                        </div>

                        <div className='popHeader-textbox'>
                            <div className='popHeader-textbox-un'>
                                User Name
                            </div>

                            <div className='popHeader-textbox-sb'>
                                Subscribing
                            </div>
                        </div>



                    </div>


                </div>

                <div className='popfooter'>
                    <div className='popfooter-Container'>
                        <div className='popfooter-Content'>
                            <div className="popfooter-ContentItem">
                                <img className="popfooter-ContentEditIcon" src={edit} alt="edit" />
                                Edit Profile
                            </div>

                            <div className="popfooter-ContentItem">
                                <img className="popfooter-ContentEditIcon" src={myshop} alt="myshop" />
                                My Shopping
                            </div>

                            <div className="popfooter-ContentItem">
                                <img className="popfooter-ContentEditIcon" src={setting} alt="setting" />
                                Setting
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage