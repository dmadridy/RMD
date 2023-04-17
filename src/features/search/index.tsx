import { useSearchParams } from 'react-router-dom';
import DataError from '../../components/errors/fetch';
import Loading from '../../components/general/loading';
import { useSearch, useVerifyLength } from '../../hooks/general';
import SearchItem from './item';
import Pagination from '../../components/general/pagination';
import { useContext } from 'react';
import { PageContext } from '../../context';

const Search = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get('query');
  const { page } = useContext(PageContext);
  const { data, isLoading, error } = useSearch(String(query), page);
  const verifiedLength = useVerifyLength(data);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='mx-auto container max-w-7xl pb-8'>
      <div className='space-y-2 text-center pb-12'>
        <h1 className='text-2xl first-letter:uppercase font-semibold text-neutral-100'>
          {query}
        </h1>
        <p className='text-neutral-400'>
          Explore {data?.total_results} {query} results
        </p>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-10'>
        {data?.results.map((item) => {
          return <SearchItem item={item} key={item.id} />;
        })}
      </div>
      <Pagination verifiedLength={verifiedLength} />
    </div>
  );
};

export default Search;
