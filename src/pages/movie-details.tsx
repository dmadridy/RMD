import { useParams } from 'react-router-dom';
import Credits from '../components/movie-details/credits';
import Recommendations from '../components/movie-details/recomendations';
import Loading from '../components/movie-general/loading';
import { useMovieDetails } from '../hooks/movie-details';

const MovieDetails = () => {
  let { movieId } = useParams();

  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return (
    <div>
      <Credits movieId={Number(movieId)} />
      <Recommendations movieId={Number(movieId)} />
    </div>
  );
};

export default MovieDetails;
