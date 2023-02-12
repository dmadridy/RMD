//Hooks
import { useTrending } from '../services/hooks';
//Componenets
import Page from '../components/page';

const Home = () => {
  const { data, error, isLoading } = useTrending();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  return <Page data={data} />;
};

export default Home;
