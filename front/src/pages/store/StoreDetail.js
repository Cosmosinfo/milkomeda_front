import { React, useState } from "react";
import "../../assets/css/Store/StoreDetail.css";
import minus from "../../assets/icon/graw/minus-circle.svg";
import plus from "../../assets/icon/graw/plus-circle.svg";
import StoreRecoProduct from "../../components/Store/StoreRecoProduct";
// import StoreTapContent from '../../Data/StoreTapContent'
import { Link } from "react-router-dom";
// import StoreItemDetailImg from '../../components/Carousel/StoreItemDetailImg'
import Topbar from "../../components/topbar/Topbar";
import { useTranslation } from "react-i18next";

const money = [
  {
    id: 1,
    exchange: "USD",
    icon: "$",
  },
  {
    id: 2,
    exchange: "KRW",
    icon: "₩",
  },
  {
    id: 3,
    exchange: "JPY",
    icon: "円",
  },
];

function StoreDetail() {
  const { t } = useTranslation();
  const [exchange, setExchange] = useState("100,000");
  const [moneyIcon, setMoneyIcon] = useState("");

  console.log(moneyIcon);

  const exchangeRate = (money) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "JbiNOWCbsyvo5fEAjKRK38KxfOFOc5CD");

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${money.exchange}&from=KRW&amount=100000`, requestOptions)
      .then((response) => response.json())
      .then((result) => setExchange(result.result), setMoneyIcon(money.icon))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Topbar />
      <div className="StoreDetail">
        <div className="StoreDetail_Wrapper">
          <div className="StoreDetail_left">
            <div className="StoreDetail_left_top">
              <div className="StoreDetail_left_top_img">
                <img className="StoreDetail_left_top_img_img" src="https://i.imgur.com/yFXnI7Y.jpg" alt="" />
                {/* <StoreItemDetailImg /> */}
              </div>

              <div className="StoreDetail_left_top_Detail">
                <div className="StoreDetail_left_top_Detail_titleBox">
                  <div className="StoreDetail_left_top_Detail_titleBox_top">
                    <span className="StoreDetail_left_top_Detail_titleBox_ArtistName">SYLK</span>
                    <span className="StoreDetail_left_top_Detail_titleBox_Text">Signet Ring Art Class</span>
                  </div>

                  <div className="StoreDetail_left_top_Detail_titleBox_btm">
                    <span className="StoreDetail_left_top_Detail_titleBox_btm_Money">
                      {moneyIcon}&nbsp;&nbsp;
                      {exchange}
                      {/* {t("storecate_won")} */}
                    </span>
                    <span className="StoreDetail_left_top_Detail_titleBox_btm_Money_line">₩ 100,000</span>
                  </div>
                  <div style={{ display: "flex" }}>
                    {money.map((money, id) => (
                      <div className="exchange" onClick={() => exchangeRate(money)} key={id}>
                        {money.icon}
                      </div>
                    ))}
                    {/* <div className="exchange" onClick={exchangeRate}>
                      asd
                    </div>
                    <div className="exchange" onClick={exchangeRate}>
                      원
                    </div>
                    <div className="exchange" onClick={exchangeRate}>
                      달러
                    </div> */}
                  </div>
                </div>
                <div className="StoreDetail_left_top_Detail_Line"></div>

                <div className="StoreDetail_left_top_Detail_title_DescriptionBox">
                  <div className="StoreDetail_left_top_Detail_title_DescriptionBox_textbox">
                    <div className="StoreDetail_left_top_Detail_title_DescriptionBox_textbox_text">{t("storedetail_descrip")}</div>
                  </div>
                </div>

                <div className="StoreDetail_left_top_Detail_Line"></div>

                <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox">
                  <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox">
                    <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_top">
                      <span className="StoreDetail_left_top_Detail_MoneyDescriptionBox_textbox_text"> Signet Ring Art Class</span>
                    </div>

                    <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox">
                      <span className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_text">₩ 100,000{t("storecate_won")}</span>

                      <div className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_Icon">
                        <img className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_minusIcon" src={minus} alt="minus" />
                        1
                        <img className="StoreDetail_left_top_Detail_MoneyDescriptionBox_moneybox_plussIcon" src={plus} alt="plus" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="StoreDetail_left_top_Detail_TotalBox">
                  <span className="StoreDetail_left_top_Detail_TotalBox_Total">Total</span>
                  <span className="StoreDetail_left_top_Detail_TotalBox_TotalMoney">₩&nbsp;100,000{t("storecate_won")}</span>
                </div>

                <div className="StoreDetail_left_top_Detail_BuyBox">
                  <div className="StoreDetail_left_top_Detail_BuyBox_Top">
                    <div className="StoreDetail_left_top_Detail_BuyBox_AddCart">{t("storedetail_add")}</div>

                    <div className="StoreDetail_left_top_Detail_BuyBox_Whishlist">{t("storedetail_wish")}</div>
                  </div>

                  <div className="StoreDetail_left_top_Detail_BuyBox_Btm">{t("storedetail_buy")}</div>
                </div>
              </div>
            </div>

            <div className="StoreDetail_left_Btm">
              <div className="StoreDetail_left_Btm_SelectBox">
                <Link to="/storeDetail" className="link flex">
                  <div className="StoreDetail_left_Btm_SelectBox_Item2">{t("storedetail_detail")}</div>
                </Link>

                <Link to="/storeDetail2" className="link flex">
                  <div className="StoreDetail_left_Btm_SelectBox_Item">{t("storedetail_review")} 0</div>
                </Link>

                <Link to="/storeDetail3" className="link flex">
                  <div className="StoreDetail_left_Btm_SelectBox_Item">Q&A 0</div>
                </Link>

                <Link to="/storeDetail4" className="link flex">
                  <div className="StoreDetail_left_Btm_SelectBox_Item">{t("storedetail_info")}</div>
                </Link>
              </div>

              {/* <div className=''></div> */}

              <div className="StoreDetail_left_Btm_imgBox2">
                <img className="StoreDetail_left_Btm_imgBoxItem" src="https://i.imgur.com/yFXnI7Y.jpg" alt="" />
              </div>
              <br />
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">SYLK의 Signet Ring Art Class에서는</div>
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">여러가지 텍스쳐링 기법을</div>
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">시도해볼거예요.</div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="StoreDetail_right_Btm_imgBoxTitle">
                <h3>1. 헤어라인 텍스쳐링</h3>
              </div>
              <br />
              <div className="StoreDetail_left_Btm_imgBox2">
                <img className="StoreDetail_left_Btm_imgBoxItem" src="https://i.imgur.com/9p0bK1g.png" alt="" />
              </div>
              <br />
              <div className="StoreDetail_left_Btm_imgBox2">
                <img className="StoreDetail_left_Btm_imgBoxItem" src="https://i.imgur.com/jgv754h.png" alt="" />
              </div>
              <br />
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">왁스 줄을 활용하여</div>
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">러스틱한 텍스쳐를 표현합니다</div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="StoreDetail_right_Btm_imgBoxTitle">
                <h3>2. 조각 텍스쳐링</h3>
              </div>
              <br />
              <div className="StoreDetail_left_Btm_imgBox2">
                <img className="StoreDetail_left_Btm_imgBoxItem" src="https://i.imgur.com/lAOO2jz.png" alt="" />
              </div>
              <br />
              <div className="StoreDetail_left_Btm_imgBox2">
                <img className="StoreDetail_left_Btm_imgBoxItem" src="https://i.imgur.com/4qvRMyM.png" alt="" />
              </div>
              <br />
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">보석의 결정 형태나</div>
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">돌, 나무와 같은</div>
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">자연물의 질감을 흉내낸</div>
              <br />
              <div className="StoreDetail_left_Btm_imgBoxText">텍스쳐도 표현 가능해요.</div>
              <br />
              <br />
            </div>
          </div>

          <div className="StoreDetail_Right">
            <div className="StoreDetail_Right_Wrapper">
              <div className="StoreDetail_Right_Top">{t("storedetail_reco")}</div>

              <div className="StoreDetail_Right_Btm">
                <StoreRecoProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreDetail;
