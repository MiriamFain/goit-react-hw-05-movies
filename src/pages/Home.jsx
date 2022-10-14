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

  return <main></main>;
};

export default Home;
