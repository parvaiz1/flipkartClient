import React, { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import styled from '@emotion/styled';


const LogOtwrapper = styled(Menu)`
margin-top:5px
`
const Logout = styled(Typography)`
margin-left:20px;
font-size:14px
`

function Profile({ account, logout }) {
    const [open, setOpen] = useState(false)

    function handleOpen(e) {
        // setOpen(true)
        setOpen(e.currentTarget)
        console.log(e.currentTarget)
    }
    function LogoutUser() {
        logout("")
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <>
            <Box onClick={handleOpen}>
                <Typography style={{ marginTop: 3, cursor: "pointer" }}>{account}</Typography>
            </Box>

            <LogOtwrapper
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}

            >
                <MenuItem onClick={() => { handleClose(); LogoutUser() }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Logout>Logout</Logout>
                </MenuItem>

            </LogOtwrapper>



        </>
    )
}

export default Profile