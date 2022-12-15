import React from "react";
import styled from "styled-components";
// import edit from "../../assets/icon/graw/edit-2.svg";
// import myshop from "../../assets/icon/graw/shopping-cart.svg";
import setting from "../../assets/icon/graw/settings.svg";
import user from "../../assets/icon/signup/user 1.svg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyPage(open) {
  const { t } = useTranslation();
  const admin = useSelector((state) => state.Auth.admin);
  const navigate = useNavigate();

  if (!open) {
    return null;
  }

  const onClickLogout = () => {
    window.localStorage.clear();
    window.location.replace("/");
  };

  const adminPath = () => {
    navigate("/setting");
  };

  return (
    <>
      <PopWrapper>
        <PopHeader>
          <PopHeaderContainer>
            <PopHeaderImgbox>
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </PopHeaderImgbox>
            <PopHeaderTextbox>
              <PopHeaderTextboxUn>{t("popup_mypage1")}</PopHeaderTextboxUn>
              <PopHeaderTextboxSb>Subscribing</PopHeaderTextboxSb>
            </PopHeaderTextbox>
          </PopHeaderContainer>
        </PopHeader>
        <PopFooter>
          <PopFooterContainer>
            <PopFooterContent>
              {/* <PopFooterContentItem>
                <img src={edit} alt="edit" />
                <PopFooterContentItemText>{t("popup_mypage2")}</PopFooterContentItemText>
              </PopFooterContentItem>
              <PopFooterContentItem>
                <img src={myshop} alt="myshop" />
                <PopFooterContentItemText>{t("popup_mypage3")}</PopFooterContentItemText>
              </PopFooterContentItem> */}
              {admin === "1" && (
                <PopFooterContentItem onClick={adminPath}>
                  <img src={setting} alt="setting" />
                  <PopFooterContentItemText>{t("popup_mypage4")}</PopFooterContentItemText>
                </PopFooterContentItem>
              )}
              <PopFooterContentItem onClick={onClickLogout}>
                <img src={user} alt="logout" />
                <PopFooterContentItemText>{t("popup_mypage5")}</PopFooterContentItemText>
              </PopFooterContentItem>
            </PopFooterContent>
          </PopFooterContainer>
        </PopFooter>
      </PopWrapper>
    </>
  );
}

const PopWrapper = styled.div`
  width: 250px;
  height: auto;
  background: #191922;
  border-radius: 10px;
  box-sizing: border-box;
  position: absolute;
  transform: translate3d(30px, 3px, 0px);
`;

const PopHeader = styled.div`
  width: 100%;
  height: 86px;
  border-bottom: 1px solid rgba(139, 137, 153, 0.2);
`;

const PopHeaderContainer = styled.div`
  /* width: 151px; */
  height: 42px;
  padding: 22px 22px 22px 24px;
  align-items: center;
  display: flex;
`;

const PopHeaderImgbox = styled.div`
  width: 30px;
  height: 30px;
  margin-top: 6px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    cursor: pointer;
  }
`;

const PopHeaderTextbox = styled.div`
  /* width: 97px; */
  height: 42px;
  margin-left: 24px;
`;

const PopHeaderTextboxUn = styled.div`
  width: 100%;
  height: 26px;
  font-style: normal;
  font-weight: 400;
  font-size: 17.5px;
  line-height: 26px;
  color: #ffffff;
  margin-bottom: 3px;
`;

const PopHeaderTextboxSb = styled.div`
  /* width: 59px;  */
  height: 13px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  color: #f3017f;
`;

const PopFooter = styled.div`
  width: 100%;
  height: 144px;
`;

const PopFooterContainer = styled.div`
  width: 60%;
  height: 120px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const PopFooterContent = styled.div`
  height: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const PopFooterContentItem = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #8b8999;
  background: #191922;
  border: none;
  img {
    width: 20px;
    height: 20px;
    margin: 0 29px;
    vertical-align: middle;
  }
`;

const PopFooterContentItemText = styled.span`
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

export default MyPage;
