import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer fluid className="footer bg-dark text-white py-4 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h5>&copy; Widiyanto 2024</h5>
            {/* <p>
              Foolish Developer is a blog website where you will find great tutorials on web design and development.
              Here each tutorial is beautifully described step by step with the required source code.
            </p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;


