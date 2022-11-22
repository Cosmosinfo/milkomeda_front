import { React } from "react";
import '../../assets/css/Store/StoreDetail.css'
import minus from '../../assets/icon/graw/minus-circle.svg'
import plus from '../../assets/icon/graw/plus-circle.svg'
import StoreRecoProduct from '../../components/Store/StoreRecoProduct'
import { Link } from "react-router-dom";
// import StoreTapContent from '../../Data/StoreTapContent'
// import StoreItemDetailImg from '../../components/Carousel/StoreItemDetailImg'
import Topbar from '../../components/topbar/Topbar'
import { useTranslation } from "react-i18next";

function StoreDetail() {


    const { t } = useTranslation();

    // const data = ['{t("storedetail_detail")}','{t("storedetail_review")} 0','Q&A 0','{t("storedetail_info")}'];
    // const [btnActive, setBtnActive] = useState("");

    // const toggleActive = (e) => {
    //     setBtnActive((prev) => {
    //     return e.target.value;
    //     });


    // }

    return (
        <>
            <Topbar />
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
                                        <span className='StoreDetail_left_top_Detail_titleBox_btm_Money'>₩ 100,000{t("storecate_won")}</span>
                                        <span className='StoreDetail_left_top_Detail_titleBox_btm_Money_line'>₩ 100,000</span>
                                    </div>

                                </div>

                                <div className='StoreDetail_left_top_Detail_Line'></div>

                                <div className='StoreDetail_left_top_Detail_title_DescriptionBox'>
                                    <div className='StoreDetail_left_top_Detail_title_DescriptionBox_textbox'>
                                        <div className='StoreDetail_left_top_Detail_title_DescriptionBox_textbox_text'>{t("storedetail_descrip")}</div>
                                    </div>
                                </div>

                                <div className='StoreDetail_left_top_Detail_Line'></div>

                                <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox'>
                                    <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox">
                                        <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_top'>
                                            <span className='StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_text'>  Signet Ring Art Class</span>

                                        </div>

                                        <div className='StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox'>
                                            <span className='StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_text'>₩ 100,000{t("storecate_won")}</span>

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
                                    <span className='StoreDetail_left_top_Detail_TotalBox_TotalMoney'>₩&nbsp;100,000{t("storecate_won")}</span>
                                </div>

                                <div className='StoreDetail_left_top_Detail_BuyBox'>
                                    <div className='StoreDetail_left_top_Detail_BuyBox_Top'>
                                        <div className='StoreDetail_left_top_Detail_BuyBox_AddCart'>
                                            {t("storedetail_add")}
                                        </div>

                                        <div className='StoreDetail_left_top_Detail_BuyBox_Whishlist'>
                                            {t("storedetail_wish")}
                                        </div>
                                    </div>

                                    <div className='StoreDetail_left_top_Detail_BuyBox_Btm'>
                                        {t("storedetail_buy")}
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
                                        {t("storedetail_detail")}
                                    </div>
                                </Link>

                                <Link to="/storeDetail2" className="link flex">
                                    <div className='StoreDetail_left_Btm_SelectBox_Item2'>
                                        {t("storedetail_review")} 0
                                    </div>
                                </Link>

                                <Link to="/storeDetail3" className="link flex">
                                    <div className='StoreDetail_left_Btm_SelectBox_Item'>
                                        Q&A 0
                                    </div>
                                </Link>

                                <Link to="/storeDetail4" className="link flex">
                                    <div className='StoreDetail_left_Btm_SelectBox_Item'>
                                        {t("storedetail_info")}
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
                                {t("storedetail_reco")}
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