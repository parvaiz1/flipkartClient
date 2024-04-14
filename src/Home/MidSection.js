
import React from 'react'
import {imageURL} from "../../src/Home/NavData"
import { Box } from '@mui/material'

function MidSection() {
  return (
    <Box style={{display:"flex"}}>
        {
            imageURL.map((image)=>{
                return(
                    <img src={image} style={{width:"33%"}} />
                )
            })
        }
    </Box>
  )
}

export default MidSection