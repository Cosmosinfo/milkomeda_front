import React from 'react'
import './ArtistInfoCard.css'
import Instagram from '../../assets/icon/graw/instagram.svg'
import Facebook from '../../assets/icon/graw/facebook.svg'
import Twitter from '../../assets/icon/graw/twitter.svg'
import Youtube from '../../assets/icon/graw/youtube.svg'
import Global from '../../assets/icon/graw/globe-w.svg'

import { useTranslation } from "react-i18next";

function StoreInfoCard() {

  const { t } = useTranslation();

  const In = "https://www.instagram.com/sylk.kr/"

  const Gb = "https://sylk.kr/"
  return (
    <>
      <div className='ArtistInfoCard_Lf'>

        <div className='ArtistInfoCard_Lf_Wrapper'>
          <div className='ArtistInfoCard_top'>
            <div className='ArtistInfoCard_ArtistImg'>
              <img src="https://i.imgur.com/g4jSQhv.png" className="ArtistInfoCard_ArtistImg_img" alt="" />
            </div>

            <div className='ArtistInfoCard_ArtistNameBox'>
              <div className='ArtistInfoCard_ArtistName'>SYLK</div>
              <div className='ArtistInfoCard_MusicGenre'>Jewelry</div>
            </div>

            <div className='ArtistInfoCard_ArtistSnsBox'>
              <button className='ArtistInfoCard_ArtistSns' onClick={() => { window.open(In) }}>

                <img className="ArtistSnsIcon" src={Instagram} alt="Instargram" />

              </button>


              <button className='ArtistInfoCard_ArtistSns' >
                <img className="ArtistSnsIcon" src={Facebook} alt="Facebook" ></img>
              </button>


              <button className='ArtistInfoCard_ArtistSns' >

                <img className="ArtistSnsIcon" src={Twitter} alt="Twitter" />

              </button>

              <button className='ArtistInfoCard_ArtistSns' >

                <img className="ArtistSnsIcon" src={Youtube} alt="Youtube" />

              </button>

              <button className='ArtistInfoCard_ArtistSns' onClick={() => { window.open(Gb) }}>

                <img className="ArtistSnsIcon" src={Global} alt="Global" />

              </button>


            </div>

            <div className='ArtistInfoCard_ArtistFollwer'>{t("artistcard_follow")} 97</div>

            <div className='ArtistInfoCard_ArtistFavoriteBox'>
              <div className='ArtistInfoCard_ArtistFavoriteText'>{t("artistcard_favar")}</div>

            </div>

            <div className='ArtistInfoCard_Artist_Line'></div>

            <div className='aat'>

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

export default StoreInfoCard