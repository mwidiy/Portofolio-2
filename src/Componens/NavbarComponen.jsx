import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/widiloggo.png"

const NavbarComponen = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="50" height="30" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="mx-3 nav-hover active" href="#home">Home</Nav.Link>
          <Nav.Link className="mx-3 nav-hover active" href="#link">About</Nav.Link>
          <Nav.Link className="mx-3 nav-hover active" href="#link">Projeck</Nav.Link>
          <Nav.Link className="mx-3 nav-hover active" href="#link">Portofolio</Nav.Link>
          <Nav.Link className="mx-3 nav-hover active" href="#link">Contak</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponen