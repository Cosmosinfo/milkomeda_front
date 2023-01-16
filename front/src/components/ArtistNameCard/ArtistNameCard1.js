import React, { useState } from "react";
import styled from "styled-components";
import Modal1 from "../../components/Modal/Modal1";
import Icon from "../../assets/icon/nekiru.png";

function ArtistNameCard1() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <StyledLink onClick={openModal}>
        <Modal1 open={modalOpen} close={closeModal} header="Artist Description">
          팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
        </Modal1>
        <NewArtistItemContainer>
          <NewArtistItemContainerBox>
            <img src={Icon} alt="" />
            <NewArtistItemContainerRight>
              <NewArtistItemContainerNameBox>
                <NewArtistItemContainerArtistName>Nekiru</NewArtistItemContainerArtistName>
              </NewArtistItemContainerNameBox>
              <NewArtistItemContainerMusicGenreBox>
                <NewArtistItemContainerMusicGenre>Synth Rock</NewArtistItemContainerMusicGenre>
              </NewArtistItemContainerMusicGenreBox>
            </NewArtistItemContainerRight>
          </NewArtistItemContainerBox>
        </NewArtistItemContainer>
      </StyledLink>
    </>
  );
}

const StyledLink = styled.div`
  flex: 1;
  cursor: pointer;
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

export default ArtistNameCard1;
