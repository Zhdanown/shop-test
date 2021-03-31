import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <NavbarContent>
        <LogoTitle>Интернет магазин</LogoTitle>
        <CartLink href="/">Товаров в корзине: 0</CartLink>
      </NavbarContent>
    </StyledNavbar>
  );
}

export default Navbar;

const NavbarContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*  */
  width: 768px;
  margin: auto;
`;

const StyledNavbar = styled.nav`
  height: 60px;
  background: steelblue;
  color: white;
`;

const LogoTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const CartLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
`;
