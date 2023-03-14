import { useSearchParams } from 'react-router-dom';
import DataError from '../../components/errors/fetch';
import Loading from '../../components/general/loading';
import { useResetPage, useSearch } from '../../hooks/general';
import SearchItem from './item';
import Pagination from '../../components/general/pagination';
import { useContext } from 'react';
import { PageContext } from '../../context';

const Search = () => {
  const [searchParam] = useSearchParams();
  const { page } = useContext(PageContext);
  const query = searchParam.get('query');
  useResetPage();
  const { data, isLoading, error } = useSearch(String(query), page);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='mx-auto container max-w-7xl py-8'>
      <div className='space-y-2 text-center pb-12'>
        <h1 className='text-2xl first-letter:uppercase font-semibold text-neutral-100'>
          {query}
        </h1>
        <p className='text-neutral-400'>
          Explore {data?.total_results} {query} results
        </p>
      </div>
      <div className='grid grid-cols-3 gap-10'>
        {data?.results.map((item) => {
          return <SearchItem item={item} key={item.id} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Search;
