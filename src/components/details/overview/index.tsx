import { useParams } from 'react-router-dom';
import star from '../../../assets/icons/estrella.png';
import link from '../../../assets/icons/link.png';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import { useMovieDetails } from '../../../hooks/details';
import {
  makeDollar,
  roundVoteAverage,
  timeConvert,
} from '../../../services/functions';
import ReducedCredits from '../credits/reduced';
import Keywords from './keywords';
import ReducedReviews from '../reviews/reduced';
import Recommendations from './recomendations';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useMovieDetails(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  const backdrop = `https://image.tmdb.org/t/p/original${data?.backdrop_path}`;

  return (
    <div>
      <div
        className='py-8'
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='flex gap-20 container mx-auto max-w-7xl'>
          <div className='space-y-4 w-72 shrink min-w-0'>
            <img
              className='rounded-lg'
              src={`https://image.tmdb.org/t/p/w400${data?.poster_path}`}
              alt='movie poster'
            />
            <div className='flex flex-wrap gap-2 justify-center'>
              {data?.genres.map((genre) => (
                <p
                  key={genre.id}
                  className='px-3 py-1 text-sm bg-neutral-800 rounded-lg'
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
          <div className='container max-w-3xl'>
            <div className='flex space-x-3 items-end mb-2'>
              <h1 className='text-3xl font-semibold'>{data?.title}</h1>
              <a
                className='p-1 hover:bg-neutral-700 duration-100 transition border border-neutral-600 rounded-lg bg-neutral-800'
                target={'_blank'}
                href={data?.homepage}
              >
                <img className='w-4 h-4' src={link} alt='' />
              </a>
            </div>
            <p className='text-neutral-400 mb-6'>
              {data?.release_date} &#x2022; {data && timeConvert(data.runtime)}
            </p>
            <div className='flex items-center mb-6'>
              <img className='w-5 h-5' src={star} alt='' />
              &nbsp;
              <p className='text-xl font-semibold'>
                {data && roundVoteAverage(data.vote_average)}
              </p>
              <p className='text-neutral-400'>
                /10 &#x2022; {data?.vote_count}
              </p>
            </div>
            <p className='italic text-neutral-400 mb-4'>{data?.tagline}</p>
            <p className='mb-6'>{data?.overview}</p>
          </div>
        </div>
      </div>
      <div className='mx-auto container border-t border-neutral-800 gap-12 max-w-7xl py-8  flex'>
        <div className='w-3/4'>
          <ReducedCredits movieId={movieId} />
          <Recommendations movieId={movieId} />
          <ReducedReviews movieId={movieId} />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <h1 className='font-semibold text-neutral-400'>Status</h1>
            <p className='text-neutral-200'>{data?.status}</p>
          </div>
          <div>
            <h1 className='font-semibold text-neutral-400'>
              Original Language
            </h1>
            <p className='text-neutral-200'>{data?.original_language}</p>
          </div>
          <div>
            <h1 className='font-semibold text-neutral-400'>Budget</h1>
            <p className='text-neutral-200'>
              {data && makeDollar(data.budget)}
            </p>
          </div>
          <div>
            <h1 className='font-semibold text-neutral-400'>Revenue</h1>
            <p className='text-neutral-200'>
              {data && makeDollar(data.revenue)}
            </p>
          </div>
          <div>
            <Keywords movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
