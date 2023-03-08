import { useSearchParams } from 'react-router-dom';
import DataError from '../../errors/fetch';
import Loading from '../loading';
import { useSearch } from '../../../hooks/general';
import SearchItem from './items';
import Pagination from '../pagination';

const Search = () => {
  let [searchParam] = useSearchParams();
  const query = searchParam.get('query');
  const { data, isLoading, error } = useSearch(String(query));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='mx-auto container max-w-7xl py-8'>
      <div className='grid grid-cols-3 gap-10'>
        {data?.results.map((each) => {
          return <SearchItem each={each} key={each.id} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Search;
