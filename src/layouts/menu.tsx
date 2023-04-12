import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../assets/styles';
import user from '../assets/images/user.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Menu = () => {
  const username = useSelector((state: RootState) => state.user);

  return (
    <div className='flex justify-between max-w-7xl container mx-auto'>
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
        {username.user ? (
          <button className='flex gap-1 items-center border-2 border-neutral-700 p-1 px-3 rounded-full hover:border-neutral-400 duration-300'>
            <img className='w-6' src={user} alt='' />
            {username.user}
          </button>
        ) : (
          <button className='flex gap-1 items-center border-2 border-neutral-700 p-1 px-3 rounded-full hover:border-neutral-400 duration-300'>
            <img className='w-6' src={user} alt='' />
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
