import { Box, Typography,styled } from '@mui/material'
import React, { useEffect, useState } from 'react'

const HeaderWraper = styled(Box)`
padding:15px 15px;
border-bottom: 1px solid #f0f0f0;
margin-top:1px
`
const Header=styled(Typography)`
color:#878787
`
const Container = styled(Box)`
padding:15px 15px;
& > p{
  margin-bottom:20px;
  font-size:14px
}
& > h6{
  margin-bottom:20px
}
`
const Amount= styled(Box)`
float:right;
`
const Discount=styled(Typography)`
color:green;
font-weight:500;
margin-top:20px
`

function CartRightSide({cartData, setTotalPrice}) {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)


  const totalAmount=()=>{
    let price=0
    let discount =0
    cartData.map((item)=>{
     price+=item.price.mrp * item.quantity;
     discount+=((item.price.mrp - item.price.cost)* item.quantity )

    })
    setPrice(price);
    setDiscount(discount)
    setTotalPrice(price-discount+40)
  }
  useEffect(()=>{
    totalAmount()
  },[totalAmount])

  return (
    <>
    <Box style={{background:"#fff",marginLeft: "1%", width:"100%", position:"sticky", top:60}} className='rightSide'>
    {/* <Box> */}
      <HeaderWraper>
        <Header>PRICE DETAILS</Header>
      </HeaderWraper>

      <Container>
      <Typography>Price for ({cartData.length} Items) 
      <Amount component='span'>₹{price}</Amount>
      </Typography>

      <Typography>Discount
      <Amount component='span'>-₹{discount} </Amount>
      </Typography>

      <Typography>Delivery Charges
      <Amount component='span'>₹40</Amount>
      </Typography>

      <Typography variant='h7' style={{fontWeight:600}}>Total Amount
      <Amount component='span'>₹{price-discount+40}</Amount>
      </Typography>

      <Discount>You will save ₹{discount} on this order </Discount>
    </Container>
    </Box>
    </>
  )
}

export default CartRightSide