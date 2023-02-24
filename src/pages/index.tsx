import { useTrending } from '../hooks';
import Page from '../components/page';
import Loading from '../components/loading';

const Home = () => {
  const { data, error, isLoading } = useTrending();

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default Home;
