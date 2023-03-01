import { usePopularMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';
import DataError from '../components/errors/fetch';

const PopularMovies = () => {
  const { data, error, isLoading } = usePopularMovies();

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <Page data={data} />;
};

export default PopularMovies;
