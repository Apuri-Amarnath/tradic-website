import React from 'react';
import {Box, Container, List, ListItem, ListItemIcon, ListItemText, Link, Typography, Divider} from "@mui/material";
import {NavLink} from "react-router-dom";
import {styled} from "@mui/system";

const CustomListItem = styled(ListItem)(({theme}) => ({
    padding: '5px 20px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    justifyContent: 'center',
    '&:hover': {
        color: '#f0a11e',
        fontWeight: 'bold',
    },
    '&.active-link': {
        fontWeight: 'bold',

    },
    textAlign: 'center',
    textTransform: 'uppercase',
}));
const CustomHr = styled("hr")(({theme}) => ({
    width: '30%',
    [theme.breakpoints.up('sm')]: {
        width: '20%',
    },
    [theme.breakpoints.up('md')]: {
        width: '10%',
    },
    [theme.breakpoints.up('lg')]: {
        width: '20%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '20%',
    },
}));

const Footer = () => {
    return (
        <footer style={{marginTop: '10px', backgroundColor: '#223a',}}>
            <Container maxWidth='lg' sx={{
                display: {
                    sx: 'block',
                    md: 'block',
                    sm: 'flex',
                    lg: 'flex',
                    xl: 'flex',
                }, flexDirection: 'row', textAlign: 'center', padding: '1vh',
            }}>
                <Container sx={{marginBottom: '20px'}}>
                    < Typography variant={'h5'} sx={{color: 'white'}} gutterBottom>
                        Address
                    </Typography>
                    <CustomHr/>
                    <Typography variant={'h6'} component={'p'} sx={{color: 'white'}}>
                        Vijaynagar Colony, Hyderabad, Telangana 500007, IN
                    </Typography>
                </Container>
                <Container sx={{marginBottom: '20px'}}>
                    <Typography variant="h5"
                                sx={{color: 'white', textAlign: 'center'}}
                                gutterBottom>
                        Quick Links
                    </Typography>
                    <CustomHr/>
                    <List sx={{padding: '0',}}>
                        <CustomListItem
                            component={NavLink}
                            to="/"
                        >
                            Home
                        </CustomListItem>
                        <CustomListItem
                            component={NavLink}
                            to="/about"

                        >About

                        </CustomListItem>
                        <CustomListItem
                            component={NavLink}
                            to="/services"

                        >Services
                        </CustomListItem>
                        <CustomListItem
                            component={NavLink}
                            to="/contact"
                        >Contact
                        </CustomListItem>
                    </List>
                </Container>
                <Container sx={{marginBottom: '20px'}}>
                    <Typography variant="h5"
                                sx={{color: 'white'}}
                                gutterBottom>
                        Social links
                    </Typography>
                    <CustomHr/>
                    <List sx={{padding: '0',}}>
                    </List>
                </Container>
            </Container>
            <Typography sx={{backgroundColor: '#f0f0f0'}} variant="h6" textAlign="center" padding={1} marginY={2}>© 2024
                Triadic
                Infosolutions. All rights
                reserved.</Typography>
        </footer>
    );
};

export default Footer;