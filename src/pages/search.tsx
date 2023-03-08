import { useParams } from 'react-router-dom';
import DataError from '../components/errors/fetch';
import Loading from '../components/general/loading';
import { useSearch } from '../hooks/general';

const Search = () => {
  let { query } = useParams();
  const { data, isLoading, error } = useSearch(query);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <div>Search</div>;
};

export default Search;
