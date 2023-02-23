import { NavLink } from 'react-router-dom';
import logo from '../assets/images/mainlogo.png';

const Header = () => {
  return (
    <header className='border-b-2 border-neutral-800'>
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
    </header>
  );
};

export default Header;
