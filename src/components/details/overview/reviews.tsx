import { useReviews } from '../../../hooks/details';

type Props = {
  movieId: number;
};

const ReducedReviews: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useReviews(movieId);

  return <div>ReducedReviews</div>;
};

export default ReducedReviews;
