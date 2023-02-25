import { useRecommendations } from '../../hooks/movie-details';

type Props = {
  movieId: number;
};

const Recommendations: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useRecommendations(movieId);

  return <div>Recommendations</div>;
};

export default Recommendations;