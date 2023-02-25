import { useParams } from 'react-router-dom';
import Credits from '../components/details/credits';
import Recommendations from '../components/details/recomendations';
import Loading from '../components/general/loading';
import { useMovieDetails } from '../hooks/details';

const MovieDetails = () => {
  let { movieId } = useParams();

  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return (
    <div>
      <div className='flex gap-16'>
        <img
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
          alt='Image Poster'
        />
        <div>
          <h1 className='text-3xl font-semibold'>{data?.title}</h1>
          <p>{data?.overview}</p>
        </div>
      </div>

      <p>{data?.vote_average}</p>
      <p>{data?.popularity}</p>
      <p>{data?.release_date}</p>
      <p>{data?.revenue}</p>
      <p>{data?.budget}</p>
      <p>{data?.status}</p>
      <img
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt=''
      />

      <Credits movieId={Number(movieId)} />
      <Recommendations movieId={Number(movieId)} />
    </div>
  );
};

export default MovieDetails;
