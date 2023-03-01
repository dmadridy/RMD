import { useRecommendations } from '../../hooks/details';

type Props = {
  movieId: number;
};

const Recommendations: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useRecommendations(movieId);
  console.log(data);

  return <div>Recommendations</div>;
};

export default Recommendations;
