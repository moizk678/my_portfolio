// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const navbarStyle = {
    backgroundColor: '#f8f9fa', // Light grey background color
  };

  const brandStyle = {
    color: '#333', // Dark grey text color for the brand
  };

  const navLinkStyle = {
    color: '#333', // Dark grey text color for the nav links
  };

  const navLinkHoverStyle = {
    color: '#8e44ad', // Purple color on hover
  };

  return (
    <Navbar style={navbarStyle} expand="lg" collapseOnSelect>
      <Navbar.Brand href="#home" style={brandStyle}>
        My Portfolio Muhammad Moiz Khan - 210897
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={navLinkStyle} onMouseEnter={e => e.target.style.color = navLinkHoverStyle.color} onMouseLeave={e => e.target.style.color = navLinkStyle.color}>
            Home
          </Nav.Link>
          <Nav.Link href="#skills" style={navLinkStyle} onMouseEnter={e => e.target.style.color = navLinkHoverStyle.color} onMouseLeave={e => e.target.style.color = navLinkStyle.color}>
            Skills
          </Nav.Link>
          <Nav.Link href="#projects" style={navLinkStyle} onMouseEnter={e => e.target.style.color = navLinkHoverStyle.color} onMouseLeave={e => e.target.style.color = navLinkStyle.color}>
            Projects
          </Nav.Link>
          <Nav.Link href="#contact" style={navLinkStyle} onMouseEnter={e => e.target.style.color = navLinkHoverStyle.color} onMouseLeave={e => e.target.style.color = navLinkStyle.color}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
