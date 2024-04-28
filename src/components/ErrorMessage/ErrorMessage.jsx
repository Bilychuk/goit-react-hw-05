import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return <h2 className={css.error}>Oops!There was an error! Please reload!</h2>;
}
