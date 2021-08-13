import React  from 'react';
import { Card, Button,Nav } from 'react-bootstrap';

const Footer = () => {
    return  <Card>
    <Card.Header>
      <Nav variant="pills" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Réseaux</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Footer</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      </Card.Body>
  </Card>
}

export default Footer;