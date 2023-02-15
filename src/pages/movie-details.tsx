///Hooks
import { useMovieDetails } from '../services/hooks';
//Types
import { MovieType } from '../services/utils/types';

type Props = {
  item: MovieType;
};

const MovieDetails: React.FC<Props> = ({ item }) => {
  const { data, error, isLoading } = useMovieDetails(item);

  return <div>Something needs to render here</div>;
};

export default MovieDetails;
