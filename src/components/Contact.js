import React from 'react';
import ContactBanner from '../assets/images/contact.jpg'
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";

import * as PropTypes from "prop-types";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import {styled} from "@mui/system";
import MapComponent from "./Map";

const CustomBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    justifyContent: 'flex-start',
    marginTop: '2px',
}));
const CustomHr = styled("hr")(({theme}) => ({
    height: '3px',
    backgroundColor: '#2558ff',
    width: '40%',
    [theme.breakpoints.up('sm')]: {
        width: '40%',
    },
    [theme.breakpoints.up('md')]: {
        width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
        width: '50%',
    },
    [theme.breakpoints.up('xl')]: {
        width: '50%',
    },
}));
const Contact = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${ContactBanner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: {
                    sx: '35vh',
                    md: '35vh',
                    xs: '20vh',
                    lg: '35vh',
                },
                padding: '20px 0',
                width: '100%',
                display: 'flex',
                backgroundPosition: 'center',
                justifyContent: 'left',
                alignItems: 'center',
            }}>
                <Box sx={{
                    padding: '0 5vh', color: 'white'
                }}>
                    <Typography variant={'h4'} sx={{fontWeight: '800'}}>
                        Contact us
                    </Typography>
                    <Typography variant={'h6'} sx={{width: {md: '100%', xs: '100%', lg: '40%'}}}>
                        If you have any questions, suggestions, or require assistance, please do not hesitate to
                        reach
                        out to us. We are here to help and look forward to hearing from you.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{textAlign: 'center', padding: '20px 0'}}>
                <Typography variant={'h5'} sx={{color: '#2558ff'}}>
                    let's Connect
                </Typography>
                <Typography variant={'h4'} sx={{fontWeight: '600', color: 'black', margin: '10px 0'}}>
                    Contact us
                </Typography>
            </Box>
            <Container sx={{
                display: 'flex', flexDirection: {
                    sx: 'row',
                    md: 'column',
                    xs: 'column',
                    lg: 'row'
                }, gap: '5vh',
                marginBottom: '20px',
            }} maxWidth={'xl'}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                required
                                InputLabelProps={{
                                    style: {color: '#000'}, // Label color
                                }}
                                InputProps={{
                                    style: {color: '#000'}, // Text color
                                    disableUnderline: true, // Remove underline for filled variant
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                required
                                InputLabelProps={{
                                    style: {color: '#000'}, // Label color
                                }}
                                InputProps={{
                                    style: {color: '#000'}, // Text color
                                    disableUnderline: true, // Remove underline for filled variant
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                InputLabelProps={{
                                    style: {color: '#000'}, // Label color
                                }}
                                InputProps={{
                                    style: {color: '#000'}, // Text color
                                    disableUnderline: true, // Remove underline for filled variant
                                }}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                                InputLabelProps={{
                                    style: {color: '#000'}, // Label color
                                }}
                                InputProps={{
                                    style: {color: '#000'}, // Text color
                                    disableUnderline: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{justifyContent: 'center', display: 'flex'}}>
                            <Button variant="contained" color="primary" sx={{
                                width: {
                                    xs: '100%',
                                    sm: '75%',
                                    md: '50%',
                                    lg: '25%',
                                }
                            }} type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography variant={'h4'} sx={{textAlign: 'center'}}>
                        Get in touch
                    </Typography>
                    <CustomHr/>
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        flexDirection: 'column',
                        marginBottom: '20px',
                    }}>
                        <CustomBox>
                            <PlaceIcon/>
                            <Typography variant={'h5'} component={'h3'}>
                                Address
                            </Typography>
                        </CustomBox>
                        <Typography variant={'h6'} component={'p'}>
                            Vijaynagar Colony, Hyderabad, Telangana 500007, IN
                        </Typography>
                        <CustomBox>

                            <EmailIcon/>
                            <Typography variant={'h5'} component={'h3'}>
                                Email
                            </Typography>
                        </CustomBox>
                        <Typography variant={'h6'} component={'p'}>
                            hr@tradicinfosolutions.com
                        </Typography>
                        <CustomBox>

                            <PhoneIcon/>
                            <Typography variant={'h5'} component={'h3'}>
                                Phone
                            </Typography>
                        </CustomBox>
                        <Typography variant={'h6'} component={'p'}>
                            +91 9071001711
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Container maxWidth={'xl'} sx={{textAlign: 'center', padding: '10px', marginBottom: '40px'}}>
                <Typography variant={'h5'} sx={{fontWeight: '600', color: '#4b3916', margin: '10px 0'}}>
                    Our Location
                </Typography>
                <MapComponent/>
            </Container>
        </>
    )
        ;
};

export default Contact;