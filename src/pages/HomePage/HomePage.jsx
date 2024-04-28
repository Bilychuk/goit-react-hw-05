import { getMovies } from '../../movies-api';
import { useState, useEffect } from 'react';
import MoviesList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.container}>
      {error && <ErrorMessage />}
      <h1>Trending today</h1>
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
