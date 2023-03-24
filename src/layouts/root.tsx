import { Outlet } from 'react-router-dom';
import { useResetPageAndScrollToTop } from '../hooks/general';
import Footer from './footer';
import Header from './header';

const Root = () => {
  useResetPageAndScrollToTop();

  return (
    <div className='lg:px-10 md:px-6 px-4'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
