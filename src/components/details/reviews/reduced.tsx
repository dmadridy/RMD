import { useReviews } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import { Link } from 'react-router-dom';
import Review from './review';

type Props = {
  movieId: string | undefined;
};

const ReducedReviews: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useReviews(Number(movieId));

  if (error) return <DataError />;

  if (isLoading) return <Loading />;

  return (
    <div className='py-8 border-t border-neutral-800'>
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
          return <Review key={each.id} each={each} />;
        })}
      </div>
    </div>
  );
};

export default ReducedReviews;
