import css from './CastCard.module.css';

export default function CastCard({ actor }) {
  return (
    <div>
      <img
        className={css.photo}
        src={`https://image.tmdb.org/t/p/w154${actor.profile_path}`}
        alt={actor.name}
      />
      <p className={css.name}>{actor.name}</p>
      <p className={css.character}>Character: {actor.character}</p>
    </div>
  );
}
