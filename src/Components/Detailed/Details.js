import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailedProducts } from "../Login/Api"
import { Box, Button, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import styled from '@emotion/styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import './details.css'
import { addCart } from '../Redux/Slice';
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LeftContainer=styled(Box)`
// min-width:40%;
// padding:40px 0 0 80px;
margin-left:5%;
display:flex;
// flex-wrap:wrap;
flex-direction:column;
background:"red";
// width:100%

`
const Image=styled('img')({
padding:'15px 20px',
border:'1px solid #f0f0f0',
})
// const Component=styled(Box)`
// background:#F2F2F2


const RightContainer = styled(Box)`
margin-top:10px
`
const StyleButtons = styled(Button)`
// width:180px;
width:100%;
height:40px;
border-radius:2px;
`
const SmallText= styled(Box)`
vertical-align:baseline;
& > p {
  font-size:14px;
  margin-top:10px
}
`
const StyledBadge=styled(LocalOfferIcon)`
color:#00cc00;
font-size:15px
`

const TablerowText= styled(TableRow)`
vertical-align:baseline;
& > td{
  border:none;
  font-size:14px;
  margin-top:10px
}
`

function Details() {
  const navigate=useNavigate()
  
  const dispatch = useDispatch()
  // const cart = useSelector((state)=>  console.log(state))
  function handleAddCart(detailedProduts){
    dispatch(addCart(detailedProduts))
    toast.success("Item added in Your Cart")
    navigate("/Cart")
  }

  const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))

  const params = useParams()
  let productid = params.ObjectId // ObjectId is coming from what is mentioned in route in App

  const [detailedProduts, setdetailedProduts] = useState({})

  async function getdetailedproducts() {
    let response = await getDetailedProducts(productid)
    setdetailedProduts(response.data)
  }

  useEffect(() => {
    getdetailedproducts()
  },[])
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

async function PhonePepaymentButton(amount){
  await axios.post("https://flip-api-mu.vercel.app/paymentAPI/rzrPayment",{amount})
  .then((res)=>{
    console.log(res.data)
      handleRazorPay(res.data.order)
  })
  .catch((err)=>{
      console.log("backend error", err)
  })
  }

  function handleRazorPay(data){
    const option={
       key :'rzp_test_iqpco18Ih104rL',
      amount:data.amount,
      currency:data.currency,
      orderId:data.id,
      name:'Use Netbanking for Demo perpose',
      description:"aabbc",
      handler:function(res){
        console.log(res, 'line no 95')
        navigate("/")
        window.location.reload()

      }
    }
    const rzp = new window.Razorpay(option)
    rzp.open()
  }

  return (
    <>
    {
           detailedProduts?
           <>
      <Box className='component'>
        <LeftContainer className='image'>
          <Image src={detailedProduts.detailUrl}  />
          <Box style={{display:"flex"}}>
         
         <StyleButtons variant='contained' style={{background:'#ff9f00', marginRight:10}}
           onClick={()=>{handleAddCart(detailedProduts)}}><ShoppingCartIcon/>Add to Cart</StyleButtons>
          <StyleButtons variant="contained" style={{background:'#fb541b'}} onClick={()=>{PhonePepaymentButton(350)}}><FlashOnIcon/>Buy Now</StyleButtons>
          
          </Box>
        </LeftContainer>

        <RightContainer style={{marginLeft:"4%"}}>
{/* <Typography> {detailedProduts.title.longTitle} </Typography> */}
 <Typography>  New Adjustable Single Resistance Tube (Multicolor) </Typography> 
 <Typography style={{marginTop:5, color:'#878787', fontSize:14}}>
  8 Ratings & 1 Reviews
  <Box component="span"> <img src={fassured} style={{width:77, marginLeft:20}}  /> </Box>
 </Typography>
  {/* <Typography>
 <Box component='span' style={{fontSize:28}} >₹{detailedProduts.price.cost} </Box>&nbsp;&nbsp;&nbsp;
  <Box component='span' style={{ color:"#878787"}}><strike>₹{detailedProduts.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
  <Box component='span' style={{ color:"#388E3C"}}>{detailedProduts.price.discount} off</Box>
 </Typography>  */}
  <Typography>Available Offers</Typography>
 <SmallText>
  <Typography> <StyledBadge/> Get extra 20% off up to ₹50 on 1 item(s) T&C</Typography>
  <Typography> <StyledBadge/> Get extra 13% off (price inclusive of discount) T&C</Typography>
  <Typography> <StyledBadge/> Sign up for Flipkart pay later and Get Gift worth ₹100*</Typography>
  <Typography> <StyledBadge/> Buy 2 items save 5% Buy 3 or more save 10% T&C</Typography>
  <Typography> <StyledBadge/> 5% Cashback on Flipkart Axies Bank Card</Typography>
  <Typography> <StyledBadge/> No EMI Cost on Bajaj Fineserv EMI Card on above 299</Typography>
 </SmallText>
<Table style={{}}>
  <TableBody>
    <TablerowText>
      <TableCell style={{color:'#878787'}}>Delivery</TableCell>
      <TableCell style={{fontWeight:600}}>Delivery by{date.toDateString()} | ₹200 </TableCell>
    </TablerowText>
    <TablerowText>
      <TableCell style={{color:'#878787'}}>Warrenty</TableCell>
      <TableCell >No Warrenty </TableCell>
    </TablerowText>
    <TablerowText>
      <TableCell style={{color:'#878787'}}>Seller</TableCell>
      <TableCell > 
        <Box Component='span' style={{color:'#2874f0'}}>SuperComNet</Box>
        <Typography>GST invoice available</Typography>
        <Typography>Sellers starting from ₹500 </Typography>
        {/* <Typography>View more sellers starting from ₹{detailedProduts.price.cost} </Typography> */}
      </TableCell>
      </TablerowText>
      <TablerowText>
        <TableCell colSpan={2}>
          <img src={adURL} style={{width:360}} alt='flipkartpoints' />
        </TableCell>
    </TablerowText>
    <TablerowText>
      <TableCell style={{color:"#878787"}}>Description</TableCell>
      <TableCell >{detailedProduts.description} </TableCell>
    </TablerowText>

  </TableBody>
</Table> 

        </RightContainer>
      </Box>
      </> 
          :"" }
    </>
  )
}

export default Details