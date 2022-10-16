import { useState, useEffect } from 'react';
import { API } from 'services/api';
import { useParams } from 'react-router-dom';
import { CastList } from './CastList';
import { Container } from 'components/Container/Container';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    API.getMovieById(moviesId, '/credits')
      .then(res => {
        setCast(res.cast);
        setStatus('resolved');
      })
      .catch(err => {
        setErrorMessage("Sorry, we can't find information about this movie..");
        setStatus('rejected');
        console.log(err.message);
      });
  }, [moviesId]);

  return (
    <Container>
      {status === 'resolved' && <CastList cast={cast} />}
      {status === 'rejected' && <p>{errorMessage}</p>}
    </Container>
  );
};
export default Cast;
