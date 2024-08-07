import React from 'react'
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'
import {styled} from "@mui/system";


const logoUrl = `${process.env.PUBLIC_URL}/site-logo.png`;
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const MobileMenuItem = styled(MenuItem)({
        fontSize: '20px',
    });
    return (
        <AppBar position="sticky" sx={{top: 0, zIndex: 1000}}>
            <Toolbar>
                <img src={logoUrl} style={{width: '50px', margin: '10px'}} alt="Logo"/>
                <Typography
                    variant="h3"
                    sx={{
                        flexGrow: 1,
                        display: {xs: 'block', md: 'block', sm: 'block'},
                        fontSize: {xs: '22px', sm: '24px'},
                    }}
                >
                    Triadic Infosolutions
                </Typography>
                <Box sx={{
                    display: {
                        xs: 'none',
                        sm: 'block',
                        md: 'none',
                        lg: 'block',
                        xl: 'block',
                    }, marginLeft: 'auto'
                }}>
                    <Button color="inherit" component={NavLink} to="/" variant='navLink'>
                        Home
                    </Button>
                    <Button color="inherit" component={NavLink} variant='navLink' to="/services">
                        Services
                    </Button>
                    <Button color="inherit" component={NavLink} variant='navLink' to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={NavLink} variant='navLink' to="/contact">
                        Contact
                    </Button>
                </Box>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        marginLeft: 'auto', display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'block',
                            lg: 'none',
                            xl: 'none',
                        }
                    }}
                    onClick={handleOpenMenu}
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    PaperProps={{
                        style: {
                            width: '200px',
                            maxHeight: '300px',
                            fontSize: {
                                xs: '22px',
                                sm: '24px',
                                md: '26px',
                                lg: '28px',
                                xl: '30px',
                            },
                        },
                    }}
                >
                    <MobileMenuItem onClick={handleCloseMenu} component={NavLink} to="/">
                        Home
                    </MobileMenuItem>
                    <MobileMenuItem onClick={handleCloseMenu} component={NavLink} to="/services">
                        Services
                    </MobileMenuItem>
                    <MobileMenuItem onClick={handleCloseMenu} component={NavLink} to="/about">
                        About
                    </MobileMenuItem>
                    <MobileMenuItem onClick={handleCloseMenu} component={NavLink} to="/contact">
                        Contact
                    </MobileMenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;