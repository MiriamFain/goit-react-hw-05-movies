import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { API } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import { MovieList } from 'components/Movies/MovieList';
import { SearchForm } from 'components/Search/SearchForm';

import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const from = `${location.pathname}${location.search}`;

  useEffect(() => {
    if (query) {
      API.getSearchMovies(query)
        .then(res => {
          if (!res.results.length) {
            toast.error(
              "Sorry, but we can't find any movies on your request. Try again, please."
            );
            return;
          }
          setMovies(res.results);
        })
        .catch(err => {
          setErrorMessage(
            "Sorry, we can't find information about this movie.."
          );
        });
    }
  }, [query]);

  const handleFormSubmit = newQuery => {
    setSearchParams({ query: newQuery });
  };

  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} />
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <MovieList movies={movies} from={from} />
      )}
      <ToastContainer hideProgressBar={true} theme="dark" />
    </main>
  );
};

export default Movies;
