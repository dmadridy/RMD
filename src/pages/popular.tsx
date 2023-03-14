import { usePopularMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';
import DataError from '../components/errors/fetch';
import { useContext } from 'react';
import { PageContext } from '../context';

const PopularMovies = () => {
  const { page } = useContext(PageContext);
  const { data, error, isLoading } = usePopularMovies(page);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <Page data={data} />;
};

export default PopularMovies;
