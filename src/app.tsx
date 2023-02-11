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
import Error404 from './components/errors/error-404';
//Layout
import Root from './layouts/root';
import Reference from './pages/reference';
import PopularMovies from './pages/popular';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='popular' element={<PopularMovies />} />
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
