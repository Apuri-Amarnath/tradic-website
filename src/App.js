import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
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
        }, secondary: {
            main: '#2558ff',
        },
    }, components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Helvetica Neue', '&:hover': {
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
                }
            ]
        }
    }
})

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
