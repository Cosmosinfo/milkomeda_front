import React from "react";
import styled from "styled-components";
import Instagram from "../../assets/icon/graw/instagram.svg";
import Facebook from "../../assets/icon/graw/facebook.svg";
import Twitter from "../../assets/icon/graw/twitter.svg";
import Youtube from "../../assets/icon/graw/youtube.svg";
import Global from "../../assets/icon/graw/globe-w.svg";

import { useTranslation } from "react-i18next";

function StoreInfoCard() {
  const { t } = useTranslation();

  const In = "https://www.instagram.com/sylk.kr/";

  const Gb = "https://sylk.kr/";
  return (
    <>
      <ArtistInfoCardLf>
        <ArtistInfoCardLfWrapper>
          <ArtistInfoCardtop>
            <ArtistInfoCardArtistImg>
              <img src="https://i.imgur.com/g4jSQhv.png" alt="" />
            </ArtistInfoCardArtistImg>
            <ArtistInfoCardArtistNameBox>
              <ArtistInfoCardArtistName>SYLK</ArtistInfoCardArtistName>
              <ArtistInfoCardMusicGenre>Jewelry</ArtistInfoCardMusicGenre>
            </ArtistInfoCardArtistNameBox>
            <ArtistInfoCardArtistSnsBox>
              <ArtistInfoCardArtistSns
                onClick={() => {
                  window.open(In);
                }}
              >
                <img src={Instagram} alt="Instargram" />
              </ArtistInfoCardArtistSns>
              <ArtistInfoCardArtistSns>
                <img src={Facebook} alt="Facebook"></img>
              </ArtistInfoCardArtistSns>
              <ArtistInfoCardArtistSns>
                <img src={Twitter} alt="Twitter" />
              </ArtistInfoCardArtistSns>
              <ArtistInfoCardArtistSns>
                <img src={Youtube} alt="Youtube" />
              </ArtistInfoCardArtistSns>
              <ArtistInfoCardArtistSns
                onClick={() => {
                  window.open(Gb);
                }}
              >
                <img src={Global} alt="Global" />
              </ArtistInfoCardArtistSns>
            </ArtistInfoCardArtistSnsBox>
            <ArtistInfoCardArtistFollwer>{t("artistcard_follow")} 97</ArtistInfoCardArtistFollwer>
            <ArtistInfoCardArtistFavoriteBox>
              <ArtistInfoCardArtistFavoriteText>{t("artistcard_favar")}</ArtistInfoCardArtistFavoriteText>
            </ArtistInfoCardArtistFavoriteBox>
            <ArtistInfoCardArtistLine></ArtistInfoCardArtistLine>
            <Aat>
              <div>SYLK is an artistic experience.</div>
              <br />
              <div>It is an art being expressed by you when worn.</div>
              <br />
              <div>SYLK??? ?????? ??????????????? ?????? ???????????? ???????????????</div>
              <div>????????? ?????????????????? ???????????? ????????????.</div>
              <br />
              <div>SYLK Jewelry</div>
              <br />
              <div>??????????????? ????????? ????????? ????????????</div>
              <div>??? ?????? ??????????????????</div>
              <div>????????? ?????????????????? ??????????????????.</div>
              <br />
              <div>??????????????? SYLK??? ??????</div>
              <div>??? ?????? ????????? ????????? ???????????????.</div>
            </Aat>
          </ArtistInfoCardtop>
          {/* <div className='ArtistInfoCard_btm'>
            <div className='ArtistInfoCard_ArtistMetaBox'>
              <div className='ArtistInfoCard_ArtistMetaText'>
                ???????????? ??????????????? ????????????
              </div>
            </div>
          </div> */}
        </ArtistInfoCardLfWrapper>
      </ArtistInfoCardLf>
    </>
  );
}

const ArtistInfoCardLf = styled.div`
  background: #191922;
  /* height: 100%; */
  border-radius: 10px;
  /* padding: 24px 32px; */
  flex: 1 1;
`;

const ArtistInfoCardLfWrapper = styled.div`
  height: 807px;
  /* position: relative; */
  display: flex;
  padding: 25px 32px;
  flex-direction: column;
  justify-content: space-between;
`;

const ArtistInfoCardtop = styled.div``;

const ArtistInfoCardArtistImg = styled.div`
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

const ArtistInfoCardArtistNameBox = styled.div`
  width: 100%;
  /* height: 84px; */
  padding: 0 0 12px 0; ;
`;

const ArtistInfoCardArtistName = styled.div`
  height: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 6px;
  color: #ffffff;
`;

const ArtistInfoCardMusicGenre = styled.div`
  height: 18px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #8b8999;
`;

const ArtistInfoCardArtistSnsBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
  gap: 12px;
`;

const ArtistInfoCardArtistSns = styled.button`
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

const ArtistInfoCardArtistFollwer = styled.div`
  height: 21px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #8b8999;
  padding: 0 0 12px 0;
`;

const ArtistInfoCardArtistFavoriteBox = styled.div`
  /* width: 138px; */
  height: 42px;
  display: flex;
  /* padding: 0 60px 12px; */
  justify-content: center;
`;

const ArtistInfoCardArtistFavoriteText = styled.div`
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

const ArtistInfoCardArtistLine = styled.div`
  background: #8b8999;
  opacity: 20%;
  height: 1px;
  margin: 12px 0;
`;

const Aat = styled.div`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StoreInfoCard;
