import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Home from './pages';
import PopularMovies from './pages/popular';
import UpcomingMovies from './pages/upcoming';
import TopRatedMovies from './pages/top-rated';
import MovieDetails from './components/details/overview';
import Error404 from './components/errors/404';
import Root from './layouts/root';
import Credits from './components/details/credits';
import Reviews from './components/details/reviews';
import DetailsRoot from './components/details/root';
import Search from './features/search';
import Reference from './pages/reference';
import { useState } from 'react';
import { PageContext } from './context';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ErrorElement from './components/errors/exceptions';
import Profile from './pages/profile';

const App = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const previousPage = () => setPage((prevPage) => prevPage - 1);
  const resetPage = () => setPage(1);
  const user = useSelector((state: RootState) => state.user);

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<Root />} errorElement={<ErrorElement />}>
        <Route index element={<Home />} />
        <Route path='popular' element={<PopularMovies />} />
        <Route path='reference' element={<Reference />} />
        <Route path='upcoming' element={<UpcomingMovies />} />
        <Route path='top-rated' element={<TopRatedMovies />} />
        <Route path='search' element={<Search />} />
        <Route
          path='profile/:username'
          element={user.status ? <Profile /> : <Navigate to='/' />}
        />
        <Route path='movies/:movieId' element={<DetailsRoot />}>
          <Route index element={<MovieDetails />} />
          <Route path='/movies/:movieId/credits' element={<Credits />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Route>
    )
  );
  return (
    <PageContext.Provider value={{ page, nextPage, previousPage, resetPage }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </PageContext.Provider>
  );
};

export default App;
