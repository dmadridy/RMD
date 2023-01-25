//Hooks
import { useTrending } from '../Services/hooks';

const Home: React.FC = () => {
  const { data, error, isLoading } = useTrending();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  console.log(data);

  return (
    <div>
      {data?.results.map((item) => (
        <div key={item.id}>
          {item.title} {item.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
