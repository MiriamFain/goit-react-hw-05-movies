import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled('ul')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  gap: 15px;
  list-style: none;
`;

export const ListItem = styled('li')`
  width: 100%;
  text-align: center;
  transition: all 300ms ease-in-out;
  border-radius: 2%;
  &:hover {
    box-shadow: 0 0 13px 0 rgb(3, 37, 65);
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const Image = styled('img')`
  display: block;
  margin: 0 auto;
  width: 100%;
  border-radius: 2%;
`;

export const Wrapper = styled('div')`
  display: flex;
  gap: 30px;
  text-align: left;
`;

export const Thumb = styled('div')`
  width: 30%;
`;

export const Poster = styled('img')`
  width: 100%;
`;

export const Description = styled('div')`
  width: 70%;
`;

export const GenresItem = styled('li')`
  padding: 8px;
  font-size: 13px;
  color: white;
  background-color: rgb(3, 37, 65);
  border-radius: 10px;
`;

export const MovieNav = styled('ul')`
  display: flex;
  gap: 50px;
  padding: 20px 0;
  margin: 0;
  list-style: none;
`;

export const NavWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #fff;
`;

export const MovieLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: rgb(3, 37, 65);
  text-decoration: none;
`;

export const BackLink = styled(Link)`
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  background-color: rgb(3, 37, 65);
  font-size: 1.3em;
  color: white;
  border: none;
  border-radius: 20px;
  margin: 10px;
`;

export const GenresList = styled('ul')`
  list-style: none;
  display: inline-flex;
  gap: 10px;
`;

export const GenresTitle = styled('h3')`
  display: inline;
`;
