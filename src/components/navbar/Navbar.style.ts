import styled from "styled-components";
import { colors } from "../../styles/Colors";
import { sizes } from "../../styles/Sizes";

export const ElementNav = styled.nav`
  width: 100vw;
  height: 5rem;
  display: grid;
  place-items: center;
  background: ${colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  box-shadow: 0 1rem 1.5rem hsla(10, 68%, 42%, 20%);
  transition: all 500ms ease;
`;

export const NavContainer = styled.div`
  width: 76%;
  margin-inline: auto;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;

  strong {
    color: white;
    font-weight: 700;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 3.5rem;

  a {
    color: ${colors.white};
    transition: all 500ms ease;
    font-size: 1.1rem;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      height: 2px;
      background-color: transparent;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.6s, background-color 0.6s;
    }

    &:hover::before {
      transform: scaleX(1);
      background-color: white;
    }
  }
`;
