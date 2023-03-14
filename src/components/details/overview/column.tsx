import { makeDollar } from '../../../services/functions';
import { MovieDetails } from '../../../services/utils/types';

type Props = {
  data: MovieDetails | undefined;
};

const Column: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div>
        <h1 className='font-semibold text-neutral-400'>Status</h1>
        <p className='text-neutral-200'>{data?.status}</p>
      </div>
      <div>
        <h1 className='font-semibold text-neutral-400'>Original Language</h1>
        <p className='text-neutral-200'>{data?.original_language}</p>
      </div>
      <div>
        <h1 className='font-semibold text-neutral-400'>Budget</h1>
        <p className='text-neutral-200'>{data && makeDollar(data.budget)}</p>
      </div>
      <div>
        <h1 className='font-semibold text-neutral-400'>Revenue</h1>
        <p className='text-neutral-200'>{data && makeDollar(data.revenue)}</p>
      </div>
    </>
  );
};

export default Column;
