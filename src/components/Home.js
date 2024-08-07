import React from 'react';
import {Button, Card, CardContent, Container, Grid, Box, Typography} from "@mui/material";
import {styled} from "@mui/system";

import {useNavigate} from 'react-router-dom';
// import illustrations
import WebDevelopmentIllustration from '../assets/images/undraw_web_development_0l6v (1).svg'
import WebSearchIllustration from '../assets/images/undraw_web_search_re_efla.svg'
import MobileWebIllustration from '../assets/images/undraw_mobile_web_-2-g8b.svg'
import WebsiteIllustration
    from '../assets/images/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg'
import WordpressIllustration from '../assets/images/undraw_wordpress_utxt.svg'
import WedDeveloperIllustration from '../assets/images/undraw_web_developer_re_h7ie.svg'
import BusinessWebsites from '../assets/images/undraw_business_deal_re_up4u.svg'
import StartupSolutions from '../assets/images/undraw_portfolio_website_re_jsdd.svg'
import Ecommerce from '../assets/images/undraw_web_shopping_re_owap.svg'
import WebsiteDesign from '../assets/images/undraw_online_resume_re_ru7s.svg'
//images
import BannerBackground from '../assets/images/polygonal19.jpg'
import {TypeAnimation} from "react-type-animation";


const HeroSection = styled(Box)({
    textAlign: 'center',
    padding: '20px 20px',
});

const ContactButton = styled(Button)({});
const ReadButton = styled(Button)({
    marginTop: '20px',
})
const Section = styled(Box)({
    padding: '40px 20px',
    width: '100%',
});
const BoxSection = styled(Box)(({theme}) => ({
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
}))


const CardStyle = styled(Card)(({theme}) => ({
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1 1 auto',
    height: '100%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('xs')]: {
        width: '500px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '450px',

    },
    [theme.breakpoints.up('md')]: {
        width: '330px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '500px',
    },
    [theme.breakpoints.up('xl')]: {
        width: '500px',
    },

}))
const CardContentStyle = styled(CardContent)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    lineSpacing: '1rem',
    rowGap: '10px',
});
const GridSectionBox = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
        padding: '1vh 10vw',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 10px',
        marginBottom: '50px',
        marginLeft: '50px'
    },
    [theme.breakpoints.up('md')]: {
        padding: '2vh 2vw',
        textAlign: 'center',
        marginBottom: '20px',
        marginLeft: '10px'
    },
    [theme.breakpoints.up('lg')]: {
        padding: '2vh 10vw',
    },
    [theme.breakpoints.up('xl')]: {
        padding: '2vh 10vw',
    },
}));

const CardHeader = styled(Typography)({
    backgroundColor: '#f0a11e',
    color: '#ffffff',
    padding: '20px 20px',
    marginBottom: '20px',
    textAlign: 'center',
});

const Home = () => {
    const navigate = useNavigate();
    const handleClickbutton = (link) => {
        navigate(link);
    };

    return (
        <>
            <Container>
                {/* Hero Section */}
                <HeroSection>
                    <div style={{
                        backgroundcolor: 'linear-gradient(to right, #f0a11e ,black)',
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img src={WebDevelopmentIllustration} alt="Web Development"
                             style={{width: '40%', margin: '40px'}}/>
                        <Typography variant="h4" component="h2" gutterBottom>
                    <span style={{backgroundColor: 'white', padding: '0.2rem'}}>
                        <TypeAnimation
                            sequence={[
                                'Welcome to Triadic Infosolutions',
                                1000,
                                'Innovative Web Solutions',
                                1000,
                                'Expertise in Web Development',
                                1000,
                                'Delivering Quality Solutions',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{fontSize: 'inherit', display: 'inline-block'}}
                            repeat={Infinity}
                        />
                      </span>
                        </Typography>
                        <Typography variant="h5" component="p" gutterBottom sx={{color: 'white'}}>
                            Crafting Digital Experiences
                        </Typography>
                        <Typography variant="h6" component="p" gutterBottom textAlign={'center'}
                                    sx={{width: '70%%', color: 'black', padding: '20px'}}>
                            We specialize in creating beautiful, functional, and user-friendly websites. Our expert team
                            helps businesses establish a strong online presence with Wix and WordPress solutions.
                        </Typography>
                    </div>
                </HeroSection>
                {/* Our Web Development Services */}
            </Container>
            <div>
                <GridSectionBox>
                    <Typography variant="h5" component="h2" gutterBottom
                                sx={{width: '100%', padding: '1vh', textAlign: 'left'}}>
                        Our Web Development Services
                    </Typography>
                    <Grid container dispaly='flex' spacing={6} rowSpacing={6}>
                        <Grid item xs={12} md={4}>
                            <CardStyle>
                                <CardContentStyle>
                                    <CardHeader variant="h5" component="h3">
                                        Custom Website Development
                                    </CardHeader>
                                    <img src={WebsiteDesign} alt="Custom Website Development"
                                         style={{width: '100%', marginBottom: '20px'}}/>
                                    <Typography variant="h6" component="p">
                                        We create websites tailored to your specific needs, ensuring a unique and
                                        engaging
                                        user experience.
                                    </Typography>
                                </CardContentStyle>
                            </CardStyle>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardStyle>
                                <CardContentStyle>
                                    <CardHeader variant="h5" component="h3">
                                        Wix Website Solutions
                                    </CardHeader>
                                    <img src={WebsiteIllustration} alt="Wix Website Solutions"
                                         style={{width: '100%', margin: '30px 0'}}/>
                                    <Typography variant="h6" component="p">
                                        Professional design and development using Wix, perfect for simple informational
                                        sites or complex e-commerce platforms.
                                    </Typography>
                                </CardContentStyle>
                            </CardStyle>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <CardStyle>
                                <CardContentStyle>
                                    <CardHeader variant="h5" component="h3">
                                        WordPress Expertise
                                    </CardHeader>
                                    <img src={WordpressIllustration} alt="WordPress Expertise"
                                         style={{width: '100%', margin: '20px 0px'}}/>
                                    <Typography variant="h6" component="p">
                                        We build scalable, SEO-friendly WordPress sites, from blogs to business websites
                                        and
                                        online stores.
                                    </Typography>
                                </CardContentStyle>
                            </CardStyle>
                        </Grid>
                    </Grid>
                    <Box style={{alignContent: 'center', textAlign: 'center', margin: '30px'}}>
                        <ReadButton variant="contained" color="primary" onClick={() => handleClickbutton('/services')}>
                            View More
                        </ReadButton>
                    </Box>

                    {/* Recent Projects */
                    }
                </GridSectionBox>
            </div>
            <GridSectionBox>

                <Typography variant="h5" component="h2" gutterBottom
                            sx={{width: '100%', padding: '1vh', textAlign: 'left'}}>
                    Our Recent Projects
                </Typography>
                <Grid container spacing={4} rowSpacing={6}>
                    <Grid item xs={12} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <CardHeader variant="h5" component="h3">
                                    Innovative Web Solutions for Startups
                                </CardHeader>
                                <img src={StartupSolutions} alt="Innovative Web Solutions for Startups"
                                     style={{width: '100%', margin: '20px 0px'}}/>
                                <Typography variant="h6" component="p">
                                    Helping tech startups launch their brand with modern websites that attract
                                    investors.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <CardHeader variant="h5" component="h3">
                                    E-Commerce Success Stories
                                </CardHeader>
                                <img src={Ecommerce} alt="E-Commerce Success Stories"
                                     style={{width: '100%', margin: '12px 0px'}}/>
                                <Typography variant="h6" component="p">
                                    Developing e-commerce websites that boost online sales and enhance customer
                                    engagement.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <CardHeader variant="h5" component="h3">
                                    Professional Business Websites
                                </CardHeader>
                                <img src={BusinessWebsites} alt="Professional Business Websites"
                                     style={{width: '100%', margin: '5px 0px'}}/>
                                <Typography variant="h6" component="p">
                                    Crafting polished online presences for consultancy firms to showcase their
                                    services.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                </Grid>
                <Box style={{alignContent: 'center', textAlign: 'center', margin: '30px'}}>
                    <ReadButton variant="contained" color="primary" onClick={() => handleClickbutton('/services')}>
                        Learn More
                    </ReadButton>
                </Box>
            </GridSectionBox>
            {/* Contact-us Call-to-Action */
            }
            <BoxSection>
                    <Box sx={{
                        backgroundColor: '#2558ff',
                        textAlign: 'center',
                        height: '30vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography variant="h4" component="h3" gutterBottom>
                            Ready to Build Your Dream Website?
                        </Typography>
                        <Typography variant="h6" component="p" gutterBottom sx={{'padding': '3%'}}>
                            Whether you're looking for a stunning new website, a redesign, or reliable maintenance
                            services,
                            Triadic Infosolutions is here to help.
                        </Typography>
                        <ContactButton variant="contained" color="primary"
                                       onClick={() => handleClickbutton('/Contact-us')}>
                            Contact Us
                        </ContactButton>
                    </Box>
            </BoxSection>
        </>
    )
        ;
};
export default Home;