import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from './NavData';

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Banner() {
  return (
    <>

      <Carousel
        responsive={responsive}

        // showDots={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        infinite={true} 
        autoPlaySpeed={4000}  //defalult is 3 sec
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        className='cardWrapper'
      >
        {
            bannerData.map((banner)=>{
                return(
                    <img src={banner.url} style={{width:"100%", height:"100%"}} />
                )
            })
        }


      
      </Carousel>


    </>
  )
}


export default Banner