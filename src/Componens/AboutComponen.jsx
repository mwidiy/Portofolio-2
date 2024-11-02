import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../assets/bg.jpg';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutComponen = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <Container fluid className="outer-container py-5">
      <Container id="about" className="about-container bg-dark">
        <Row>
          <Col md={6} className="text-center animate-on-scroll animate__fadeInLeft">
            <Image src={profile} alt="Profile" className="img-fluid profile-image" rounded />
          </Col>
          <Col md={6} className="animate-on-scroll animate__fadeInRight">
            <h2 className="animate-on-scroll animate__fadeInDown">About Me</h2>
            <h4 className="animate-on-scroll animate__fadeInDown" style={{ animationDelay: '0.3s' }}>Enjoy something more on me :)</h4>
            <h4 className="animate-on-scroll animate__fadeInDown" style={{ animationDelay: '0.6s' }}>Just For Fun</h4>
            <p className="animate-on-scroll animate__fadeInDown" style={{ animationDelay: '0.9s' }}>
              Widi is an informatics student focusing on web development. With experience creating informational websites for a campus organization, he is determined to keep learning and exploring new things. Widi is confident that within the next five years, he will become a skilled web developer.
            </p>
            <h5 className="animate-on-scroll animate__fadeInDown" style={{ animationDelay: '1.2s' }}>Technologies mastered</h5>
            <Row className="technologies-icons">
              <Col className="animate-on-scroll animate__bounceIn" style={{ animationDelay: '1.5s' }}><i className="fab fa-html5"></i></Col>
              <Col className="animate-on-scroll animate__bounceIn" style={{ animationDelay: '1.8s' }}><i className="fab fa-css3"></i></Col>
              <Col className="animate-on-scroll animate__bounceIn" style={{ animationDelay: '2.1s' }}><i className="fab fa-js"></i></Col>
              <Col className="animate-on-scroll animate__bounceIn" style={{ animationDelay: '2.4s' }}><i className="fab fa-php"></i></Col>
            </Row>
            <p className='text-light animate-on-scroll animate__fadeInUp' style={{ animationDelay: '2.7s' }}><i className="fa-solid fa-envelope"></i> muhammadwidi72@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComponen;
