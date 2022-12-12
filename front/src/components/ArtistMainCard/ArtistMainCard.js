import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ArtistMainCard() {
  return (
    <>
      <ArtistMainContentItem>
        <Link to="/artisthome" style={{ textDecoration: "none" }}>
          <ArtistMainContentItemContainer>
            <ArtistMainContentItemContainerTop>
              <img src="https://i.imgur.com/PWcLqjm.jpg" alt="" />
            </ArtistMainContentItemContainerTop>
            <ArtistMainContentItemContainerBtm>
              <ArtistMainContentItemContainerBtmArtistName>Lubless Official</ArtistMainContentItemContainerBtmArtistName>
              <ArtistMainContentItemContainerBtmMusic>Indie music</ArtistMainContentItemContainerBtmMusic>
            </ArtistMainContentItemContainerBtm>
          </ArtistMainContentItemContainer>
        </Link>
      </ArtistMainContentItem>
    </>
  );
}

const ArtistMainContentItem = styled.div`
  /* width: 387px;
    height: 100%; */
  background: #191922;
  border-radius: 6px;
  flex-basis: calc(25% - 18px);
  &:last-of-type {
    margin: 0;
  }
`;

const ArtistMainContentItemContainer = styled.div`
  /* display: flex;
    height: 162px; */
  padding: 36px 0;
  /* flex-direction: column;
    align-items: center; */
`;
const ArtistMainContentItemContainerTop = styled.div`
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
const ArtistMainContentItemContainerBtm = styled.div`
  /* height: 21px; */
  margin-top: 12px;
`;
const ArtistMainContentItemContainerBtmArtistName = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
`;
const ArtistMainContentItemContainerBtmMusic = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;
  color: #8b8999;
`;

export default ArtistMainCard;
