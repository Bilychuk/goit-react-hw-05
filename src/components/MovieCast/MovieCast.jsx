import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../movies-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CastList from '../CastList/CastList';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        const data = await getCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast.length === 0 && <b>No cast info</b>}
      {cast.length > 0 && <CastList cast={cast} />}
    </div>
  );
}
