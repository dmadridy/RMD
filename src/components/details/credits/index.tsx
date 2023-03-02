import { useParams } from 'react-router-dom';
import { useCredits } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';

const Credits = () => {
  let { movieId } = useParams();
  const { data, isLoading, error } = useCredits(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='container mx-auto max-w-7xl'>There was 3 is Credits</div>
  );
};

export default Credits;
