import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='space-x-5'>
      <NavLink to='popular'>Popular</NavLink>
      <NavLink to='top-rated'>Top Rated</NavLink>
      <NavLink to='upcoming'>Upcoming</NavLink>
    </div>
  );
};

export default Menu;
