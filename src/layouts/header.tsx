import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import { activeStyle, unactiveStyle } from '../assets/styles';

const Header = () => {
  return (
    <header className=''>
      <nav className='flex justify-between'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <input
          className=''
          type='text'
          name=''
          id=''
          placeholder='Search your favorite movie'
        />
      </nav>
      <div className='text-neutral-400 font-medium'>
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
