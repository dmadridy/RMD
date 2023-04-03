import { Outlet } from 'react-router-dom';
import { useResetPageAndScrollToTop } from '../hooks/general';
import Footer from './footer';
import Header from './header';
import Login from '../components/general/login';

const Root = () => {
  useResetPageAndScrollToTop();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
