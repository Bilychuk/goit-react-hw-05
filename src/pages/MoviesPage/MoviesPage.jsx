import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../movies-api';
import MoviesFilter from '../../components/MoviesFilter/MoviesFilter';
import MoviesList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  const changeQueryFilter = newFilter => {
    searchParams.set('query', newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await searchMovies(queryParam);
        setMovies(data);
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
    <div>
      <MoviesFilter value={queryParam} onFilter={changeQueryFilter} />
      {error && <h2>Oops!There was an error! Please reload!</h2>}
      {loading && <h2>Loading movies...</h2>}
      {movies.length > 0 && <MoviesList movies={filteredMovies} />}
    </div>
  );
}
