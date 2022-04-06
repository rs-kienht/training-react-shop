import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
const Header = () => {
  const counter = useSelector((state:any) => state._actionProduct.numberCart )
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <NavLink to="/">Shope</NavLink>
        <NavLink to="/promo">Promo</NavLink>
        <Nav className="mr-auto"></Nav>
        <NavLink to="/cart">Cart {counter}</NavLink>
      </Container>
    </Navbar>
  );
};
export default Header;
