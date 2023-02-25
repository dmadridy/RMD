import { usePopularMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';

const PopularMovies = () => {
  const { data, error, isLoading } = usePopularMovies();

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default PopularMovies;
