import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import search from '../assets/icons/search.png';

const Header = () => {
  return (
    <header className='border-b border-neutral-800 py-8 '>
      <nav className='flex items-center justify-between container mx-auto max-w-7xl'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <form
          className='transition duration-200 border border-neutral-800 hover:border-neutral-600 space-x-2 bg-neutral-800 rounded-xl px-4 py-2 flex items-center max-w-md w-full'
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
    </header>
  );
};

export default Header;
