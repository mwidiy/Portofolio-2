import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import porto from '../assets/portofolio.png';


const PortfolioComponent = () => {
  return (
    <Container fluid className="portofoliokk">
      <Container className="portfolio-container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h2 className="text-porto mb-4">Portofolio</h2> 
        <Row className="w-100 d-flex justify-content-center">
          <Col md={6}>
            <Card className="mb-4 text-center bg-dark">
              <Card.Img variant="top" src={porto} alt="Gambar 1" />
              <Card.Body>
                <Card.Title>Portofolio 1</Card.Title>
                <a href="https://mwidiy.github.io/portofolio-1/index.html" className="btn btn-primary btn-circle" target="_blank" >Kunjungi</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PortfolioComponent;
