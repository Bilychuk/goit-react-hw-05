import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';
export default function NotFoundPage() {
  return (
    <div>
      <p className={css.text}>Sorry!Page not found!</p>
      <p>
        Please visit out <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
