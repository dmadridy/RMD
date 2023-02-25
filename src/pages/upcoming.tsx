import { useUpcomingMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';

const UpcomingMovies = () => {
  const { data, error, isLoading } = useUpcomingMovies();

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default UpcomingMovies;
