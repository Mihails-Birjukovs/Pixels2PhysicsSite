import './App.scss'
import { SiteHeader } from './components/structuralComponents/Header/SiteHeader';
import { SiteBody } from './components/structuralComponents/Body/SiteBody';
import { SiteFooter } from './components/structuralComponents/Footer/SiteFooter';
import { HashRouter } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';

const swapBaseline = window.location.pathname.toLocaleLowerCase().indexOf("/pixels2physicssite") > -1;

function App() {
  const theme = createTheme({
    cssVariables:{
      colorSchemeSelector: ".theme-%s"
    },
    colorSchemes:{
      light: {
        palette:{
          primary: {
            main: "#FFFFFF",
            contrastText: "#000000DE"
          },
          secondary: {
            main: "#1B5FB4",
            contrastText: "#FFFFFFDE"
          }
        }
      },
      dark: {
        palette:{
          primary: {
            main: "#121212",
            contrastText: "#FAFAFADE"
          },
          secondary: {
            main: "#212121",
            contrastText: "#FAFAFADE"
          }
        }
      }
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
