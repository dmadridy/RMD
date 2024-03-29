import { Outlet } from 'react-router-dom';
import { useResetPageAndScrollToTop } from '../hooks/general';
import Footer from './footer';
import Header from './header';
import Menu from './menu';

const Root = () => {
  useResetPageAndScrollToTop();

  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
