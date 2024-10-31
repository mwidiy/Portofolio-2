import {Routes, Route} from 'react-router-dom'
import MainPage from './page/MainPage'
import NavbarComponen from './Componens/NavbarComponen'
import AboutComponen from './Componens/AboutComponen'
import HeaderComponens from './Componens/HeaderComponens'
import ProjekComponen from './Componens/ProjekComponen'
import PortofolioComponen from './Componens/PortofolioComponen'
import ContakComponen from './Componens/ContakComponen'
import FooterComponen from './Componens/FooterComponen'
import "./css/main.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return <div>
    <NavbarComponen />
    <HeaderComponens />
    <AboutComponen />
    <ProjekComponen />
    <PortofolioComponen />
    <ContakComponen />
    <Routes>
      <Route path='/' Component={MainPage}/>
    </Routes>
    <FooterComponen />\
  </div>
}

export default App
