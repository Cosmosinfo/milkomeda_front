import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function StageCard() {
  return (
    <>
      <StyleLink to="/StreamLive" style={{ textDecoration: "none" }}>
        <StageTop>
          <img src="https://i.imgur.com/Vkuhwil.jpg" alt="" />
        </StageTop>
        <StageBtm>
          <StageBtmLeft>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          </StageBtmLeft>
          <StageBtmRight>
            <StageNameBox>
              <StageNameBoxArtistTitle>I have gotta feelin like</StageNameBoxArtistTitle>
            </StageNameBox>
            <StageNameBoxArtistNameBox>
              <StageNameBoxArtistName>러블레스(Lubless) X 투영(To.young)</StageNameBoxArtistName>
            </StageNameBoxArtistNameBox>
          </StageBtmRight>
        </StageBtm>
      </StyleLink>
    </>
  );
}

const StyleLink = styled(Link)`
  flex: 1;
  flex-basis: calc(25% - 24px);
`;

const StageTop = styled.div`
  /* width: 386px; */
  /* height: 218px; */
  border-radius: 6px;
  /* background-color: #191922; */
  aspect-ratio: 386/218;
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

const StageBtm = styled.div`
  height: 46px;
  overflow: hidden;
  display: flex;
  margin-top: 12px;
`;

const StageBtmLeft = styled.div`
  width: 46px;
  height: 46px;
  img {
    width: 46px;
    height: 46px;
    border-radius: 100px;
    cursor: pointer;
  }
`;

const StageBtmRight = styled.div`
  /* width: 90px; */
  /* height: 40px; */
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const StageNameBox = styled.div`
  overflow: hidden;
`;

const StageNameBoxArtistTitle = styled.span`
  /* width : 93px; */
  width: 21px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const StageNameBoxArtistNameBox = styled.div`
  /* width : 93px; */
  height: 21px;
`;

const StageNameBoxArtistName = styled.span`
  /* width : 93px; */
  width: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #8b8999;
  /* white-space: nowrap; */
`;

export default StageCard;
