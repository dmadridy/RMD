import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../services/hooks';

const MovieDetails = () => {
  let { movieId } = useParams();

  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <div>{data?.id}</div>;
};

export default MovieDetails;
