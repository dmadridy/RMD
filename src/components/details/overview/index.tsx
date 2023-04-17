import { useParams } from 'react-router-dom';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import { useMovieDetails } from '../../../hooks/details';
import ReducedCredits from '../credits/reduced';
import Keywords from './keywords';
import ReducedReviews from '../reviews/reduced';
import Recommendations from './recomendations';
import Column from './column';
import Main from './main';
import Options from '../options';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useMovieDetails(Number(movieId));
  const backdrop = `https://image.tmdb.org/t/p/original${data?.backdrop_path}`;

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div>
      <div
        className='pb-8 relative'
        style={{
          backgroundImage: `url(${backdrop})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='space-y-8'>
          <Options />
          <Main data={data} />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-transparent to-neutral-900 opacity-100'></div>
        <div className='absolute inset-0 bg-neutral-900 opacity-20'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-100'></div>
      </div>
      <div className='mx-auto container border-t border-neutral-800 gap-12 max-w-7xl py-8  flex'>
        <div className='w-3/4'>
          <ReducedCredits movieId={movieId} />
          <Recommendations movieId={movieId} />
          <ReducedReviews movieId={movieId} />
        </div>
        <div className='flex flex-col gap-4'>
          <Column data={data} />
          <Keywords movieId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
