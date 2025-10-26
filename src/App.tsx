import { useEffect } from 'react'
import './App.scss'
import { SiteHeader } from './components/structuralComponents/Header/SiteHeader';
import { SiteBody } from './components/structuralComponents/Body/SiteBody';
import { SiteFooter } from './components/structuralComponents/Footer/SiteFooter';
import { HashRouter } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';

const swapBaseline = window.location.pathname.toLocaleLowerCase().indexOf("/pixels2physicssite") > -1;

function App() {
  useEffect(() => {}, []);
  const theme = createTheme({
    cssVariables:true,
    palette:{
      primary: {
        main: "#FFFFFF",
        contrastText: "#000000DE"
      },
      secondary: {
        main: "#1B5FB4",
        contrastText: "#FFFFFFDE"
      }
    },
    typography:{
      allVariants: {}
    }
  });
  return (
    <>
      <HashRouter basename={swapBaseline ? "/" : ""}>
        <ThemeProvider theme={theme}>
          <SiteHeader/>
          <SiteBody/>
          <SiteFooter/>
        </ThemeProvider>
      </HashRouter>
    </>
  )
}

export default App
