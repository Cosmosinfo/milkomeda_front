import { React} from "react";
import '../../assets/css/Store/StoreDetail.css'
import minus from '../../assets/icon/graw/minus-circle.svg'
import plus from '../../assets/icon/graw/plus-circle.svg'
import StoreRecoProduct from '../../components/Store/StoreRecoProduct'
import { Link } from "react-router-dom";
// import StoreTapContent from '../../Data/StoreTapContent'
// import StoreItemDetailImg from '../../components/Carousel/StoreItemDetailImg'


function StoreDetail() {
    
    // const data = ['상세보기','리뷰 0','Q&A 0','반품/교환/배송정보'];
    // const [btnActive, setBtnActive] = useState("");

    // const toggleActive = (e) => {
    //     setBtnActive((prev) => {
    //     return e.target.value;
    //     });
        

    // }

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
                                        <div className='StoreDetail_left_top_Detail_title_DescriptionBox_textbox_text'>2017년 가을, 하와이 천문대에서 이상한 물체가 관측되었습니다. 인류 역사상 태양계에서 최초로 발견 된 이 외계 행성 물질은 '먼곳에서 보낸 첫번째 메세지'라는 뜻의 오무아무아(Oumuamua)입니다.여전히 우리에게 미스테리한 궁금증을 남긴 오무아무아는 어쩌면 우리가 존재하고 있는 현세계와 인류가 마주 하게 될 또 다른 세계를 보여주는 첫번째 시그널 메세지가 아니었을까요?광활한 우주를 자유롭게 누비며어딘가에서 반짝이고 있을 오무아무아의 빛을 따라신비로운 여행을 떠나봅니다.</div>
                                    </div>
                                </div>

                                <div className='StoreDetail_left_top_Detail_Line'></div>

                                <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox'>
                                    <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox">
                                        <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_top'>
                                            <span className='StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_text'>  Signet Ring Art Class</span>

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
                                    <span className='StoreDetail_left_top_Detail_TotalBox_TotalMoney'>₩&nbsp;100,000</span>
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
                            <div className='StoreDetail_left_Btm_SelectBox'>

                            {/* {data.map((item, idx) => {
                                                return (
                                                <>
                                                    <button
                                                    value={idx}
                                                    // eslint-disable-next-line
                                                    className={"StoreDetail_left_Btm_SelectBox_Item" + (idx == btnActive ? " active" : "")}
                                                    onClick={toggleActive}
                                                    
                                                    >
                                                    {item}
                                                    </button>

                                                    
                                                </>
                                                );
                            })} */}
                                 <Link to="/storeDetail" className="link flex">
                                <div className='StoreDetail_left_Btm_SelectBox_Item'>
                                    상세보기
                                </div>
                                </Link>

                                <Link to="/storeDetail2" className="link flex">
                                <div className='StoreDetail_left_Btm_SelectBox_Item2'>
                                리뷰 0
                                </div>
                                </Link>

                                <Link to="/storeDetail3" className="link flex">
                                <div className='StoreDetail_left_Btm_SelectBox_Item'>
                                Q&A 0
                                </div>
                                </Link>

                                <Link to="/storeDetail4" className="link flex">
                                <div className='StoreDetail_left_Btm_SelectBox_Item'>
                                반품/교환/배송정보
                                </div>    
                                </Link> 
                            

                            </div>

                            

                            {/* {StoreTapContent.map((item, idx) => {
                                            return (
                                            <li className={styles.top_category} 
                                                key={idx} onClick={() => tapClick(idx)}> {item.name}
                                            </li>)
                                            }
                                            )} */}

                            <div className='StoreDetail_left_Btm_imgBox'>
                                {/* <img className="StoreDetail_left_Btm_imgBox" src="https://i.imgur.com/yFXnI7Y.jpg" alt="" /> */}
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

                               


                            </div>


                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default StoreDetail