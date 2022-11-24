import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function LiveMessageBox() {
  const { t } = useTranslation();

  return (
    <>
      <StreamLiveRightbtm>
        <StreamLiveChatBox>
          <StreamLiveChatBoxUserName>
            <StreamLiveChatBoxUserNameImg>
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            </StreamLiveChatBoxUserNameImg>
            <StreamLiveChatBoxUserNameText>{t("streamcb_usermain")}</StreamLiveChatBoxUserNameText>
            <StreamLiveChatBoxtimeText>17:00</StreamLiveChatBoxtimeText>
          </StreamLiveChatBoxUserName>
          <StreamLiveChatBoxChatContainer>
            <StreamLiveChatBoxChatContainerText>Lorem ipsum dolor sit amet, consectetur adipiscing elit</StreamLiveChatBoxChatContainerText>
          </StreamLiveChatBoxChatContainer>
        </StreamLiveChatBox>
      </StreamLiveRightbtm>
    </>
  );
}

const StreamLiveRightbtm = styled.div`
  /* width: 308px;
    height: 108px; */
  padding: 12px 0;
`;

const StreamLiveChatBox = styled.div`
  /* width: 308px; */
  height: 100%;
`;

const StreamLiveChatBoxUserName = styled.div`
  /* width: 100%; */
  height: 30px;
  display: flex;
`;

const StreamLiveChatBoxUserNameImg = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    cursor: pointer;
  }
`;

const StreamLiveChatBoxUserNameText = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  /* identical to box height */
  color: #ffffff;
`;

const StreamLiveChatBoxtimeText = styled.div`
  /* width : 100%; */
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  /* identical to box height */
  text-align: right;
  color: #8b8999;
`;

const StreamLiveChatBoxChatContainer = styled.div`
  /* width: 100%; */
  height: 70px;
  margin-top: 12px;
  background: #15141b;
  border-radius: 6px;
`;

const StreamLiveChatBoxChatContainerText = styled.div`
  box-sizing: border-box;
  padding: 12px 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  color: #ffffff;
`;

export default LiveMessageBox;
