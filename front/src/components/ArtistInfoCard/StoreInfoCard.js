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
      <ArtistInfoCard_Lf>
        <ArtistInfoCard_Lf_Wrapper>
          <ArtistInfoCard_top>
            <ArtistInfoCard_ArtistImg>
              <img src="https://i.imgur.com/g4jSQhv.png" alt="" />
            </ArtistInfoCard_ArtistImg>
            <ArtistInfoCard_ArtistNameBox>
              <ArtistInfoCard_ArtistName>SYLK</ArtistInfoCard_ArtistName>
              <ArtistInfoCard_MusicGenre>Jewelry</ArtistInfoCard_MusicGenre>
            </ArtistInfoCard_ArtistNameBox>
            <ArtistInfoCard_ArtistSnsBox>
              <ArtistInfoCard_ArtistSns
                onClick={() => {
                  window.open(In);
                }}
              >
                <img src={Instagram} alt="Instargram" />
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns>
                <img src={Facebook} alt="Facebook"></img>
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns>
                <img src={Twitter} alt="Twitter" />
              </ArtistInfoCard_ArtistSns>
              <ArtistInfoCard_ArtistSns>
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
            <Aat>
              <div>SYLK is an artistic experience.</div>
              <br />
              <div>It is an art being expressed by you when worn.</div>
              <br />
              <div>SYLK를 통해 이세상에서 가장 아름답고 독창적이고</div>
              <div>특별한 예술작품으로 느끼시길 바랍니다.</div>
              <br />
              <div>SYLK Jewelry</div>
              <br />
              <div>디자이너의 손에서 완성된 주얼리는</div>
              <div>내 몸에 착용함으로써</div>
              <div>완전한 예술작품으로 재탄생합니다.</div>
              <br />
              <div>아티스트와 SYLK가 만나</div>
              <div>내 삶에 새로운 가치를 제안합니다.</div>
            </Aat>
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
