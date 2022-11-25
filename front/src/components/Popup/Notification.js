import React from "react";
import "./Notification.css";

function Notification() {
  return (
    <>
      <NotiPopWrapper>
        <NotiContentItem>
          <NotiContentItemTop>Lorem ipsum</NotiContentItemTop>
          <NotiContentItemBtm>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NotiContentItemBtm>
        </NotiContentItem>
        <NotiContentItem2>
          <NotiContentItemTop>Lorem ipsum</NotiContentItemTop>
          <NotiContentItemBtm>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NotiContentItemBtm>
        </NotiContentItem2>
        <NotiContentItem2>
          <NotiContentItemTop>Lorem ipsum</NotiContentItemTop>
          <NotiContentItemBtm>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NotiContentItemBtm>
        </NotiContentItem2>
        <NotiContentItem2>
          <NotiContentItemTop>Lorem ipsum</NotiContentItemTop>
          <NotiContentItemBtm>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NotiContentItemBtm>
        </NotiContentItem2>
        <NotiContentItem2>
          <NotiContentItemTop>Lorem ipsum</NotiContentItemTop>
          <NotiContentItemBtm>Lorem ipsum dolor sit amet, consectetur adipiscing elit</NotiContentItemBtm>
        </NotiContentItem2>
      </NotiPopWrapper>
    </>
  );
}

const NotiPopWrapper = styled.div`
  width: 250px;
  height: auto;
  background: #191922;
  border-radius: 10px;
  box-sizing: border-box;
`;

const NotiContentItem = styled.div`
  /* width: 181px; */
  height: 57px;
  padding: 12px 12px 11px 24px;
  cursor: pointer;
  color: #8b8999;
  &:hover {
    color: #ffffff;
  }
`;

const NotiContentItem2 = styled.div`
  /* width: 181px; */
  height: 57px;
  cursor: pointer;
  padding: 12px 12px 11px 24px;
  border-top: 1px solid rgba(139, 137, 153, 0.2);
  color: #8b8999;
  &:hover {
    color: #ffffff;
  }
`;

const NotiContentItemTop = styled.div`
  width: 100%;
  height: 17px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
`;

const NotiContentItemBtm = styled.div`
  /* width: 181px; */
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
`;

export default Notification;
