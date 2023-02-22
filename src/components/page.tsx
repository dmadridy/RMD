import { Link } from 'react-router-dom';
import { RequestType } from '../services/utils/types';
import Item from './item';

type Props = {
  data: RequestType | undefined;
};

const Page: React.FC<Props> = ({ data }) => {
  return (
    <div className='flex justify-center flex-wrap gap-6 p-12 container mx-auto max-w-7xl'>
      {data?.results.map((item) => (
        <Link key={item.id} to={`/movies/${item.id}`}>
          <Item item={item} />
        </Link>
      ))}
      <div className='flex space-x-5'>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Page;
