import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/widiloggo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponen = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const sectionElement = document.querySelector(`#${section}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" onClick={() => handleNavClick('home')}>
          <img src={logo} width="50" height="30" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={`mx-3 nav-hover ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}>
              Home
            </Nav.Link>
            <Nav.Link
              className={`mx-3 nav-hover ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}>
              About
            </Nav.Link>
            <Nav.Link
              className={`mx-3 nav-hover ${activeSection === 'projek' ? 'active' : ''}`}
              onClick={() => handleNavClick('projek')}>
              Projeck
            </Nav.Link>
            <Nav.Link
              className={`mx-3 nav-hover ${activeSection === 'portofolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('portofolio')}>
              Portofolio
            </Nav.Link>
            <Nav.Link
              className={`mx-3 nav-hover ${activeSection === 'contak' ? 'active' : ''}`}
              onClick={() => handleNavClick('contak')}>
              Contak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponen;
