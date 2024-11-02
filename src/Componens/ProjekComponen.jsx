import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import film from '../assets/film.png';
import ukmi from '../assets/ukmi.png';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjekComponent = () => {
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
    <Container fluid id="projek" className="container-projek py-5">
      <Container className='projek-dalam'>
        <h2 className="text-center my-5 animate-on-scroll">Projeck</h2> {/* Heading Animation */}
        <Row>
          <Col md={6} className="mb-4">
            <Card className="text-center h-100 d-flex flex-column justify-content-center align-items-center bg-dark animate-on-scroll">
              <Card.Img variant="top" src={ukmi} alt="Gambar 1" className="my-3 animate-on-scroll" style={{ width: '80%' }} />
              <Card.Body className="animate-on-scroll">
                <Card.Title className="animate-on-scroll">Ukmi</Card.Title>
                <Card.Text>
                  Website for Campus Organization Information
                </Card.Text>
                <a 
                  href="https://mwidiy.github.io/ukmi/" 
                  className="btn btn-danger btn-circle animate__animated animate__pulse animate__infinite" 
                  target="_blank">
                  Visit
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="text-center h-100 d-flex flex-column justify-content-center align-items-center bg-dark animate-on-scroll">
              <Card.Img variant="top" src={film} alt="Gambar 2" className="my-3 animate-on-scroll" style={{ width: '80%' }} />
              <Card.Body className="animate-on-scroll">
                <Card.Title className="animate-on-scroll">Film</Card.Title>
                <Card.Text>
                  Website for Displaying Movies from an API
                </Card.Text>
                <a 
                  href="https://mwidiy.github.io/widi-film.github.io/" 
                  className="btn btn-danger btn-circle animate__animated animate__pulse animate__infinite" 
                  target="_blank">
                  Visit
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProjekComponent;
