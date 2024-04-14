import React from 'react'
import Slides from './Slides'
import { Box, styled } from '@mui/material'

let Component = styled(Box)`
display:flex
`
let LeftComponent=styled(Box)`
width:83%
`
let RightComponent=styled(Box)`
background:#ffffff;
padding:5px;
margin-top:10px;
margin-left:10px;
width:14.5%;
text-align:center
`


function MiddleSlide({products, title, timer}) {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <>
    <Component>
        <LeftComponent>
            <Slides products={products}
            title={title} timer={timer}
            />

        </LeftComponent>

        <RightComponent>
        <img src={adURL } style={{width:"100%", height:300}} />
        </RightComponent>
    </Component>
    </>
  )
}

export default MiddleSlide