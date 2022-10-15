import { Container } from 'components/Container/Container';
import { MovieList } from 'components/Movies/MovieList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    API.getTrending()
      .then(res => {
        setTrendingMovies(res.results);
      })
      .catch(err => {
        Error(err.message);
      });
  }, []);

  return (
    <main>
      <Container>
        <h2>Trending Today</h2>
        <MovieList movies={trendingMovies} from={location.pathname} />
      </Container>
    </main>
  );
};

export default Home;
