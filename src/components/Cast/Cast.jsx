import { useState, useEffect } from 'react';
import { API } from 'services/api';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/Cast/CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { moviesId } = useParams;

  useEffect(() => {
    API.getMovieById(moviesId, '/credits')
      .then(res => {
        setCast(res.cast);
        setStatus('resolved');
      })
      .catch(err => {
        setErrorMessage("Sorry, we can't find information about this movie..");
        setStatus('rejected');
      });
  }, [moviesId]);

  return (
    <>
      {status === 'resolved' && <CastList cast={cast} />}
      {status === 'rejected' && <p>{errorMessage}</p>}
    </>
  );
};

export default Cast;
