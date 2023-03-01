import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
