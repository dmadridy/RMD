import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Root = () => {
  return (
    <div className='px-4 md:px-6 container mx-auto max-w-7xl'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
