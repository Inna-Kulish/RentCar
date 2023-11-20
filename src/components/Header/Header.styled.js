import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  background-color: #283c86;
`;

export const Navigation = styled.nav`
  padding-left: 128px;
  padding-right: 128px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  display: block;
  padding: 24px;

  font-family: "Poppins";
  font-size: 24px;
  line-height: calc(21 / 18);
  letter-spacing: 0.03em;
  color: white;
`;

export const LogoSpan = styled.span`
color: black
`

export const Link = styled(NavLink)`
  display: block;
  padding: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  letter-spacing: 0.02em;
  color: white;
  border: 0px;

  &.active {
    color: #283c86;
    background-color: white;
  }

  &:hover {
    color: #283c86;
    background-color: white;
  }
`;
