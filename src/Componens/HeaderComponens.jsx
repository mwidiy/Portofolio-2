import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/widi.jpg'; 

const HeaderComponens = () => {
  return (
      <Container fluid className="header-container">
        <Row className="align-items-center" style={{ minHeight: '100vh' }}>
          <Col md={6} className="text-light text-center text-md-left">
            <h1>Welcome To My PORTFOLIO! 👋</h1>
            <h2>Muhamad Widiyanto</h2>
            <h3>Web Developer</h3>
            
            <div className="social-icons mt-3">
              {/* Icons for social media, you can use FontAwesome or any other icon library */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>

          <Col md={6} className="text-center">
            <Image src={profile} alt="Profile" className="img-fluid profile-image" />
          </Col>
        </Row>
      </Container>

  )
}

export default HeaderComponens