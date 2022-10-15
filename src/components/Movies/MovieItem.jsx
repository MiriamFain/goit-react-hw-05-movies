import { Container } from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Wrapper,
  Poster,
  Thumb,
  Description,
  GenresItem,
  GenresList,
  GenresTitle,
  MovieNav,
  NavWrapper,
  MovieLink,
  BackLink,
} from './Movie.styled';
import { BiArrowBack } from 'react-icons/bi';

export const MovieItem = ({ movie }) => {
  const location = useLocation();
  const from = location.state.from;
  const {
    name,
    title,
    genres,
    poster_path,
    vote_average,
    overview,
    release_date,
  } = movie;

  return (
    <>
      <Container>
        <BackLink to={location.state?.from ?? '/home'}>
          <BiArrowBack />
        </BackLink>
        <Wrapper>
          <Thumb>
            <Poster
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={name || title}
            />
          </Thumb>
          <Description>
            <h2>
              {name || title}
              <span>{`(${release_date.slice(0, 4)})`}</span>
            </h2>
            <p>User score: {Math.floor(vote_average * 10)} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <GenresTitle>Genres:</GenresTitle>
            <GenresList>
              {genres &&
                genres.map(({ name, id }) => (
                  <GenresItem key={id}>{name}</GenresItem>
                ))}
            </GenresList>
          </Description>
        </Wrapper>
      </Container>

      <NavWrapper>
        <MovieNav>
          <li>
            <MovieLink to="cast" state={{ from: from }}>
              Cast
            </MovieLink>
          </li>
          <li>
            <MovieLink to="reviews" state={{ from: from }}>
              Review
            </MovieLink>
          </li>
        </MovieNav>
      </NavWrapper>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
