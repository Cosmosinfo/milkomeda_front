import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ArtistMainCard() {
  return (
    <>
      <ArtistMain_ContentItem>
        <Link to="/artisthome" style={{ textDecoration: "none" }}>
          <ArtistMain_ContentItemContainer>
            <ArtistMain_ContentItemContainerTop>
              <img src="https://i.imgur.com/PWcLqjm.jpg" alt="" />
            </ArtistMain_ContentItemContainerTop>
            <ArtistMain_ContentItemContainerBtm>
              <ArtistMain_ContentItemContainerBtmArtistName>Lubless Official</ArtistMain_ContentItemContainerBtmArtistName>
              <ArtistMain_ContentItemContainerBtmMusic>Indie music</ArtistMain_ContentItemContainerBtmMusic>
            </ArtistMain_ContentItemContainerBtm>
          </ArtistMain_ContentItemContainer>
        </Link>
      </ArtistMain_ContentItem>
    </>
  );
}

const ArtistMain_ContentItem = styled.div`
  /* width: 387px;
    height: 100%; */
  background: #191922;
  border-radius: 6px;
  flex-basis: calc(25% - 18px);
  &:last-of-type {
    margin: 0;
  }
`;

const ArtistMain_ContentItemContainer = styled.div`
  /* display: flex;
    height: 162px; */
  padding: 36px 0;
  /* flex-direction: column;
    align-items: center; */
`;
const ArtistMain_ContentItemContainerTop = styled.div`
  width: 25%;
  margin: auto;
  border-radius: 100%;
  /* background: #8B8999; */
  aspect-ratio: 100/100;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;
const ArtistMain_ContentItemContainerBtm = styled.div`
  /* height: 21px; */
  margin-top: 12px;
`;
const ArtistMain_ContentItemContainerBtmArtistName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`;
const ArtistMain_ContentItemContainerBtmMusic = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;
  color: #8b8999;
`;

export default ArtistMainCard;
