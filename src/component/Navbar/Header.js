import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assests/developer.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar className="header" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width={"100"} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse   id="basic-navbar-nav">
            <Nav className="mx-auto header-link">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            
            </Nav>
            <div>
            <button className="hire-btn">Hire Me</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
