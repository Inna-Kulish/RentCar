import { NavLink } from "react-router-dom";
import { HeaderStyled, Navigation, NavList, Link, Logo, LogoSpan } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <Navigation>
        <NavList>
          <li>
            <Logo to="/">Rent<LogoSpan>Car</LogoSpan></Logo>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite</Link>
          </li>
        </NavList>
      </Navigation>
    </HeaderStyled>
  );
}
