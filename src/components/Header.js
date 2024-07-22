import React from 'react'
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    Triadic Infosolutions
                </Typography>
                
                <Button color="inherit" component={NavLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/services">
                    Services
                </Button>
                <Button color="inherit" component={NavLink} to="/about">
                    About
                </Button>
                <Button color="inherit" component={NavLink} to="/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
;