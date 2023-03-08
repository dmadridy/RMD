import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import SearchForm from '../components/general/search/form';

const Header = () => {
  return (
    <header className='border-b border-neutral-800 py-8 '>
      <nav className='flex items-center justify-between container mx-auto max-w-7xl'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <SearchForm />
      </nav>
    </header>
  );
};

export default Header;
