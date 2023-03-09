import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Menu = () => {
  return (
    <div className='flex pt-8 pb-12 text-neutral-400 items-center font-medium'>
      <div className=' space-x-2'>
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
      <div className='ml-auto'>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/reference'
        >
          Reference
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
