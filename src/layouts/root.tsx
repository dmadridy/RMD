import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Menu from './menu';

const Root = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
