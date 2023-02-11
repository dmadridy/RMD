//Hooks
import { useTrending } from '../services/hooks';
//Componenets
import Item from '../components/item';

const Home = () => {
  const { data, error, isLoading } = useTrending();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  console.log(data);

  return (
    <div className='flex justify-center flex-wrap gap-6'>
      {data?.results.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default Home;
