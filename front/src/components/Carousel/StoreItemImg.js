import React from 'react'

import { Carousel } from "./Carousel";

function StoreItemImg() {
    const images = [
        {
        
          image: "./img/img9.jpg",
         
        }
      ];
    return (
        <>

        <Carousel
        //accepts news data
        data={images}
        //time interval milliseconds between each picture
        
        //width of carousel
        width="250px"
        //height of carousel
        height="250px"
        //constitutes the border radius of each slide px
        radius="6px"
        //enables automatic transitioning between slides
        
        //enables visual dots between slides
        
        //changes object fit I used cover to avoud stretching
        
      />
       </>
    )
}

export default StoreItemImg