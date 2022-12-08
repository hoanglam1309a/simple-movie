import { PATH } from "constants/path";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  {
    path: PATH.home,
    display: "Home"
  },
  {
    path: PATH.explore,
    display: "Explore"
  }
];

const StyledHeader = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 500;
  a.active {
    color: var(--pinkf6);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      {links.map((link) => (
        <NavLink to={link.path} key={link.path}>
          {link.display}
        </NavLink>
      ))}
    </StyledHeader>
  );
};

export default Header;
