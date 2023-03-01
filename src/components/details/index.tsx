import { useParams } from 'react-router-dom';
import Credits from './credits';
import Recommendations from './recomendations';
import estrella from '../../assets/icons/estrella.png';
import DataError from '../errors/fetch';
import Loading from '../general/loading';
import { useMovieDetails } from '../../hooks/details';
import { makeDollar, roundVoteAverage } from '../../services/functions';

const MovieDetails = () => {
  let { movieId } = useParams();

  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='flex gap-16'>
      <div className=''>
        <img
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
          alt='movie poster'
        />
        <div className='flex gap-2'>
          {data?.genres.map((g) => (
            <p>{g.name}</p>
          ))}
        </div>
      </div>
      <div>
        <div className='flex gap-4'>
          <h1 className='text-3xl font-semibold'>{data?.title}</h1>
          <a target={'_blank'} href={data?.homepage}>
            Link
          </a>
        </div>
        <div className='flex gap-4'>
          <p>{data?.release_date}</p>
          <p>{data?.runtime}</p>
        </div>
        <div className='flex'>
          <img src={estrella} alt='' />
          <p>{data && roundVoteAverage(data.vote_average)}</p>
          <p>/10-{data?.vote_count}</p>
        </div>
        <p>{data?.tagline}</p>
        <p>{data?.overview}</p>
        <div>
          <p>{data && makeDollar(data.revenue)}</p>
          <p>{data?.original_language}</p>
          <p>{data && makeDollar(data.budget)}</p>
          <p>{data?.status}</p>
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
    </div>
  );
};

export default MovieDetails;
