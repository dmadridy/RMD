import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='py-8 space-x-5 flex justify-center'>
      <NavLink to='popular'>Popular</NavLink>
      <NavLink to=''>TopRated</NavLink>
      <NavLink to=''>Upcoming</NavLink>
    </div>
  );
};

export default Menu;
