import './App.scss'
import { SiteHeader } from './components/structuralComponents/Header/SiteHeader';
import { SiteBody } from './components/structuralComponents/Body/SiteBody';
import { SiteFooter } from './components/structuralComponents/Footer/SiteFooter';
import { HashRouter } from 'react-router';
import { createTheme, CssBaseline, InitColorSchemeScript, ThemeProvider } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { colorSchemeSelector, defaultMode, storageKey } from './configuration/colorSchema';

const swapBaseline = window.location.pathname.toLocaleLowerCase().indexOf("/pixels2physicssite") > -1;
const theme = createTheme({
  cssVariables:{
    colorSchemeSelector: colorSchemeSelector
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

function App() {
  return (
    <>
      <InitColorSchemeScript 
        modeStorageKey={storageKey}
        attribute={colorSchemeSelector} 
        defaultMode={defaultMode}
      />
      <HashRouter basename={swapBaseline ? "/" : ""}>
        <ThemeProvider 
          theme={theme}
          forceThemeRerender 
          disableTransitionOnChange
          modeStorageKey={storageKey}
          defaultMode={defaultMode}
          //Disabling server side rendering to prevent flickering with non standard theme chosen.
          noSsr
        >
          <CssBaseline />
          <SiteHeader/>
          <SiteBody/>
          <SiteFooter/>
        </ThemeProvider>
      </HashRouter>
    </>
  )
}

export default App
