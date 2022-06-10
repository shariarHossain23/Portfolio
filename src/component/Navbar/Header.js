import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assests/developer.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar className="header sticky-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width={"100"} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse   id="basic-navbar-nav">
            <Nav className="mx-auto header-link">
              <Link to="/">Home</Link>
              <Link to="/home#about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/home#contact">Contact</Link>
            
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
