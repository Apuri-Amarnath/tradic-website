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
            fontSize: 50,
            color: '#000000',
        },
        h2: {
            fontSize: 36,
            color: '#000000',
        },
        h3: {
            fontSize: 26,
            fontWeight: 500,
            color: '#000000',
            padding: '10px 0',
        },
        h4: {
            fontSize: 18,
            fontWeight: 400,
            color: '#000000',
        },
        h5: {
            fontSize: 16,
            fontWeight: 300,
            color: '#000000'
        },
        h6: {
            fontSize: 12,
            fontWeight: 200,
            color: '#000000',
        },
        body1: {
            fontSize: 18,
            fontWeight: 400,
            color: '#000000',
        },
        body2: {
            fontSize: 16,
            fontWeight: 300,
            color: '#000000',
        },
        caption: {
            fontSize: 14,
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
                        fontSize: 20,
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
});

function App() {
    return (<ThemeProvider theme={theme}>
        <Header/>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
    </ThemeProvider>);
}

export default App;
