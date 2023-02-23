import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Root = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
