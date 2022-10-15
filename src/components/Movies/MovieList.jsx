import { ListItem, List, StyledLink, Image } from './Movie.styled';

export const MovieList = ({ movies, from }) => {
  return (
    <List>
      {movies &&
        movies.map(({ name, title, id, poster_path }) => (
          <ListItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: from }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={name || title}
              />
            </StyledLink>
          </ListItem>
        ))}
    </List>
  );
};
