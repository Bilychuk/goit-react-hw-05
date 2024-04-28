import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../movies-api';
import toast, { Toaster } from 'react-hot-toast';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import MoviesList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = (searchParams.get('query') ?? '').trim();

  const handleFilterChange = newFilter => {
    searchParams.set('query', newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (queryParam === '') {
      return;
    }
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await searchMovies(queryParam);
        setMovies(data.results);
        if (data.total_results === 0) {
          toast.error('Sorry, we did not find movies by such query.', {
            duration: 6000,
            position: 'bottom-right',
          });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [queryParam]);

  const filteredMovies = useMemo(() => {
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(queryParam.toLowerCase())
    );
  }, [queryParam, movies]);

  return (
    <div className={css.wrapper}>
      <MoviesFilter value={queryParam} onFilter={handleFilterChange} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={filteredMovies} />}
      <Toaster
        toastOptions={{
          style: {
            color: 'white',
          },
          success: {
            style: {
              background: 'green',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </div>
  );
}
