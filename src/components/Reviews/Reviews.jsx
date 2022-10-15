import { Container } from 'components/Container/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from 'services/api';
import { ReviewList } from './ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    API.getMovieById(moviesId, '/reviews')
      .then(res => {
        if (!res.results.length) {
          setStatus('not found');
          return;
        }
        setReviews(res.results);
        setStatus('resolved');
      })
      .catch(err => {
        setErrorMessage("Sorry, we can't find information about this movie..");
        setStatus('rejected');
      });
  }, [moviesId]);

  return (
    <Container>
      {status === 'not found' && (
        <p>We don't have any reviews for this movie</p>
      )}
      {status === 'resolved' && <ReviewList reviews={reviews} />}
      {status === 'rejected' && <p>{errorMessage}</p>}
    </Container>
  );
};

export default Reviews;
