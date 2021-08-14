import React  from 'react';
import { Navbar, Container,NavDropdown,Nav,Card } from 'react-bootstrap';

const Header = () => {
    return   <Navbar collapseOnSelect expand="lg" bg="white" variant="darkbl">
    <Container>
    <Navbar.Brand style={{ float: "left"}} href="#home">VHAGYC</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="Accueil">Accueil</Nav.Link>
        <Nav.Link href="Espace professionnel">Espace professionnel</Nav.Link>
        <Nav.Link href="Espace professionnel">Espace client</Nav.Link>
      </Nav>
      <Nav>
      <NavDropdown title="Contactez-nous" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Candidature spontané  </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Nos offres d'emploie</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">FAQ </NavDropdown.Item>
        </NavDropdown>
      <Nav.Link  href="#pricing"><Card.Img variant="top" src="/images/Drapeau.png" width="30"
        height="30"
        className="d-inline-block align-top" paddingleft="50"
        alt="React Bootstrap logo"/></Nav.Link>
      </Nav>
      <Nav>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header;