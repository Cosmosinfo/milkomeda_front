import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function StageCard() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.Auth.token);
  const [data, setData] = useState(null);

  useEffect(() => {
    getLiveData();
  }, []);

  const getLiveData = async () => {
    await axios.get("http://118.63.182.3:8080/api/stage/liveList").then((res) => setData(res));
  };

  const tokenPath = () => {
    if (token !== "Test") {
      navigate("/login");
      alert("로그인이 필요한 페이지입니다");
    } else {
      navigate("/streamLive/0001");
    }
  };

  return (
    <>
      {data && (
        <Stage onClick={tokenPath}>
          <StageTop>
            <img src={data.data.streams[0].stageThumbnailImage} alt="" />
          </StageTop>
          <StageBtm>
            <StageBtmLeft>
              <img src={data.data.streams[0].stageThumbnailImage} alt="" />
            </StageBtmLeft>
            <StageBtmRight>
              <StageNameBox>
                <StageNameBoxArtistTitle>{data.data.streams[0].stageTitletitle} </StageNameBoxArtistTitle>
              </StageNameBox>
              <StageNameBoxArtistNameBox>
                <StageNameBoxArtistName>{data.data.streams[0].stageDescription}</StageNameBoxArtistName>
              </StageNameBoxArtistNameBox>
            </StageBtmRight>
          </StageBtm>
        </Stage>
      )}
    </>
  );
}

const Stage = styled.div`
  flex: 1;
  flex-basis: calc(25% - 24px);
  cursor: pointer;
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
