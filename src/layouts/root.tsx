import { Outlet } from 'react-router-dom';
import { useResetPageAndScrollToTop } from '../hooks/general';
import Footer from './footer';
import Header from './header';

const Root = () => {
  useResetPageAndScrollToTop();

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
