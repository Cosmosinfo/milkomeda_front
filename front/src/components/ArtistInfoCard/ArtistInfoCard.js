import React from 'react'
import './ArtistInfoCard.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'


function ArtistInfoCard() {
  return (
    <>
      <div className='ArtistInfoCard_Lf'>

        <div className='ArtistInfoCard_Lf_Wrapper'>
          <div className='ArtistInfoCard_top'>
            <div className='ArtistInfoCard_ArtistImg'>
              <img src="https://i.imgur.com/PWcLqjm.jpg" className="ArtistInfoCard_ArtistImg_img" alt=""  />
            </div>

            <div className='ArtistInfoCard_ArtistNameBox'>
              <div className='ArtistInfoCard_ArtistName'>Lubless Official</div>
              <div className='ArtistInfoCard_ArtistName2'>리나 (보컬), 제이 (베이스), 봉우 (기타)</div>
              <div className='ArtistInfoCard_MusicGenre'>Indie music</div>
            </div>

            <div className='ArtistInfoCard_ArtistSnsBox'>
              <div className='ArtistInfoCard_ArtistSns'>
                <img className="ArtistSnsIcon" src={Instagram} alt="Instargram" />
              </div>

              <div className='ArtistInfoCard_ArtistSns'>
                <img className="ArtistSnsIcon" src={Facebook} alt="Instargram" />
              </div>

              <div className='ArtistInfoCard_ArtistSns'>
                <img className="ArtistSnsIcon" src={Twitter} alt="Instargram" />
              </div>

              <div className='ArtistInfoCard_ArtistSns'>
                <img className="ArtistSnsIcon" src={Youtube} alt="Instargram" />
              </div>

              <div className='ArtistInfoCard_ArtistSns'>
                <img className="ArtistSnsIcon" src={Global} alt="Instargram" />
              </div>


            </div>

            <div className='ArtistInfoCard_ArtistFollwer'>팔로워 97</div>

            <div className='ArtistInfoCard_ArtistFavoriteBox'>
              <div className='ArtistInfoCard_ArtistFavoriteText'>즐겨찾기</div>

            </div>

            <div className='ArtistInfoCard_Artist_Line'></div>

            <div className='ArtistInfoCard_Artistdescription'>
            𝕝𝕦𝕤𝕥 𝕓𝕝𝕖𝕤𝕤 𝕪𝕠𝕦 💔 𝕗𝕠𝕝𝕝𝕠𝕨 𝕪𝕠𝕦𝕣 𝕙𝕖𝕒𝕣𝕥 고장 난 어른들의 동화를 노래하는 밴드 러블레스
            </div>
          </div>

          {/* <div className='ArtistInfoCard_btm'>
        <div className='ArtistInfoCard_ArtistMetaBox'>
    <div className='ArtistInfoCard_ArtistMetaText'>
    아티스트 메타버스로 이동하기
    </div>
  </div>

 
        </div> */}


        </div>



      </div>





    </>
  )
}

export default ArtistInfoCard