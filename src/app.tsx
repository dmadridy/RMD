import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './service/queryClient';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import Home from './pages';
import Header from './layouts/header';
import Footer from './layouts/footer';
//Pages
import TvShows from './pages/tvShows';
import Movies from './pages/movies';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tv-shows' element={<TvShows />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
