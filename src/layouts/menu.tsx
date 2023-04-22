import { NavLink } from 'react-router-dom';
import {
  activeStyle,
  responsivePadding,
  unactiveStyle,
} from '../assets/styles';

const Menu = () => {
  return (
    <div
      className={`${responsivePadding} flex justify-between max-w-7xl container mx-auto`}
    >
      <div className='flex pt-8 mb-10 pb-2 text-neutral-400 overflow-auto items-center font-medium gap-2 whitespace-nowrap'>
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
      <div className='flex pt-8 mb-10 pb-2 text-neutral-400 overflow-auto items-center font-medium gap-2 whitespace-nowrap'>
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
