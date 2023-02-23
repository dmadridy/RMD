import { RequestType } from '../services/utils/types';
import Item from './item';

type Props = {
  data: RequestType | undefined;
};

const Page: React.FC<Props> = ({ data }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
      {data?.results.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
