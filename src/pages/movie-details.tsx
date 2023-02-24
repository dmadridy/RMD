import { useParams } from 'react-router-dom';
import Loading from '../components/loading';
import { useMovieDetails } from '../hooks';

const MovieDetails = () => {
  let { movieId } = useParams();

  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <div>{data?.id}</div>;
};

export default MovieDetails;
