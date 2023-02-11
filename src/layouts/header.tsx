import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='border-2 border-black'>
      <header className='cotainer mx-auto max-w-5xl flex justify-between'>
        <NavLink to='/'>
          <img src='' alt='' />
          <p>Logo</p>
        </NavLink>
        <NavLink to='movies'>Movies</NavLink>
      </header>
    </div>
  );
};

export default Header;
