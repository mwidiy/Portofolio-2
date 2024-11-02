import {Routes, Route} from 'react-router-dom';
import NavbarComponen from './Componens/NavbarComponen';
import AboutComponen from './Componens/AboutComponen';
import HeaderComponens from './Componens/HeaderComponens';
import ProjekComponen from './Componens/ProjekComponen';
import PortofolioComponen from './Componens/PortofolioComponen';
import ContakComponen from './Componens/ContakComponen';
import FooterComponen from './Componens/FooterComponen';
import "./css/main.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <NavbarComponen />
      <section id="home">
       <HeaderComponens />
      </section>
      <section id="about">
        <AboutComponen />
      </section>
      <section id="projek">
        <ProjekComponen />
      </section>
      <section id="portofolio">
        <PortofolioComponen />
      </section>
      <section id="contak">
        <ContakComponen />
      </section>
      <FooterComponen />
    </div>
  );
}

export default App;
