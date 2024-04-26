import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
