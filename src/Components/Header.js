import React, { useState } from 'react'
import { AppBar, Toolbar, Box, styled, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Search from "./Search";
import HeaderButtons from './HeaderButtons';
import "./Header.css";
import { useNavigate } from 'react-router-dom';


const StyledHeader = styled(AppBar)`
background: #2874f0;
height: 55px
`
const ImageBox = styled(Box)`
margin-left:10%;
line-height:0;
font-style:italic
`
const ExploreStyle = styled(Typography)`
font-size:10px
`
function Header() {

  const [checkOpen, setcheckOpen] = useState(false)

  function handleClose() {
    setcheckOpen(false)
  }

  function handleOpen() {
    setcheckOpen(true)

  }

  
  const navigate = useNavigate()

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <>

      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>

          <ImageBox onClick={()=>{navigate("/")}} style={{ cursor:"pointer" }}>
            <img src={logoURL} style={{ width: 75 }} />
            <Box >
              <ExploreStyle>Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>Pluse</Box>
                <img src={subURL} style={{ width: 10 }} />
              </ExploreStyle>
            </Box>
          </ImageBox>
          <Search />
          

          <Box style={{ width: "55%" }} className="header">
            <HeaderButtons />
          </Box>

          <Box className="menuicon">
          <IconButton style={{color:"white"}}  onClick={handleOpen} >          
            <MenuIcon  />
          </IconButton>
          </Box>


          <Drawer open={checkOpen} onClick={handleClose} anchor={"right"}>
          <HeaderButtons />
          </Drawer>
        </Toolbar>
      </StyledHeader>

    </>
  )
}

export default Header