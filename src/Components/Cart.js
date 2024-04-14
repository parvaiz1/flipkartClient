import { Box, Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import CartRightSide from './CartRightSide'
import { useSelector, useDispatch } from "react-redux"
import styled from '@emotion/styled'
import { quantityIncrement, quantityDecrement, removeCart } from './Redux/Slice'
import EmptyCart from './EmptyCart'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const RightImageSide = styled(Box)`
 margin-top: 20px;
  display:flex;
  flex-direction: column;
`

const Leftdetails = styled(Box)`
margin-left:20px;
//  display:flex;
//    flex-direction: column;
`

const TextSeller = styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px
`
const Remove = styled(Button)`
// margin-top:10px;
font-size:16px;
// color:#000;
font-weight:600;
font-size:small
`
const ButtonStyle = styled(Button)`
border-radius:50%
`
const PlaceHBtnWrapper = styled(Box)`
// margin-left:80px;
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px rgb(0 0 0 / 10%);
border-top: 1px solid #f0f0f0
`
const BottonStyle = styled(Button)`
background:#fb641b;
height:51px;
width:250px;
color:#fff;
display:flex;
margin-left:auto
`

function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [totalPrice, setTotalPrice]= useState()

  const cartData = useSelector((cartdata) => cartdata.cart)
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  function handleIncrement(id) {
    dispatch(quantityIncrement(id))
  }
  function handleDecrement(id) {
    dispatch(quantityDecrement(id))
  }
  function removeItem(id) {
    dispatch(removeCart(id))
    toast.success("Item Removed from Your Cart")
  }

  //payment

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
    <div style={{ background: "#F2F2F2", paddingTop: 60 }}>

      {/* <hr style={{ marginTop: "20px", marginLeft: "5%", width: "73%" }}></hr> */}
      {cartData.length > 0 ?
        <>
      <p style={{ padding: 15, background: "#fff", fontWeight: 600 ,width:"100px"}} className='mycart'>My Cart ({cartData.length})</p>

          <div style={{  justifyContent:"flex-start", marginTop: -16, paddingBottom:"10px",  }} className='cart'>
            {/* background:"#f2f2f2" */}
            <div>
              {
                cartData?.map((cartItems) => {
                  return (
                    <>
                      {/* borderTop: " 1px solid #f0f0f0" */}
                      <Box style={{ display: "flex",  padding:"2px 15px", marginTop: 1,  background: "#fff", }} className='Allcart'>

                        <RightImageSide >
                          <img src={cartItems.url} style={{ width: 110, height: 105 }} alt='image' />
                          <ButtonGroup style={{ marginTop: 20 }}>
                            <ButtonStyle onClick={ cartItems.quantity>1? () => {handleDecrement(cartItems.id)}: () => {removeItem(cartItems.id)} }>-</ButtonStyle>
                            <Button disabled>{cartItems.quantity}</Button>
                            {/* <Button disabled>0</Button> */}
                            <ButtonStyle onClick={() => { handleIncrement(cartItems.id) }}>+</ButtonStyle>
                          </ButtonGroup>
                        </RightImageSide>

                        <Leftdetails style={{ marginTop: 20 }}>
                          <Typography style={{ fontWeight: 590 }}>{cartItems.title.longTitle.slice(0, 60)}...</Typography>
                          <TextSeller>Seller:RetailNet
                            <Box component='span'> <img src={fassured} style={{ width: 60, marginLeft: "10px" }} /> </Box>
                          </TextSeller >
                          <Typography style={{ margin: '20px 0' }} >
                            <Box component='span' style={{ fontSize: 18, fontWeight: 600 }} >₹{cartItems.price.cost} </Box>&nbsp;&nbsp;&nbsp;
                            <Box component='span' style={{ color: "#878787" }}><strike>₹{cartItems.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                            <Box component='span' style={{ color: "#388E3C" }}>{cartItems.price.discount} off</Box>
                          </Typography>
                          <Remove onClick={() => { removeItem(cartItems.id) }}> Remove </Remove>
                        </Leftdetails>
                      </Box>

                    </>
                  )
                })
              }
              <PlaceHBtnWrapper className='placorderButton'>
                <BottonStyle onClick={()=>{PhonePepaymentButton(totalPrice)}}>Place Order</BottonStyle>
              </PlaceHBtnWrapper>
            </div>
            <Box style={{}}>
              <CartRightSide cartData={cartData} setTotalPrice={setTotalPrice} />
            </Box>
          </div>
        </>
        :
        <div style={{ background: "#F2F2F2", paddingBottom:"173px" }}>
          {/*  <div > */}
          <EmptyCart />
        </div>
      }
    </div>
  )
}

export default Cart