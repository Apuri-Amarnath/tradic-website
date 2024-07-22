import React from 'react';
import {Typography} from "@mui/material";

const Footer = () => {
    return (
        <footer style={{padding: '10px', marginTop: '10px', backgroundColor: '#f0f0f0'}}>
            <Typography variant="body1" textAlign="center" marginY={2}>© 2024 Triadic Infosolutions. All rights
                reserved.</Typography>
        </footer>
    )
        ;
};

export default Footer;