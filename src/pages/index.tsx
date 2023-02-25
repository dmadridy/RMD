import { useTrending } from '../hooks/movie-general';
import Page from '../components/movie-general/page';
import Loading from '../components/movie-general/loading';

const Home = () => {
  const { data, error, isLoading } = useTrending();

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default Home;
