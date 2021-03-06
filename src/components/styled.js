import styled, { css } from "styled-components";
import { mainColor } from "../config";

export const mobileMediaQuery = rules => css`
  @media screen and (max-width: 400px) {
    & {
      ${rules}
    }
  }
`;

export const Container = styled.div`
  padding: 0 1rem;
  height: 100%;

  ${mobileMediaQuery(` padding: 0 .5rem;`)}

  @media screen and (min-width: 600px) {
    width: 550px;
    margin: auto;
  }
`;

export const Justified = styled.div.attrs(props => ({
  justify: props.justify || "space-between",
}))`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
`;

export const Centered = styled(Justified).attrs(props => ({
  justify: "center",
  direction: props.direction || "row",
}))`
  flex-direction: ${props => props.direction};
`;

const DangerousButton = css`
  color: indianred;
  border: none;

  &:hover {
    background: indianred;
    color: white;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid ${mainColor};
  padding: 0.25rem 0.3rem;
  border-radius: 0.25rem;
  color: ${mainColor};
  font-size: 1.4rem;
  transition: background 0.4s;

  &:hover {
    cursor: pointer;
    background: ${mainColor};
    color: white;
  }

  ${props => props.danger && DangerousButton}

  @media screen and (max-width: 375px) {
    & {
      font-size: 1rem;
    }
  }
`;

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;

  ${mobileMediaQuery(`
    font-size: 1rem;
    margin-right: .5rem;`)}
`;

export const Title = styled.h3`
  margin: 0;

  ${mobileMediaQuery(`font-size: 1rem;`)}
`;
