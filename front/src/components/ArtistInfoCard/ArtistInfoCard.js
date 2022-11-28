import React from "react";
import styled from "styled-components";
import Instagram from "../../assets/icon/graw/instagram.svg";
import Facebook from "../../assets/icon/graw/facebook.svg";
import Twitter from "../../assets/icon/graw/twitter.svg";
import Youtube from "../../assets/icon/graw/youtube.svg";
import Global from "../../assets/icon/graw/globe-w.svg";

import { useTranslation } from "react-i18next";

function ArtistInfoCard() {
  const { t } = useTranslation();

  const In = "https://www.instagram.com/lubless_official/";
  const Fb = "https://www.facebook.com/LublessOfficial/";
  const Tw = "https://twitter.com/lublessofficial";
  const Yt = "https://www.youtube.com/c/Lublessofficial";
  const Gb = "https://www.lublessofficial.com/";
  return (
    <>
      <ArtistInfoCard_Lf>
        <ArtistInfoCard_Lf_Wrapper>
          <ArtistInfoCard_top>
            <ArtistInfoCard_ArtistImg>
              <img src="https://i.imgur.com/PWcLqjm.jpg" alt="" />
            </ArtistInfoCard_ArtistImg>
            <ArtistInfoCard_ArtistNameBox>
              <ArtistInfoCard_ArtistName>Lubless Official</ArtistInfoCard_ArtistName>
              <ArtistInfoCard_ArtistName2>리나 (보컬), 제이 (베이스), 봉우 (기타)</ArtistInfoCard_ArtistName2>
              <ArtistInfoCard_MusicGenre>Indie music</ArtistInfoCard_MusicGenre>
            </ArtistInfoCard_ArtistNameBox>
            <ArtistInfoCard_ArtistSnsBox>
              <ArtistInfoCard_ArtistSns
                onClick={() => {
                  window.open(In);
                }}
              >
                <img src={Instagram} alt="Instargram" />
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns
                onClick={() => {
                  window.open(Fb);
                }}
              >
                <img src={Facebook} alt="Facebook"></img>
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns
                onClick={() => {
                  window.open(Tw);
                }}
              >
                <img src={Twitter} alt="Twitter" />
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns
                onClick={() => {
                  window.open(Yt);
                }}
              >
                <img src={Youtube} alt="Youtube" />
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns
                onClick={() => {
                  window.open(Gb);
                }}
              >
                <img src={Global} alt="Global" />
              </ArtistInfoCard_ArtistSns>
            </ArtistInfoCard_ArtistSnsBox>
            <ArtistInfoCard_ArtistFollwer>{t("artistcard_follow")} 97</ArtistInfoCard_ArtistFollwer>
            <ArtistInfoCard_ArtistFavoriteBox>
              <ArtistInfoCard_ArtistFavoriteText>{t("artistcard_favar")}</ArtistInfoCard_ArtistFavoriteText>
            </ArtistInfoCard_ArtistFavoriteBox>
            <ArtistInfoCard_Artist_Line></ArtistInfoCard_Artist_Line>
            <ArtistInfoCard_Artistdescription>
              <div>𝕝𝕦𝕤𝕥 𝕓𝕝𝕖𝕤𝕤 𝕪𝕠𝕦 💔 𝕗𝕠𝕝𝕝𝕠𝕨 𝕪𝕠𝕦𝕣 𝕙𝕖𝕒𝕣𝕥</div>
              <br />
              <div>{t("artistcard_descrip")}</div>
              <br />
              <div>💜Lubless X to.young - I’ve gotta feelin’ like🖤</div>
              <div>🌖I’ve gotta feelin’ like (Lyric video)✨</div>
            </ArtistInfoCard_Artistdescription>
          </ArtistInfoCard_top>
          {/* <div className='ArtistInfoCard_btm'>
            <div className='ArtistInfoCard_ArtistMetaBox'>
              <div className='ArtistInfoCard_ArtistMetaText'>
                아티스트 메타버스로 이동하기
              </div>
            </div>
          </div> */}
        </ArtistInfoCard_Lf_Wrapper>
      </ArtistInfoCard_Lf>
    </>
  );
}

const ArtistInfoCard_Lf = styled.div`
  background: #191922;
  /* height: 100%; */
  border-radius: 10px;
  /* padding: 24px 32px; */
  flex: 1 1;
`;

const ArtistInfoCard_Lf_Wrapper = styled.div`
  height: 807px;
  /* position: relative; */
  display: flex;
  padding: 25px 32px;
  flex-direction: column;
  justify-content: space-between;
`;

const ArtistInfoCard_top = styled.div``;

const ArtistInfoCard_ArtistImg = styled.div`
  /* width: 276px; */
  /* height: 176px;
     */
  /* background: #8B8999; */
  border-radius: 6px;
  margin: 0 0 12px 0;
  aspect-ratio: 276/176;
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

const ArtistInfoCard_ArtistNameBox = styled.div`
  width: 100%;
  /* height: 84px; */
  padding: 0 0 12px 0; ;
`;

const ArtistInfoCard_ArtistName = styled.div`
  height: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 6px;
  color: #ffffff;
`;

const ArtistInfoCard_ArtistName2 = styled.div`
  height: 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #8b8999;
  margin: 0 0 12px 0;
`;

const ArtistInfoCard_MusicGenre = styled.div`
  height: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #8b8999;
`;

const ArtistInfoCard_ArtistSnsBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
  gap: 12px;
`;

const ArtistInfoCard_ArtistSns = styled.button`
  width: 40px;
  height: 40px;
  background: #15141b;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
    padding: 10px 10px;
  }
`;

const ArtistInfoCard_ArtistFollwer = styled.div`
  height: 21px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #8b8999;
  padding: 0 0 12px 0;
`;

const ArtistInfoCard_ArtistFavoriteBox = styled.div`
  /* width: 138px; */
  height: 42px;
  display: flex;
  /* padding: 0 60px 12px; */
  justify-content: center;
`;

const ArtistInfoCard_ArtistFavoriteText = styled.div`
  /* width: 57px; */
  height: 22px;
  background: #15141b;
  border-radius: 100px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 10px 40px;
  color: #ffffff;
  cursor: pointer;
`;

const ArtistInfoCard_Artist_Line = styled.div`
  background: #8b8999;
  opacity: 20%;
  height: 1px;
  margin: 12px 0;
`;

const ArtistInfoCard_Artistdescription = styled.div`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  padding: 0 0 12px 0;
  color: #ffffff;
`;

// const ArtistInfoCard_ArtistMetaBox = styled.div`
//       /* width: 322px; */
//       height: 42px;
//     background: #F3017F;
//     border-radius: 100px;
// `

// const ArtistInfoCard_ArtistMetaText = styled.div`
//       height: 42px;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 21px;
//     display: flex;
//     /* text-align: center; */
//     /* padding: 10px 76px; */
//     color: #FFFFFF;
//     width: 100%;
//     justify-content: center;
//     align-items: center;
// `

export default ArtistInfoCard;
