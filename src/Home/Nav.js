import React from 'react'
import { navData } from './NavData'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const NavDataWrapper = styled(Box)`
display : flex;
margin: 0 5%;
justify-content:space-between;
flex-wrap:wrap
`
const Container = styled(Box)`
padding:12px 6px;
text-align:center
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit
`

function Nav() {
  return (
    <>
    <NavDataWrapper>
        {
            navData.map((Navdata)=>{
                return(
                    <Container>
                        <img src={Navdata.url} alt="nav" style={{width:64}}/>
                        <Text >{Navdata.text} </Text>
                    </Container>

                )
            })
        }
        
    </NavDataWrapper>
    </>
  )
}

export default Nav