import { useReviews } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import star from '../../../assets/icons/estrella.png';
import { Link } from 'react-router-dom';

type Props = {
  movieId: string | undefined;
};

const ReducedReviews: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useReviews(Number(movieId));

  if (error) return <DataError />;

  if (isLoading) return <Loading />;

  return (
    <div className='py-8 border-y border-neutral-800'>
      <div className='mb-4 flex justify-between'>
        <div className='flex space-x-2 items-center '>
          <h1 className='text-lg font-semibold text-neutral-200'>Reviews </h1>
          <div className='px-2 py-1 text-xs font-semibold rounded-lg bg-neutral-800'>
            {data?.results.length}
          </div>
        </div>
        <Link
          className='text-cyan-500 hover:text-cyan-400 transition duration-200'
          to={`/movies/${movieId}/reviews`}
        >
          View reviews
        </Link>
      </div>
      <div>
        {data?.results.slice(0, 1).map((each) => {
          return (
            <div className='rounded-xl space-y-4 p-6 border border-neutral-700 bg-neutral-800'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='w-8'>
                    <img
                      className='rounded-full'
                      src={`https://image.tmdb.org/t/p/original${each.author_details.avatar_path}`}
                      alt=''
                    />
                  </div>
                  <div>
                    <p>{each.author}</p>
                    <p>{each.created_at}</p>
                  </div>
                </div>
                <div className='flex gap-1 items-center'>
                  <img className='w-4 h-4' src={star} alt='' />
                  <p>{each.author_details.rating}/10</p>
                </div>
              </div>
              <div>
                <p className='text-neutral-300 text-sm leading-relaxed'>
                  {each.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReducedReviews;
