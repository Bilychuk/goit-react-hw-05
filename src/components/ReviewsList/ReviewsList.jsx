import ReviewCard from '../ReviewCard/ReviewCard';

export default function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}
