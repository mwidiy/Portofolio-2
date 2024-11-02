import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/widi.jpg';
import Typed from 'typed.js';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const HeaderComponens = () => {
  useEffect(() => {
    const options = {
      strings: ['Muhamad Widiyanto'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false
    };

    const typed = new Typed('.typed-name', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container fluid id="home" className="header-container">
      <Row className="align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6} className="text-light text-center text-md-left">
          <h1 className="animate__animated animate__bounceIn">Welcome To My PORTFOLIO! 👋</h1> {/* Animasi bounce in */}
          <h2 className="typed-name"></h2> {/* Animasi mengetik */}
          <h3 className="animate__animated animate__fadeInUp">Web Developer</h3> {/* Animasi fade in up */}
          
          <div className="social-icons mt-3 animate__animated animate__zoomIn"> {/* Animasi zoom in */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/m_widiyan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/muhamad-widiyanto-616230312/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </Col>

        <Col md={6} className="text-center animate__animated animate__slideInRight smooth-slide"> {/* Animasi slide in right */}
          <Image src={profile} alt="Profile" className="img-fluid profile-image animate__animated animate__rotateIn" /> {/* Animasi rotate in */}
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderComponens;
