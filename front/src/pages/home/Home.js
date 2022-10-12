// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import '../../assets/css/Main/Home.css'
import HomeBanner from "../../components/Carousel/HomeBanner"
import chevron from '../../assets/icon/ping//chevron-down.svg'
import ArtistNameCard from '../../components/ArtistNameCard/ArtistNameCard'
import StageCard from '../../components/StageCard/StageCard';
import { Link } from "react-router-dom";
import StageCardData from '../../Data/StageCardDate'


function Home() {
  // eslint-disable-next-line
  const [noOfElement, setnoOfElement] = useState(4) 
  // const [moreBtn, setMoreBtn] = useState()

  // const [btnActive, setBtnActive] = useState("");

  // const toggleActive = (e) => {
  //   setBtnActive((prev) => {
  //     return e.target.value;
  //   });
  // };

  const more = StageCardData.cardData.slice(0, noOfElement)

  function loadmore(){
    setnoOfElement(noOfElement + noOfElement)

  }

  // function Btnchevron() {
    

  //   if ((loadmore() === false)) {
  //     return <div className="hr-sect"><button className="more_btn" onClick={() =>loadmore()}><spen className="hr-sect_more">더 보기</spen><img className="chevron" src={chevron} alt="chevron" /></button>

      
      
  //   </div>
  //   } else {
  //     return <div className="hr-sects"> </div>

  //   }
  // }
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
          
          {more.map((item, index)=>{
              return(
                <Link to="/StreamLive" className="link home_stageCard">
                  <div className="home_Stage_Top">
                     
                      <img src={item.thumbnail} alt=""  /> 
                  </div>

                  <div className="home_Stage_btm">
                    <div className="home_Stage_btm_Left">

                      <img src={item.img} className="home_Stage_Artist_img" alt="" />


                    </div>
                    <div className="home_Stage_btm_Right">

                      <div className="home_Stage_NameBox">

                        <span className="home_Stage_NameBox_ArtistTitle">{item.title}</span>

                      </div>
                      <div className="home_Stage_NameBox_ArtistName_Box">

                        <span className="home_Stage_NameBox_ArtistName">{item.artistName}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
          })}
          



          </div>
        </div>
          {
               <div className="hr-sect">
            
           
            
               <button
                className="more_btn"
                onClick={() =>loadmore()}
   
               >
                 
                 <spen className="hr-sect_more">더 보기</spen>
                 <img className="chevron" src={chevron} alt="chevron" />
               </button>
   
               
               
             </div>
          }
         
        

          {/* <div className="hr-sects"> </div> */}

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