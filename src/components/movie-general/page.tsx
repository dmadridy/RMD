import { RequestType } from '../../services/utils/types';
import leftAarrow from '../../assets/icons/left-arrow.png';
import rightArrow from '../../assets/icons/right-arrow.png';
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
        <button className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'>
          <img className='w-3' src={leftAarrow} alt='' />
          Previous
        </button>
        <button className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'>
          Next
          <img className='w-3' src={rightArrow} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Page;
