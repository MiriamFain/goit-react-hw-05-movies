import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 20px 30px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  &.active {
    color: rgb(189, 237, 265);
    font-weight: 800;
  }
`;

export const NavBar = styled('nav')`
  display: flex;
  background-color: rgb(3, 37, 65);
`;
