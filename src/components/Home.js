import React from 'react';
import {Button, Card, CardContent, Container, Grid, Box, Typography} from "@mui/material";
import {styled} from "@mui/system";
// import illustrations
import WebDevelopmentIllustration from '../assets/images/undraw_web_development_0l6v (1).svg'
import WebSearchIllustration from '../assets/images/undraw_web_search_re_efla.svg'
import MobileWebIllustration from '../assets/images/undraw_mobile_web_-2-g8b.svg'
import WebsiteIllustration
    from '../assets/images/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg'
import WordpressIllustration from '../assets/images/undraw_wordpress_utxt.svg'
import WedDeveloperIllustration from '../assets/images/undraw_web_developer_re_h7ie.svg'
import WebsiteDesign from '../assets/images/undraw_online_resume_re_ru7s.svg'

const HeroSection = styled(Box)({
    textAlign: 'center',
    padding: '100px 20px',
});

const ContactButton = styled(Button)({
    marginTop: '20px',
});
const Section = styled(Box)({
    padding: '40px 20px',
});

const CardStyle = styled(Card)({
    padding: '10px',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: '100%',

})
const CardContentStyle = styled(CardContent)({
    flex: 1, // This makes the content area flexible and fills up the available space
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    lineSpacing:'1rem',
});

const CardHeader = styled(Typography)({
    backgroundColor: '#f0a11e',
    color: '#ffffff',
    padding: '10px 0',
    marginBottom: '20px',
    textAlign: 'center',
});

const Home = () => {
    return (
        <Container>
            {/* Hero Section */}
            <HeroSection>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to Triadic Infosolutions
                </Typography>
                <img src={WebDevelopmentIllustration} alt="Web Development" style={{width: '40%', margin: '20px'}}/>
                <Typography variant="h4" component="p" gutterBottom>
                    Crafting Digital Experiences
                </Typography>
                <Typography variant="body1" component="p">
                    We specialize in creating beautiful, functional, and user-friendly websites. Our expert team helps
                    businesses establish a strong online presence with Wix and WordPress solutions.
                </Typography>
            </HeroSection>

            {/* Our Web Development Services */}
            <Section>
                <Typography variant="h3" component="h2" gutterBottom sx={{width: '100%'}}>
                    Our Web Development Services
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={18} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <CardHeader variant="h5" component="h3">
                                    Custom Website Development
                                </CardHeader>
                                <img src={WebsiteDesign} alt="Custom Website Development"
                                     style={{width: '100%', marginBottom: '20px'}}/>
                                <Typography variant="h5" component="p">
                                    We create websites tailored to your specific needs, ensuring a unique and engaging
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
                                <Typography variant="h5" component="p">
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
                                <Typography variant="h5" component="p">
                                    We build scalable, SEO-friendly WordPress sites, from blogs to business websites and
                                    online stores.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                </Grid>
            </Section>

            {/* Recent Projects */}
            <Section>
                <Typography variant="h4" component="h2" gutterBottom>
                    Our Recent Projects
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <Typography variant="h5" component="h3">
                                    Innovative Web Solutions for Startups
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Helping tech startups launch their brand with modern websites that attract
                                    investors.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <Typography variant="h5" component="h3">
                                    E-Commerce Success Stories
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Developing e-commerce websites that boost online sales and enhance customer
                                    engagement.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardStyle>
                            <CardContentStyle>
                                <Typography variant="h5" component="h3">
                                    Professional Business Websites
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Crafting polished online presences for consultancy firms to showcase their services.
                                </Typography>
                            </CardContentStyle>
                        </CardStyle>
                    </Grid>
                </Grid>
            </Section>

            {/* Contact Call-to-Action */}
            <Section sx={{textAlign: 'center'}}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Ready to Build Your Dream Website?
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Whether you're looking for a stunning new website, a redesign, or reliable maintenance services,
                    Triadic Infosolutions is here to help.
                </Typography>
                <ContactButton variant="contained" color="primary">
                    Contact Us
                </ContactButton>
            </Section>
        </Container>
    );
};
export default Home;