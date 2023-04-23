import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import SearchForm from '../features/search/form';
import LogInButton from '../features/log-in/login-button';
import { responsivePadding } from '../assets/styles';

const Header = () => {
  return (
    <header className='border-b border-neutral-800 py-8 '>
      <nav
        className={`flex items-center justify-between container mx-auto max-w-7xl ${responsivePadding}`}
      >
        <div className='max-w-xl w-full flex items-center space-x-4 '>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>
          <SearchForm />
        </div>
        <LogInButton />
      </nav>
    </header>
  );
};

export default Header;
