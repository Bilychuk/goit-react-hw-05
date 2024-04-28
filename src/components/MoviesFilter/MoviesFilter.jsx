import { useState } from 'react';
import css from './MoviesFilter.module.css';

export default function MoviesFilter({ value, onFilter }) {
  const [query, setQuery] = useState(value);

  const handleSubmit = event => {
    event.preventDefault();
    onFilter(query);
    setQuery('');
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.filter}
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
