import CastCard from '../CastCard/CastCard';

export default function CastList({ cast }) {
  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <CastCard actor={actor} />
        </li>
      ))}
    </ul>
  );
}
