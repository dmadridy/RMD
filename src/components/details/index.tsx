import { useParams } from 'react-router-dom';
import Credits from './credits';
import Recommendations from './recomendations';
import DataError from '../errors/fetch';
import Loading from '../general/loading';
import { useMovieDetails } from '../../hooks/details';

const MovieDetails = () => {
  let { movieId } = useParams();

  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div>
      <div className='flex gap-16'>
        <img
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
          alt='movie poster'
        />
      </div>
      <div>
        <div>
          <h1 className='text-3xl font-semibold'>{data?.title}</h1>
          <a target={'_blank'} href={data?.homepage}>
            Link
          </a>
        </div>
        <div>
          <p>{data?.release_date}</p>
          <p>{data?.runtime}</p>
        </div>
        <div>
          <p>{data?.vote_average}</p>
          <p>{data?.popularity}</p>
        </div>
        <p>{data?.tagline}</p>
        <p>{data?.overview}</p>
        <div>
          <p>{data?.revenue}</p>
          <p>{data?.original_lenguage}</p>
          <p>{data?.budget}</p>
          <p>{data?.status}</p>
        </div>
        <div>
          {data?.genres.map((g) => (
            <p>{g.name}</p>
          ))}
        </div>
        <div>
          {data?.production_companies.map((c) => (
            <p>{c.name}</p>
          ))}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          alt='movie backdrop path'
        />
      </div>

      <Credits movieId={Number(movieId)} />
      <Recommendations movieId={Number(movieId)} />
    </div>
  );
};

export default MovieDetails;
