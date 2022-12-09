import { React, useState, useRef, useEffect } from "react";
import "../../assets/css/Store/StoreMain.css";
import filter from "../../assets/icon/graw/filter.svg";
import StoreMainCard from "../../components/Store/StoreMainCard";
import StoreBanner from "../../components/Carousel/StoreBanner";
import StoreSort from "../../components/Popup/StoreSort";
import Topbar from "../../components/topbar/Topbar";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
// import { jwtUtils } from "../../utils/jwtUtils";
import { useSelector } from "react-redux";

function StoreMain() {
  const { t } = useTranslation();
  const token = useSelector((state) => state.Auth.token);

  const data = [
    t("storemain_cate_1"),
    t("storemain_cate_2"),
    t("storemain_cate_3"),
    t("storemain_cate_4"),
    t("storemain_cate_5"),
    t("storemain_cate_6"),
  ];

  const dropdownRef = useRef(null);
  const curRef = useRef(true);

  const [openstSort, setOpenstSort] = useState(false);
  const [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
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
        setOpenstSort(!openstSort);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (openstSort) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [openstSort]);

  if (token !== "Test") {
    alert("로그인이 필요한 페이지입니다");
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Topbar />
      <div className="StoreMain">
        <div className="StoreMain_Wrapper">
          <div className="StoreMain_banner">
            <div className="StoreMain_banner_left">
              <StoreBanner />
            </div>
            <div className="StoreMain_banner_right">
              <img className="StoreMain_banner_right_img" src="https://i.imgur.com/80TJXTf.jpg" alt="" />
            </div>
          </div>

          {/* 추후 링크 연결 필요? */}
          <div className="StoreMain_Category">
            <div className="StoreMain_Category_lf">
              {data.map((item, idx) => {
                return (
                  <>
                    <button
                      value={idx}
                      // eslint-disable-next-line
                      className={"StoreMain_Category_Item" + (idx == btnActive ? " active" : "")}
                      onClick={toggleActive}
                    >
                      {item}
                    </button>
                  </>
                );
              })}
            </div>

            <div className="StoreMain_Category_Rh">
              <div className="StoreMain_Category_filter">
                <img className="StoreMain_Category_filterIcon" src={filter} alt="filter" />
                {/* <span className="StoreMain_Category_filter_text">정렬</span> */}
                <button
                  className="StoreMain_Category_filter_text"
                  onClick={() => {
                    setOpenstSort(!openstSort);
                    curRef.current = true;
                  }}
                >
                  {t("stream_sort")}
                </button>

                <nav ref={dropdownRef} className={`Store_menus ${openstSort ? "active" : "inactive"}`}>
                  <StoreSort />
                </nav>
              </div>
            </div>
          </div>

          <div className="StoreMain_Content">
            {/* <StoreCategory /> */}

            <StoreMainCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreMain;
