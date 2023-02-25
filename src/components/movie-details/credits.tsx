import { useCredits } from '../../hooks/movie-details';

type Props = {
  movieId: number;
};

const Credits: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useCredits(movieId);

  return <div>Credits</div>;
};

export default Credits;
