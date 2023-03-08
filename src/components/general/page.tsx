import { RequestType } from '../../services/utils/types';
import Item from './item';
import Menu from '../../layouts/menu';
import Pagination from './pagination';

type Props = {
  data: RequestType;
};

const Page: React.FC<Props> = ({ data }) => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Menu />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
        {data?.results.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Page;
