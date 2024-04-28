import css from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  return (
    <div>
      <h3 className={css.author}>{review.author}</h3>
      <p className={css.content}>{review.content}</p>
    </div>
  );
}
