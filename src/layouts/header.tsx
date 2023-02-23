import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import search from '../assets/icons/search.png';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Header = () => {
  return (
    <header>
      <nav className='py-8 flex items-center justify-between border-b-2 border-neutral-800'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <form
          className='transition duration-200 border-2 border-neutral-800 hover:border-neutral-600 space-x-2 bg-neutral-800 rounded-xl px-4 py-3 flex items-center max-w-md w-full'
          action=''
        >
          <img className='w-5 h-5' src={search} alt='' />
          <input
            className='placeholder:text-neutral-500 text-sm w-full bg-inherit'
            type='text'
            name=''
            id=''
            placeholder='Search your favorite movie...'
          />
        </form>
      </nav>
      <div className='space-x-2 pt-8 py-12 text-neutral-400 font-medium'>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='/'
        >
          Trending
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='popular'
        >
          Popular
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='top-rated'
        >
          Top Rated
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          to='upcoming'
        >
          Upcoming
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
