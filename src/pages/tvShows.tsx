//Hooks
import { usePopularTvShows } from '../service/hooks';

const TvShows = () => {
  const { data, error, isLoading } = usePopularTvShows();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ups, something went wrong!...</h1>;

  console.log(data);

  return (
    <div>
      {data?.results.map((show) => (
        <div key={show.id}>{show.name}</div>
      ))}
    </div>
  );
};

export default TvShows;
