import { RequestType } from '../../services/utils/types';
import Item from './item';
import Pagination from './pagination';
import { useVerifyLength } from '../../hooks/general';
import { responsivePadding } from '../../assets/styles';

type Props = {
  data: RequestType | undefined;
};

const Page: React.FC<Props> = ({ data }) => {
  const verifiedLength = useVerifyLength(data);

  return (
    <div className={`container mx-auto max-w-7xl ${responsivePadding}`}>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-8'>
        {data?.results.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Pagination verifiedLength={verifiedLength} />
    </div>
  );
};

export default Page;
