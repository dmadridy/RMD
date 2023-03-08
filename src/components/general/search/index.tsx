import { useSearchParams } from 'react-router-dom';
import DataError from '../../errors/fetch';
import Loading from '../loading';
import { useSearch } from '../../../hooks/general';

const Search = () => {
  let [searchParam] = useSearchParams();
  const query = searchParam.get('query');
  const { data, isLoading, error } = useSearch(String(query));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  console.log(data?.results);

  return (
    <div>
      {data?.results.map((each) => {
        return <div>Each</div>;
      })}
    </div>
  );
};

export default Search;
