import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/bg.jpg'; 

const AboutComponen = () => {
  return (
    <Container fluid className="outer-container py-5">
    <Container className="about-container bg-dark">
      <Row>
        <Col md={6} className="text-center">
          <Image src={profile} alt="Profile" className="img-fluid profile-image" rounded />
        </Col>
        <Col md={6}>
          <h2>About Me</h2>
          <h4>Enjoy something more on me :)</h4>
          <h4>Just For Fun</h4>
          <p>
          Widi is an informatics student focusing on web development. With experience creating informational websites for a campus organization, he is determined to keep learning and exploring new things. Widi is confident that within the next five years, he will become a skilled web developer.
          </p>
          <h5>Technologies mastered</h5>
          <Row className="technologies-icons">
            <Col><i className="fab fa-html5"></i></Col>
            <Col><i className="fab fa-css3"></i></Col>
            <Col><i className="fab fa-js"></i></Col>
            <Col><i className="fab fa-php"></i></Col>
          </Row>
          <p className='text-light'><i class="fa-solid fa-envelope"></i> muhammadwidi72@gmail.com</p>
        </Col>
      </Row>
    </Container>
    </Container>
  );
};

export default AboutComponen;
