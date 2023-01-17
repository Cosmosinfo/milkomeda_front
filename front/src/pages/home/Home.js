// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "../../assets/css/Main/Home.css";
import HomeBanner from "../../components/Carousel/HomeBanner";
// import chevron from "../../assets/icon/ping//chevron-down.svg";
import ArtistNameCard from "../../components/ArtistNameCard/ArtistNameCard";
import ArtistNameCard1 from "../../components/ArtistNameCard/ArtistNameCard1";
import ArtistNameCard2 from "../../components/ArtistNameCard/ArtistNameCard2";
import ArtistNameCard3 from "../../components/ArtistNameCard/ArtistNameCard3";
import ArtistNameCard4 from "../../components/ArtistNameCard/ArtistNameCard4";
import ArtistNameCard5 from "../../components/ArtistNameCard/ArtistNameCard5";
// import StageCard from '../../components/StageCard/StageCard';
// import { Link } from "react-router-dom";
// import StageCardData from "../../Data/StageCardData";
import Topbar2 from "../../components/topbar/Topbar2";
import Topbar from "../../components/topbar/Topbar";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const artists = [
//   {
//     id: 1,
//     imgUrl: "/assets/icon/lubbless_poster.png",
//     logo: "/assets/icon/lubbless.png",
//     name: "Lubbless",
//     type: "Synth POP, EDM",
//   },
//   {
//     id: 2,
//     imgUrl: "/assets/icon/nekiru_poster.png",
//     logo: "/assets/icon/nekiru.png",
//     name: "Nekiru",
//     type: "Synth Rock",
//   },
//   {
//     id: 3,
//     imgUrl: "/assets/icon/Tiech_poster.png",
//     logo: "/assets/icon/tiech.png",
//     name: "Tiech",
//     type: "Hard Rock",
//   },
//   {
//     id: 4,
//     imgUrl: "/assets/icon/Deathdate_poster.png",
//     logo: "/assets/icon/deathdate.png",
//     name: "Death Date",
//     type: "Metal",
//   },
//   {
//     id: 5,
//     imgUrl: "/assets/icon/Clitz_poster.png",
//     logo: "/assets/icon/clitz.png",
//     name: "C.LITZ",
//     type: "Metal",
//   },
//   {
//     id: 6,
//     imgUrl: "/assets/icon/lucidream_poster.png",
//     logo: "/assets/icon/Lucidream.png",
//     name: "Luci Dream",
//     type: "Hard Rock, Synth Rock",
//   },
// ];

function Home() {
  // 다국어처리
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = useState(null);

  // eslint-disable-next-line
  // const [noOfElement, setnoOfElement] = useState(4);
  // const [noOfElement2, setnoOfElement2] = useState(4);
  // const [moreBtn, setMoreBtn] = useState()

  const tokenPath = (data) => {
    if (token !== "Test") {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다");
    } else {
      navigate(`/streamLive?streamKey=${data}`);
    }
  };

  useEffect(() => {
    getLiveData();
  }, []);

  const getLiveData = async () => {
    await axios.get("http://52.53.207.20:8080/api/main/mainInfo").then((res) => setData(res.data.stageStartInfo));
  };

  // const [btnActive, setBtnActive] = useState("");

  // const toggleActive = (e) => {
  //   setBtnActive((prev) => {
  //     return e.target.value;
  //   });
  // };

  // const more = StageCardData.cardData.slice(0, noOfElement);
  // const more2 = StageCardData.cardData.slice(0, noOfElement2);

  // function loadmore() {
  //   setnoOfElement(noOfElement + noOfElement);
  // }

  // function loadmore2() {
  //   setnoOfElement2(noOfElement2 + noOfElement2);
  // }

  // function Btnchevron() {
  //   if (noOfElement > 4) {
  //     return <div className="hr-sects"> </div>;
  //   } else {
  //     return (
  //       <div className="show-more">
  //         <div className="hr-left"></div>
  //         <div className="hr-middle">
  //           <button className="more_btn" onClick={() => loadmore()}>
  //             <spen className="hr-sect_more">{t("home_more")}</spen>
  //             <img className="chevron" src={chevron} alt="chevron" />
  //           </button>
  //         </div>

  //         <div className="hr-right"></div>
  //       </div>
  //     );
  //   }
  // }

  // function Btnchevron2() {
  //   if (noOfElement2 > 4) {
  //     return <div className="hr-sects2"> </div>;
  //   } else {
  //     return (
  //       <div className="show-more">
  //         <div className="hr-left"></div>
  //         <div className="hr-middle">
  //           <button className="more_btn" onClick={() => loadmore2()}>
  //             <spen className="hr-sect_more">{t("home_more")}</spen>
  //             <img className="chevron" src={chevron} alt="chevron" />
  //           </button>
  //         </div>

  //         <div className="hr-right"></div>
  //       </div>
  //     );
  //   }
  // }
  return (
    <>
      {token === "Test" ? <Topbar /> : <Topbar2 />}
      <div className="home">
        <div className="homeWrapper">
          {/* ====================  Carousel  ======================== */}
          <HomeBanner />
          {/* ====================  New Artist  ======================== */}
          <div className="home_newArtist">
            <span className="home_newArtistTitle">{t("home_newartist")}</span>

            <div className="home_newArtistItem">
              <ArtistNameCard />

              <ArtistNameCard1 />

              <ArtistNameCard2 />

              <ArtistNameCard3 />

              <ArtistNameCard4 />

              <ArtistNameCard5 />
            </div>
          </div>
          {/* ====================  Live Stage  ======================== */}
          <div className="home_LiveStage">
            <div className="home_LiveStage_Title">
              <p className="home_Stage">
                <span className="home_Live">{t("home_live")}</span> {t("home_stage")}
              </p>
            </div>
            {data && (
              <div className="home_LiveStage_Container">
                {data.map((data, index) => (
                  <div key={index} className="link home_stageCard" onClick={() => tokenPath(data.stageStreamKey)}>
                    <div className="home_Stage_Top">
                      <img src={data.stageThumbnailImage} className="home_Stage_Top_thumbnailImg" alt="" />
                    </div>
                    <div className="home_Stage_btm">
                      <div className="home_Stage_btm_Left">
                        <img src={data.stageThumbnailImage} className="home_Stage_Artist_img" alt="" />
                      </div>
                      <div className="home_Stage_btm_Right">
                        <div className="home_Stage_NameBox">
                          <span className="home_Stage_NameBox_ArtistTitle">{data.stageTitle}</span>
                        </div>
                        <div className="home_Stage_NameBox_ArtistName_Box">
                          <span className="home_Stage_NameBox_ArtistName">{data.stageDescription}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* {Btnchevron()} */}
          {/* ====================  Upcoming Stage  ======================== */}
          {/* <div className="home_UpComing_Stage">
            <div className="home_UpComing_Stage_title">{t("home_upcoming")}</div>

            <div className="home_UpComingStage_Container">
              {more2.map((item, index) => {
                return (
                  <Link to="/StreamLive" className="link home_stageCard">
                    <div className="home_Stage_Top">
                      <img src={item.youtubethumbnail} className="home_Stage_Top_thumbnailImg" alt="" />
                    </div>

                    <div className="home_Stage_btm">
                      <div className="home_Stage_btm_Left">
                        <img src={item.img} className="home_Stage_Artist_img" alt="" />
                      </div>
                      <div className="home_Stage_btm_Right">
                        <div className="home_Stage_NameBox">
                          <span className="home_Stage_NameBox_ArtistTitle">{item.title}</span>
                        </div>
                        <div className="home_Stage_NameBox_ArtistName_Box">
                          <span className="home_Stage_NameBox_ArtistName">{item.artistName}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div> */}
          {/* {Btnchevron2()} */}
        </div>
      </div>
    </>
  );
}

export default Home;
