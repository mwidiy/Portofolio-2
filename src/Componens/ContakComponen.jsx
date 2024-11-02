import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const ContakComponen = () => {
  return (
    <Container fluid className="contact-container">
      <h2 className="text-center mb-4">Kontak kami</h2>
      <Row className="justify-content-center">
        <Col md={6} className='form bg-dark py-4 px-4'>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama Anda" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email Anda" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Masukkan pesan Anda" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Kirim
            </Button>

            <div className="social-icons contak-sosial mt-3">
              {/* Icons for social media, you can use FontAwesome or any other icon library */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContakComponen;
