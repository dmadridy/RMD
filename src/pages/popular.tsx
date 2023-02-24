import { usePopularMovies } from '../hooks';
import Page from '../components/page';
import Loading from '../components/loading';

const PopularMovies = () => {
  const { data, error, isLoading } = usePopularMovies();

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default PopularMovies;
