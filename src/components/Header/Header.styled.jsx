import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBlock = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px;
  background-color: var(--background);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavigLink = styled(NavLink)`
  color: var(--text-color);

  #fav-icon {
    fill: none;
    stroke: var(--text-color);
  }
  &.active {
  }
`;
