import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { Container, Justified, mobileMediaQuery } from "./components/styled";
import { mainColor } from "./config";
import { useCartCount } from "./hooks/useCartCount";

function Navbar({ goods }) {
  const cartCount = useCartCount(goods);

  return (
    <StyledNavbar>
      <Container>
        <NavbarContent>
          <StyledLink to="/">
            <LogoTitle>Интернет магазин</LogoTitle>
          </StyledLink>
          <LinkToggler cartCount={cartCount} />
        </NavbarContent>
      </Container>
    </StyledNavbar>
  );
}

export default Navbar;

function LinkToggler({ cartCount }) {
  const isCart = useRouteMatch("/cart");

  return isCart ? (
    <StyledLink to="/">
      <HomeOutlined />
    </StyledLink>
  ) : (
    <StyledLink to="/cart">
      <ShoppingCartOutlined /> <CartCount>{cartCount}</CartCount>
    </StyledLink>
  );
}

const NavbarContent = styled(Justified)`
  height: 100%;
`;

const StyledNavbar = styled.nav`
  height: 60px;
  background: ${mainColor};
  color: white;
`;

const LogoTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const CartCount = styled.span`
  font-size: 1rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  text-align: center;
  right: 0;
  color: ${mainColor};
  background: white;
  border-radius: 50%;
  padding: 0.25rem;
  position: absolute;
  top: 2px;
  right: 0;
  box-shadow: 0 0 0px 3px ${mainColor};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2.5rem;
  padding: 0.25rem;
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  position: relative;
  opacity: 0.7;
  transition: opacity 0.5s;

  &:hover {
    border-color: white;
    opacity: 1;
  }

  ${mobileMediaQuery(`
    font-size: 2rem;

        ${CartCount} {
        font-size: 0.8rem;
        width: 0.8rem;
        height: 0.8rem;
        }
  `)}
`;
