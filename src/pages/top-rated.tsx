import { useResetPage, useTopRatedMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';
import DataError from '../components/errors/fetch';
import { useContext } from 'react';
import { PageContext } from '../context';

const TopRatedMovies = () => {
  const { page } = useContext(PageContext);
  useResetPage();
  const { data, error, isLoading } = useTopRatedMovies(page);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <Page data={data} />;
};

export default TopRatedMovies;
