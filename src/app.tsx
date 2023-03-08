import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages';
import PopularMovies from './pages/popular';
import UpcomingMovies from './pages/upcoming';
import TopRatedMovies from './pages/top-rated';
import MovieDetails from './components/details/overview';
import Error404 from './components/errors/404';
import ErrorElement from './components/errors/exceptions';
import Root from './layouts/root';
import Credits from './components/details/credits';
import Reviews from './components/details/reviews';
import DetailsRoot from './components/details/root';
import Search from './pages/search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' errorElement={<ErrorElement />} element={<Root />}>
      <Route index element={<Home />} />
      <Route path='popular' element={<PopularMovies />} />
      <Route path='upcoming' element={<UpcomingMovies />} />
      <Route path='top-rated' element={<TopRatedMovies />} />
      <Route path='search' element={<Search />} />
      <Route path='movies/:movieId' element={<DetailsRoot />}>
        <Route index element={<MovieDetails />} />
        <Route path='/movies/:movieId/credits' element={<Credits />} />
        <Route path='/movies/:movieId/reviews' element={<Reviews />} />
      </Route>
      <Route path='*' element={<Error404 />} />
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
