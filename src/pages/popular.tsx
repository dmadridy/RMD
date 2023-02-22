import { usePopularMovies } from '../services/hooks';
import Page from '../components/page';

const PopularMovies = () => {
  const { data, error, isLoading } = usePopularMovies();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default PopularMovies;
