import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Shope</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
