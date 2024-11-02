import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContakComponen = () => {
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
    <Container fluid id="contak" className="contact-container pb-5">
      <h2 className="text-center mb-4 animate-on-scroll">Contact Us</h2> {/* Heading Animation */}
      <Row className="justify-content-center">
        <Col md={6} className='form bg-dark py-4 px-4 animate-on-scroll'>
          <Form>
            <Form.Group controlId="formName" className="mb-3 animate-on-scroll">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3 animate-on-scroll">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3 animate-on-scroll">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your Message" />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100 animate-on-scroll">
              Send Message
            </Button>

            <div className="social-icons contak-sosial mt-3 animate-on-scroll">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/m_widiyan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://www.linkedin.com/in/muhamad-widiyanto-616230312/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContakComponen;
