import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import {  NavLink } from 'react-router-dom'

const NavbarComponents = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home"><strong>Kasir APP</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/success">Sukses</NavLink>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;