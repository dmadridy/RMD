import { RequestType } from '../services/utils/types';
import Item from './item';

type Props = {
  data: RequestType | undefined;
};

const Page: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {data?.results.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='font-semibold text-neutral-400 py-16 flex space-x-12 justify-center'>
        <button>
          <img src='' alt='' />
          Previous
        </button>
        <button>
          <img src='' alt='' />
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
