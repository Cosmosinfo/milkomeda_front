import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ArtistNameCard() {
  const { t } = useTranslation();

  return (
    <>
      <StyledLink to="/artisthome" style={{ textDecoration: "none" }}>
        <NewArtistItemContainer>
          <NewArtistItemContainerBox>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <NewArtistItemContainerRight>
              <NewArtistItemContainerNameBox>
                <NewArtistItemContainerArtistName>러블레스</NewArtistItemContainerArtistName>
              </NewArtistItemContainerNameBox>
              <NewArtistItemContainerMusicGenreBox>
                <NewArtistItemContainerMusicGenre>{t("home_Genre")}</NewArtistItemContainerMusicGenre>
              </NewArtistItemContainerMusicGenreBox>
            </NewArtistItemContainerRight>
          </NewArtistItemContainerBox>
        </NewArtistItemContainer>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  flex: 1;
`;

const NewArtistItemContainer = styled.div`
  /* width: 249.5px; */
  height: 100%;
  border-radius: 6px;
  background-color: #191922;
  display: flex;
  /* margin-right: 24px; */
`;

const NewArtistItemContainerBox = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 12px 12px 14px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    cursor: pointer;
    align-self: center;
  }
`;

const NewArtistItemContainerRight = styled.div`
  width: 100%;
  margin-left: 13px;
`;

const NewArtistItemContainerNameBox = styled.div`
  /* width : 93px; */
  height: 21px;
  /* margin: 20px 62px 0px 13px; */
  margin-top: 11px;
`;

const NewArtistItemContainerArtistName = styled.span`
  width: 93px;
  width: 21px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`;

const NewArtistItemContainerMusicGenreBox = styled.div`
  width: 93px;
  height: 21px;
`;

const NewArtistItemContainerMusicGenre = styled.span`
  width: 93px;
  width: 21px;
  font-size: 14px;
  font-weight: 400;
  color: #8b8999;
`;

export default ArtistNameCard;
