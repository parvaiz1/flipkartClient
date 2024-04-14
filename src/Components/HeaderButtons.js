import React, {useContext} from 'react'
import { AppBar, Toolbar, Box, styled, Typography, Button, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "./Login/Login"
import { useState } from 'react';
import { DataContext } from '../App';
import Profile from './Login/Profile';
import "./HeaderButton.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { DataContext } from './ContectAPI/Context';


const LoginButton = styled(Button)`
background:white;
color:#2874f0;
text-transform:none;
padding:5px 30px;
box-shadow:none;
height:32px;
border-radius:1px;
font-weight:600
`


function HeaderButtons() {
  const cart = useSelector((cart)=>cart.cart)
  // const cart = useSelector((state)=>  console.log(state))
const navigate = useNavigate()

const [account, setAccount] = useContext(DataContext)

  const [openBox, setOpenBox] = useState(false)
  function handleOpenBox(){
    setOpenBox(true)
  }
  return (
    <Box className="wrapperButtons">
      <div style={{marginLeft: "2%"}}>
      {
        account?<Profile account={account} logout={setAccount}/> :
      <LoginButton variant='contained' onClick={handleOpenBox}>Login</LoginButton>
      }
      </div>
      <Typography style={{ marginTop: 4, marginLeft: "4%", whiteSpace:"nowrap" }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 4, marginLeft: "4%" }}>More</Typography>
      <Box style={{ display: "flex", marginTop: 4, marginLeft: "4%",cursor:"pointer" }} onClick ={()=>{navigate("/Cart")}} >
        <Badge badgeContent={cart.length} color='secondary'>
        <ShoppingCartIcon />
        </Badge>
        <Typography  style={{cursor:"pointer", marginLeft:"5%"}}>Cart </Typography>
      </Box>
      <LoginDialog SendOpenBox={openBox} sendSetOpenBox={setOpenBox} />
    </Box>
  )
}

export default HeaderButtons