import { List } from './Cast.styled';

export const CastList = ({ cast }) => {
  const children = cast.map(({ character, profile_path, name, id }) => (
    <CastItem key={id}>
      {profile_path && (
        <CastImage
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
      )}
      <p>{name}</p>
      <p>Character: {character}</p>{' '}
    </CastItem>
  ));
  return <List>{children}</List>;
};
