import './App.css';
import {backdropClasses, createTheme, ThemeProvider} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NotFoundPage from "./components/NotFoundPage";

const theme = createTheme({
    palette: {
        primary: {
            main: '#f0a11e',
        },
        secondary: {
            main: '#2558ff',
        },
    },
    typography: {
        fontFamily: 'Helvetica Neue',
        h1: {
            fontSize: {
                fontSize: {
                    xs: '22px',
                    sm: '24px',
                    md: '26x',
                    lg: '32px',
                    xl: '36px',
                },
                color: '#000000',
            },
            h2: {
                fontSize: {
                    xs: '24px',
                    sm: '20px',
                    md: '24px',
                    lg: '28px',
                    xl: '32px',

                },
                color: '#000000',
            },
            h3: {
                fontSize: {
                    xs: '20px',
                    sm: '18px',
                    md: '20px',
                    lg: '22px',
                    xl: '24px',
                },
                fontWeight: 500,
                color: '#000000',
                padding: '10px 0',
            },
            h4: {
                fontSize: {
                    xs: '16px',
                    sm: '14px',
                    md: '16px',
                    lg: '20px',
                    xl: '22px',
                },
                fontWeight: 400,
                color: '#000000',
            },
            h5: {
                fontSize: {
                    xs: '16px',
                    sm: '14px',
                    md: '12px',
                    lg: '18px',
                    xl: '18px',
                },
                fontWeight: 300,
                color: '#000000'
            },
            h6: {
                fontSize: {
                    xs: '16px',
                    sm: '14px',
                    md: '18px',
                    lg: '20px',
                    xl: '22px',
                },
                fontWeight: 200,
                color: '#000000',
            },
            body1: {
                fontSize: {
                    xs: '18px',
                    sm: '16px',
                    md: '18px',
                    lg: '24px',
                    xl: '28px',
                },
                fontWeight: 400,
                color: '#000000',
            },
            body2: {
                fontSize: {
                    xs: '18px',
                    sm: '16px',
                    md: '18px',
                    lg: '24px',
                    xl: '26px',
                },
                fontWeight: 300,
                color: '#000000',
            },
            caption: {
                fontSize: {
                    xs: '12px',
                    sm: '10px',
                    md: '12px',
                    lg: '14px',
                    xl: '16px',
                },
                fontWeight: 200,
                color: '#555',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontFamily: 'Helvetica Neue',
                        '&:hover': {
                            backgroundColor: '#e5dcdc',
                        }
                    }
                },
                variants: [
                    {
                        props: {color: 'secondary'},
                        style: {
                            '&:hover': {
                                backgroundColour: '#f0a11e'
                            }
                        }
                    },
                    {
                        props: {variant: 'navLink'},
                        style: {
                            textTransform: 'none',
                            fontSize: {
                                xs: '22px',
                                sm: '18px',
                                md: '30px',
                                lg: '24px',
                                xl: '24px',
                            },
                            fontWeight: 500,
                            color: '#222',
                            '&:hover': {
                                backgroundColor: '#e5dcdc',
                            }
                        }
                    },
                ]
            },
            MuiGrid: {
                variants: [
                    {
                        props: {variant: 'grid-home'},
                        style: {
                            root: {
                                color: '#fff',
                                borderRadius: 4,
                                padding: 16,
                                "& .MuiGrid-item": {
                                    backgroundColor: "#f0a11e",
                                    color: "#fff",
                                    borderRadius: 4,
                                    padding: 16,
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                        color: "#f0a11e",
                                    },
                                }
                            }
                        }
                    }
                ]

            }
        }
    }
});

function App() {
    return (<ThemeProvider theme={theme}>
        <Header/>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
    </ThemeProvider>);
}

export default App;
