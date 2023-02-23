import { RequestType } from '../services/utils/types';
import Item from './item';

type Props = {
  data: RequestType | undefined;
};

const Page: React.FC<Props> = ({ data }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
      {data?.results.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
