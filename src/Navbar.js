import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { useCartCount } from "./hooks/useCartCount";

function Navbar({ goods }) {
  const cartCount = useCartCount(goods);

  return (
    <StyledNavbar>
      <NavbarContent>
        <LogoTitle>Интернет магазин</LogoTitle>
        <LinkToggler cartCount={cartCount} />
      </NavbarContent>
    </StyledNavbar>
  );
}

export default Navbar;

function LinkToggler({ cartCount }) {
  const isCart = useRouteMatch("/cart");

  return isCart ? (
    <StyledLink to="/">На главную</StyledLink>
  ) : (
    <StyledLink to="/cart">Товаров в корзине: {cartCount}</StyledLink>
  );
}

const NavbarContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*  */
  margin: auto;
  padding: 0 0.5rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
`;
