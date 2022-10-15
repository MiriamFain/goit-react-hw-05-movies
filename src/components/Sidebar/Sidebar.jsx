import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, StyledLink } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <header>
      <NavBar>
        <StyledLink end to="/">
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavBar>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
};
