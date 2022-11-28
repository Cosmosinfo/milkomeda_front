import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function ArtistSort() {
  const { t } = useTranslation();

  return (
    <>
      <ArtistSortPopWrapper>
        <ArtistSortContentItem>
          <ArtistSortContentItemText>{t("artistsort_elec")}</ArtistSortContentItemText>
        </ArtistSortContentItem>
        <ArtistSortContentItem>
          <ArtistSortContentItemText>{t("artistsort_hip")}</ArtistSortContentItemText>
        </ArtistSortContentItem>
        <ArtistSortContentItem>
          <ArtistSortContentItemText>{t("artistsort_metal")}</ArtistSortContentItemText>
        </ArtistSortContentItem>
        <ArtistSortContentItem>
          <ArtistSortContentItemText>{t("artistsort_rb")}</ArtistSortContentItemText>
        </ArtistSortContentItem>
        <ArtistSortContentItem>
          <ArtistSortContentItemText>{t("artistsort_jazz")}</ArtistSortContentItemText>
        </ArtistSortContentItem>
        <ArtistSortContentItem>
          <ArtistSortContentItemText>{t("artistsort_pop")}</ArtistSortContentItemText>
        </ArtistSortContentItem>
      </ArtistSortPopWrapper>
    </>
  );
}

const ArtistSortPopWrapper = styled.div`
  /* width: 100px; */
  height: auto;
  background: #191922;
  border-radius: 10px;
  box-sizing: border-box;
`;

const ArtistSortContentItem = styled.div`
  /* width: 100%; */
  height: 40px;
  border-top: 1px solid rgba(139, 137, 153, 0.2);
  color: #ffffff;
  display: flex;
  justify-content: center;
  &:first-of-type {
    border: none;
    display: flex;
    justify-content: center;
  }
`;

const ArtistSortContentItemText = styled.div`
  /* width: 100%; */
  height: 17px;
  padding: 12px 12px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
`;

export default ArtistSort;
