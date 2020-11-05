import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const NavbarComponents = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home"><strong>Kasir APP</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;