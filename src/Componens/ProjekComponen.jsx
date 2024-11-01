import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import film from '../assets/film.png'; 
import ukmi from '../assets/ukmi.png'; 


const ProjekComponent = () => {
  return (
    <Container fluid className="container-projek py-5">
    <Container className='projek-dalam'>
      <h2 className="text-center my-5">Projeck</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="text-center h-100 d-flex flex-column justify-content-center align-items-center bg-dark">
            <Card.Img variant="top" src={ukmi} alt="Gambar 1" className="my-3" style={{ width: '80%' }} />
            <Card.Body>
              <Card.Title>Ukmi</Card.Title>
              <Card.Text>
                Website informasi untuk organisasi kampus
              </Card.Text>
              <a href="https://mwidiy.github.io/ukmi/" className="btn btn-primary btn-circle" target="_blank" >Kunjungi</a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="text-center h-100 d-flex flex-column justify-content-center align-items-center bg-dark">
            <Card.Img variant="top" src={film} alt="Gambar 2" className="my-3" style={{ width: '80%' }} />
            <Card.Body>
              <Card.Title>Film</Card.Title>
              <Card.Text>
                Website untuk menampilkan film dari Api
              </Card.Text>
              <a href="https://mwidiy.github.io/widi-film.github.io/" className="btn btn-primary btn-circle" target="_blank" >Kunjungi</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </Container>
  );
};

export default ProjekComponent;
