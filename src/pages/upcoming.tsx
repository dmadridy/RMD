import { useResetPage, useUpcomingMovies } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';
import DataError from '../components/errors/fetch';
import { useContext } from 'react';
import { PageContext } from '../context';

const UpcomingMovies = () => {
  const { page } = useContext(PageContext);
  useResetPage();
  const { data, error, isLoading } = useUpcomingMovies(page);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return <Page data={data} />;
};

export default UpcomingMovies;
