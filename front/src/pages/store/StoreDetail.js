import React from 'react'
import '../../assets/css/Store/StoreDetail.css'
import minus from '../../assets/icon/graw/minus-circle.svg'
import plus from '../../assets/icon/graw/plus-circle.svg'
import StoreRecoProduct from '../../components/Store/StoreRecoProduct'
// import StoreItemDetailImg from '../../components/Carousel/StoreItemDetailImg'


function StoreDetail() {
    return (
        <>
            <div className='StoreDetail'>
                <div className='StoreDetail_Wrapper'>
                    <div className='StoreDetail_left'>
                        <div className='StoreDetail_left_top'>
                            <div className='StoreDetail_left_top_img'>
                                 <img className="StoreDetail_left_top_img_img" src="https://i.imgur.com/yFXnI7Y.jpg" alt="" />
                                 {/* <StoreItemDetailImg /> */}
                            </div>

                            <div className='StoreDetail_left_top_Detail'>
                                <div className='StoreDetail_left_top_Detail_titleBox'>

                                    <div className='StoreDetail_left_top_Detail_titleBox_top'>
                                        <span className='StoreDetail_left_top_Detail_titleBox_ArtistName'>SYLK</span>
                                        <span className='StoreDetail_left_top_Detail_titleBox_Text'>Signet Ring Art Class</span>
                                    </div>

                                    <div className='StoreDetail_left_top_Detail_titleBox_btm'>
                                        <span className='StoreDetail_left_top_Detail_titleBox_btm_Money'>₩ 100,000</span>
                                        <span className='StoreDetail_left_top_Detail_titleBox_btm_Money_line'>₩ 100,000</span>
                                    </div>

                                </div>

                                <div className='StoreDetail_left_top_Detail_Line'></div>

                                <div className='StoreDetail_left_top_Detail_title_DescriptionBox'>
                                    <div className='StoreDetail_left_top_Detail_title_DescriptionBox_textbox'>
                                        <span className='StoreDetail_left_top_Detail_title_DescriptionBox_textbox_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</span>
                                    </div>
                                </div>

                                <div className='StoreDetail_left_top_Detail_Line'></div>

                                <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox'>
                                    <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox">
                                        <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_top'>
                                            <span className='StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>

                                        </div>

                                        <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox'>
                                            <span className='StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_text'>₩ 100,000</span>

                                            <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_Icon">
                                                <img className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_minusIcon" src={minus} alt="minus" />
                                                1
                                                <img className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_plussIcon" src={plus} alt="plus" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='StoreDetail_left_top_Detail_TotalBox'>
                                    <span className='StoreDetail_left_top_Detail_TotalBox_Total'>Total</span>
                                    <span className='StoreDetail_left_top_Detail_TotalBox_TotalMoney'>₩ 100,000</span>
                                </div>

                                <div className='StoreDetail_left_top_Detail_BuyBox'>
                                    <div className='StoreDetail_left_top_Detail_BuyBox_Top'>
                                        <div className='StoreDetail_left_top_Detail_BuyBox_AddCart'>
                                            장바구니
                                        </div>

                                        <div className='StoreDetail_left_top_Detail_BuyBox_Whishlist'>
                                            위시리스트
                                        </div>
                                    </div>

                                    <div className='StoreDetail_left_top_Detail_BuyBox_Btm'>
                                        바로 구매하기
                                    </div>


                                </div>


                            </div>


                        </div>


                        <div className='StoreDetail_left_Btm'>
                            <div className='StoreDetail_left_Btm_Detail_Line'></div>

                            <div className='StoreDetail_left_Btm_imgBox'>

                            </div>

                            <div className='StoreDetail_left_Btm_SelectBox'>
                                <div className='StoreDetail_left_Btm_SelectBox_Item'>
                                    Lorem ipsum
                                </div>

                                <div className='StoreDetail_left_Btm_SelectBox_Item2'>
                                    Lorem ipsum dolor sit
                                </div>

                                <div className='StoreDetail_left_Btm_SelectBox_Item2'>
                                    Lorem ipsum dolor sit
                                </div>

                                <div className='StoreDetail_left_Btm_SelectBox_Item2'>
                                    Lorem ipsum dolor sit
                                </div>


                            </div>

                            <div className='StoreDetail_left_Btm_imgBox'>

                            </div>

                            <div className='StoreDetail_left_Btm_imgBox'>

                            </div>
                        </div>
                    </div>

                    <div className='StoreDetail_Right'>

                        <div className='StoreDetail_Right_Wrapper'>
                            <div className='StoreDetail_Right_Top'>
                                이 상품은 어떠세요?
                            </div>

                            <div className='StoreDetail_Right_Btm'>
                                <StoreRecoProduct />

                                <StoreRecoProduct />

                                <StoreRecoProduct />


                            </div>


                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default StoreDetail