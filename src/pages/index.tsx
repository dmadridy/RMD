import { useTrending } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';

const Home = () => {
  const { data, error, isLoading } = useTrending();

  if (isLoading) return <Loading />;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default Home;
