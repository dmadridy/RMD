import { Outlet } from 'react-router-dom';
//Layout
import Footer from './footer';
import Header from './header';
import Menu from './menu';

const Root = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
