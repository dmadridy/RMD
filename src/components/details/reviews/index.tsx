import { useParams } from 'react-router-dom';
import { useReviews } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import Review from './review';
import SelectedMovie from '../selected-movie';
import Options from '../options';
import { responsivePadding } from '../../../assets/styles';

const Reviews = () => {
  let { movieId } = useParams();
  const { data, isLoading, error } = useReviews(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className={`${responsivePadding} container mx-auto max-w-7xl pb-16`}>
      <Options />
      <SelectedMovie movideId={movieId} />
      <div className='flex py-8 space-x-2 items-center '>
        <h1 className='text-lg font-semibold text-neutral-200'>Reviews </h1>
        <div className='px-2 py-1 text-xs font-semibold rounded-lg bg-neutral-800'>
          {data?.results.length}
        </div>
      </div>
      <div className='space-y-8'>
        {data?.results.map((item) => {
          return <Review key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
