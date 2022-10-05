import React from 'react'
import './StoreBanner.css'
import { Carousel } from "./Carousel";

function StoreBanner() {
    const images = [
        {
        //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          image: "./img/img1.jpeg",
         
        },
        {
          image: "./img/img2.jpeg",
          
        },
        {
          image: "./img/img3.jpeg",
         
        }
      ];
    return (
        <>

        <Carousel
        //accepts news data
        data={images}
        //time interval milliseconds between each picture
        time={4000}
        //width of carousel
        width="1174px"
        //height of carousel
        height="329px"
        //constitutes the border radius of each slide px
        radius="6px"
        //enables automatic transitioning between slides
        automatic={true}
        //enables visual dots between slides
        dots={true}
        //changes object fit I used cover to avoud stretching
        slideImageFit="cover"
        thumbnailWidth="100px"
      />
       </>
    )
}

export default StoreBanner