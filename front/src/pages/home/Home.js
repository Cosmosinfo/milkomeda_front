// eslint-disable-next-line
import React, {useEffect, useState} from 'react' 
import '../../assets/css/Main/Home.css'
import HomeBanner from "../../components/Carousel/HomeBanner"
import chevron from '../../assets/icon/ping//chevron-down.svg'
import ArtistNameCard from '../../components/ArtistNameCard/ArtistNameCard'
import StageCard from '../../components/StageCard/StageCard';


function Home() {
  // eslint-disable-next-line
  const [moreBtn, setMoreBtn] = useState() 


  return (


    <div className="home">


      <div className='homeWrapper'>
        {/* ====================  Carousel  ======================== */}

        < HomeBanner />

        {/* ====================  New Artist  ======================== */}

        <div className="home_newArtist">
          <span className="home_newArtistTitle">새로운 아티스트</span>

          <div className="home_newArtistItem">
            <ArtistNameCard />

            <ArtistNameCard />

            <ArtistNameCard />

            <ArtistNameCard />

            <ArtistNameCard />

            <ArtistNameCard />

          </div>
        </div>

        {/* ====================  Live Stage  ======================== */}

        <div className="home_LiveStage">
          <div className="home_LiveStage_Title">
            <p className='home_Stage'><span className="home_Live">라이브</span> 스테이지</p>
          </div>

          <div className="home_LiveStage_Container">
            <StageCard />

            <StageCard />

            <StageCard />

            <StageCard />



          </div>


        </div>

          <div className="hr-sect">
          더 보기
          <img className="chevron" src={chevron} alt="chevron" />
          </div>

        {/* ====================  Upcoming Stage  ======================== */}

        <div className="home_UpComing_Stage">
          <div className="home_UpComing_Stage_title">
            다가오는 스테이지
          </div>

          <div className="home_UpComingStage_Container">
            <StageCard />

            <StageCard />

            <StageCard />

            <StageCard />


          </div>
        </div>

        <div className="hr-sect">
          더 보기
          <img className="chevron" src={chevron} alt="chevron" />
        </div>
      </div>
    </div>
  )
}

export default Home