import { useMovieDetails } from '../../hooks/details';
import DataError from '../errors/fetch';
import Loading from '../general/loading';

type Props = {
  movideId: string | undefined;
};

const SelectedMovie: React.FC<Props> = ({ movideId }) => {
  const { data, isLoading, error } = useMovieDetails(Number(movideId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='flex gap-4 py-10 border-b border-b-neutral-800'>
      <div className='w-16'>
        <img
          className='w-full h-full rounded-lg'
          src={`https://image.tmdb.org/t/p/w200${data?.poster_path}`}
          alt=''
        />
      </div>
      <div className='space-y-2'>
        <p className='text-xl text-neutral-100 font-semibold'>{data?.title}</p>
        <p className='text-neutral-400'>{data?.release_date}</p>
      </div>
    </div>
  );
};

export default SelectedMovie;
