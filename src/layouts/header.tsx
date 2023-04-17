import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import SearchForm from '../pages/search/form';
import LogInButton from '../components/log-in/login-button';

const Header = () => {
  return (
    <header className='border-b border-neutral-800 py-8 '>
      <nav className='flex items-center justify-between container mx-auto max-w-7xl gap-8'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <SearchForm />
        <LogInButton />
      </nav>
    </header>
  );
};

export default Header;
