import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import porto from '../assets/portofolio.png';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioComponent = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInUp');
          entry.target.classList.add('animate__faster');
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
    <Container fluid id="portofolio" className="portofoliokk">
      <Container className="portfolio-container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h2 className="text-porto mb-4 animate-on-scroll">Portofolio</h2> {/* Heading Animation */}
        <Row className="w-100 d-flex justify-content-center">
          <Col md={6}>
            <Card className="mb-4 text-center bg-dark animate-on-scroll">
              <Card.Img variant="top" src={porto} alt="Gambar 1" className="animate-on-scroll" />
              <Card.Body>
                <Card.Title className="animate-on-scroll">Portofolio 1</Card.Title>
                <a href="https://mwidiy.github.io/portofolio-1/index.html" className="btn btn-danger btn-circle animate__animated animate__pulse animate__infinite" target="_blank">Visit</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PortfolioComponent;
