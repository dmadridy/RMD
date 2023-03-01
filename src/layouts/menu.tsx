import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Menu = () => {
  return (
    <div className='space-x-2 pt-8 pb-12 text-neutral-400 font-medium'>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to='/'
      >
        Trending
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to='/popular'
      >
        Popular
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to='/top-rated'
      >
        Top Rated
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to='/upcoming'
      >
        Upcoming
      </NavLink>
    </div>
  );
};

export default Menu;
