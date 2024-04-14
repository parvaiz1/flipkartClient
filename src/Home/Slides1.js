import React, { useEffect, useState } from 'react'
import {getProducts} from "../Components/Login/Api"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import {Box, Button, Divider} from '@mui/material';
import Countdown from "react-countdown"
import { useNavigate } from 'react-router-dom';

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Component=styled(Box)`
margin-top:10px;
background:#ffffff;
`
const DealWrapper=styled(Box)`
padding:15px 20px;
display :flex;
`
const Timer = styled(Box)`
display :flex;
margin-left:10px;
align-items:center;
color:#7f7f7f
`

const Deal = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const Image =styled("img")({
width:'auto',
height:150
})

const RightSide=styled(Box)`
background:#ffffff;
padding:5px;

`
const ViewAllButton=styled(Button)`
margin-left:auto;
background:#2874f0;
font-size:13px;
font-weight:600;
`

 function Slides1({JSONproducts, title, timer, showAdd} ) {

       const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg'; 
    
    const renderer=({hours, minutes, seconds})=>{
        return <Box variant = "span"> {hours} : {minutes} : {seconds} Left </Box>
    }

    let navigate= useNavigate()

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <>
    <Component>
        <DealWrapper>
            <Deal>{title}</Deal>
           { timer?
           <Timer>
                <img src={timerURL} style={{width:24}}/>
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
            </Timer>:""}
        <ViewAllButton variant='contained'>View All</ViewAllButton>

        </DealWrapper>
        <Divider/>

        
          <Carousel
        responsive={responsive}

        // showDots={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        infinite={true} 
        slidesToSlide={1}
        centerMode={true}
        autoPlaySpeed={4000}  //defalult is 3 sec
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        className='cardWrapper'
        >
    {
        JSONproducts.map((products)=>{
            return(
                <div style={{ padding:"25px 15px", textAlign:"center", cursor:"pointer"}}>
                <Image src={products.thumbnail} />
                <Typography style={{fontWeight:600, color:"#212121"}}>{products.category}</Typography>
                <Typography style={{color:"green"}}>{products.price}</Typography>
                <Typography style={{color:"#212121", opacity:.6}}>{products.brand}</Typography>
                </div>
            )
        })
    }
    </Carousel>
  
    </Component>
    </>
  )
}

export default Slides1