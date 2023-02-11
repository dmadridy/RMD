//Hooks
import { usePopularMovies } from '../services/hooks/movies';

const PopularMovies = () => {
  const { data, error, isLoading } = usePopularMovies();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  console.log(data);

  return (
    <div>
      {data?.results.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default PopularMovies;
