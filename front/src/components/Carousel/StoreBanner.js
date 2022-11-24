import React from "react";
import { Carousel } from "./Carousel";

function StoreBanner() {
  const images = [
    {
      image: "./img/img4.jpg",
    },
    {
      image: "./img/img5.jpg",
    },
  ];
  return (
    <>
      <Carousel
        //accepts news data
        data={images}
        //time interval milliseconds between each picture
        time={4000}
        //width of carousel
        width="1178px"
        //height of carousel
        height="334px"
        //constitutes the border radius of each slide px
        radius="6px"
        //enables automatic transitioning between slides
        automatic={true}
        //enables visual dots between slides
        dots={true}
        showNavBtn={true}
        //changes object fit I used cover to avoud stretching
        slideImageFit="cover"
        thumbnailWidth="100px"
      />
    </>
  );
}

export default StoreBanner;
