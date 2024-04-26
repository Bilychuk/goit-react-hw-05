export default function MoviesFilter({ value, onFilter }) {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
