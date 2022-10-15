import { MovieItem } from 'components/Movies/MovieItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const { moviesId } = useParams();

  useEffect(() => {
    API.getMovieById(moviesId)
      .then(res => {
        setMovie(res);
        setStatus('resolved');
      })
      .catch(err => {
        setErrorMessage("Sorry, we can't find information about this movie..");
        setStatus('rejected');
      });
  }, [moviesId]);

  return (
    <>
      {status === 'resolved' && <MovieItem movie={movie} />}
      {status === 'rejected' && <p>{errorMessage}</p>}
    </>
  );
};

export default MovieDetails;
