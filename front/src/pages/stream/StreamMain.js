import { React, useState, useRef, useEffect } from "react";
import "../../assets/css/Stream/StreamMain.css";
import filter from "../../assets/icon/graw/filter.svg";
import StageCard from "../../components/StageCard/StageCard";
import { Link } from "react-router-dom";
import StreamSort from "../../components/Popup/StreamSort";
import Topbar from "../../components/topbar/Topbar";
import Topbar2 from "../../components/topbar/Topbar2";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function StreamMain() {
  // 다국어
  const { t } = useTranslation();
  const dropdownRef = useRef(null);
  const curRef = useRef(true);

  const [openSort, setOpenSort] = useState(false);
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getLiveData();
  }, []);

  const getLiveData = async () => {
    await axios.get("http://52.53.207.20:8080/api/main/mainInfo").then((res) => setData(res.data.stageStartInfo));
  };

  useEffect(() => {
    console.log("useEffect");
    const pageClickEvent = (e) => {
      if (curRef.current) {
        curRef.current = false;
        return;
      } else {
        curRef.current = true;
      }

      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setOpenSort(!openSort);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (openSort) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [openSort]);

  const tokenPath = (data) => {
    if (token !== "Test") {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다");
    } else {
      navigate(`/streamLive/${data}`, { stageStreamKey: data });
    }
  };

  return (
    <>
      {token === "Test" ? <Topbar /> : <Topbar2 />}
      <div className="StreamMain">
        <div className="StreamMain_Wrapper">
          <div className="StreamMain_Top">
            <ul className="StreamMain_Top_lf">
              <Link to="/stream" className="link">
                <li className="StreamMain_Stage">
                  <span className="StreamMain_Live">{t("stream_live")}</span>&nbsp;{t("stream_stage")}
                </li>
              </Link>
              {/* <Link to="/streamup" className="Stream_link">
                <li className="StreamMain_LiveStage_us">{t("stream_up")}</li>
              </Link>

              <Link to="/streampv" className="Stream_link">
                <li className="StreamMain_LiveStage_ps">{t("stream_pre")}</li>
              </Link> */}
            </ul>
            <div className="StreamMain_Top_Rh">
              <div className="Stream_LiveStage_filter">
                <img className="Stream_LiveStage_filterIcon" src={filter} alt="filter" />
                <button
                  className="Stream_LiveStage_filter_text"
                  onClick={() => {
                    setOpenSort(!openSort);
                    curRef.current = true;
                  }}
                >
                  {t("stream_sort")}
                </button>

                <nav ref={dropdownRef} className={`Stream_menus ${openSort ? "active" : "inactive"}`}>
                  <StreamSort />
                </nav>
              </div>
            </div>
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
          <div className="StreamMain_btm">
            <StageCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default StreamMain;
