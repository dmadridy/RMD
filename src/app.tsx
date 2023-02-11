import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/query-client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
//Pages
import Home from './pages';
import PopularMovies from './pages/popular';
import UpcomingMovies from './pages/upcoming';
import TopRatedMovies from './pages/top-rated';
import Reference from './pages/reference';
//Components
import Error404 from './components/errors/error-404';
//Layout
import Root from './layouts/root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='popular' element={<PopularMovies />} />
      <Route path='upcoming' element={<UpcomingMovies />} />
      <Route path='top-rated' element={<TopRatedMovies />} />
      <Route path='reference' element={<Reference />} />
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
