import { NavLink } from 'react-router-dom';
//Icons
import logo from '../assets/images/mainlogo.png';

const Header = () => {
  return (
    <header className='flex justify-between py-6'>
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
    </header>
  );
};

export default Header;
