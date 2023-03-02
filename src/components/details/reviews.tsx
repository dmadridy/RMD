import { useParams } from 'react-router-dom';
import { useReviews } from '../../hooks/details';
import DataError from '../errors/fetch';
import Loading from '../general/loading';

const Reviews = () => {
  let { movieId } = useParams();
  const { data, isLoading, error } = useReviews(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <div className='container mx-auto max-w-7xl'>The Reviews</div>;
};

export default Reviews;
