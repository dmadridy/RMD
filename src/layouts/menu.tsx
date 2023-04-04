import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';
import user from '../assets/images/user.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Menu = () => {
  const username = useSelector((state: RootState) => state.user);

  return (
    <div className='flex justify-between container mx-auto max-w-7xl pt-8 pb-2 text-neutral-400 overflow-auto items-center font-medium'>
      <div className='flex gap-2'>
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
      <div className='flex gap-2'>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/reference'
        >
          Reference
        </NavLink>
        <button className='flex gap-1 items-center border-2 border-neutral-700 p-1 px-3 rounded-full hover:border-neutral-400 duration-300'>
          <img className='w-6' src={user} alt='' />
          {username.status ? username.user : 'Log In'}
        </button>
      </div>
    </div>
  );
};

export default Menu;
