import React from 'react';
import ContactBanner from '../assets/images/contact.jpg'
import {Box, Container} from "@mui/material";

const Contact = () => {
    return (
        <Container maxWidth={false}>
            <Box sx={{
                backgroundImage: `url(${ContactBanner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: {
                    sx:'35vh',
                    md:'30vh',
                    xs:'20vh',
                    lg:'45vh',
                },
                width: '100%',
                display: 'flex',
                backgroundPosition: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            </Box>
        </Container>
    );
};

export default Contact;