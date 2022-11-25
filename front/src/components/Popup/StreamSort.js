import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function StreamSort() {
  const { t } = useTranslation();

  return (
    <>
      <StreamSortPopWrapper>
        <StreamSortContentItem>
          <StreamSortContentItemText>{t("streamsort_user")}</StreamSortContentItemText>
        </StreamSortContentItem>
        <StreamSortContentItem>
          <StreamSortContentItemText>{t("streamsort_artist")}</StreamSortContentItemText>
        </StreamSortContentItem>
      </StreamSortPopWrapper>
    </>
  );
}

const StreamSortPopWrapper = styled.div`
  /* width: 100px; */
  height: auto;
  background: #191922;
  border-radius: 10px;
  box-sizing: border-box;
`;

const StreamSortContentItem = styled.div`
  /* width: 100%; */
  height: 40px;
  border-top: 1px solid rgba(139, 137, 153, 0.2);
  color: #ffffff;
  display: flex;
  justify-content: center;
  &::first-of-type {
    border: none;
    display: flex;
    justify-content: center;
  }
`;

const StreamSortContentItemText = styled.div`
  /* width: 100%; */
  height: 17px;
  cursor: pointer;
  padding: 12px 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
`;

export default StreamSort;
