import React from 'react'
import './HomeBanner.css'
import { Carousel } from "./Carousel";

function HomeBanner() {
    const images = [
        {
        //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          image: "./img/img1.jpg",
         
        },
        {
          image: "./img/img2.jpg",
          
        },
        {
          image: "./img/img3.jpg",
         
        }
      ];
    return (
        <div className="HomeBanner">

<Carousel
        //accepts news data
        data={images}
        //time interval milliseconds between each picture
        time={4000}
        //width of carousel
        width="1618px"
        //height of carousel
        height="300px"
        //constitutes the border radius of each slide px
        radius="6px"
        //enables automatic transitioning between slides
        automatic={true}
        //enables visual dots between slides
        dots={true}
        showNavBtn = {true}
        //changes object fit I used cover to avoud stretching
        slideImageFit="cover"
        thumbnailWidth="100px"
      />
        </div>
    )
}

export default HomeBanner