import { Box, Typography , styled} from '@mui/material';
import React from 'react'

const Component=styled(Box)`
height:50vh;
width:60%;
background:#fff;
margin: 35px auto;
// margin-bottom:90px
`
const Container=styled(Box)`
text-align:center;
padding:60px 0;
// width:100%;


`

function EmptyCart() {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Component>
        <Container>
            <img src={imgurl} alt='empty' style={{width:"15%"}}/>
            <Typography>Your cart is empty!</Typography>
            <Typography>Add items</Typography>
        </Container>
    </Component>
  )
}

export default EmptyCart