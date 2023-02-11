import { Outlet } from 'react-router-dom';
import Menu from '../components/menu';
//Layout
import Footer from './footer';
import Header from './header';

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
