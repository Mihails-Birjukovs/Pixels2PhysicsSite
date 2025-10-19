import { useEffect } from 'react'
import './App.scss'
import { SiteHeader } from './components/structuralComponents/Header/SiteHeader';
import { SiteBody } from './components/structuralComponents/Body/SiteBody';
import { SiteFooter } from './components/structuralComponents/Footer/SiteFooter';
import { HashRouter } from 'react-router';

const swapBaseline = window.location.pathname.toLocaleLowerCase().indexOf("/pixels2physicssite") > -1;

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <HashRouter basename={swapBaseline ? "/" : ""}>
        <SiteHeader/>
        <SiteBody/>
        <SiteFooter/>
      </HashRouter>
    </>
  )
}

export default App
