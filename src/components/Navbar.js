import React from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate()


    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <AppBar sx={{ backgroundColor: "lightcyan" }}>
                <Toolbar>
                    <ShoppingCartIcon sx={{ color: "black" }} />
                    <Typography sx={{ color: "black" }} variant='h6'> Shikshya </Typography>
                    <Tabs>
                    </Tabs>
                    <Button sx={{ marginLeft: "auto" }} onClick={handleLogin} variant='contained'>Login</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar