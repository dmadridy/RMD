import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to='/'>
          <img src='' alt='' />
          <p>Logo</p>
        </NavLink>
      </div>
      <div>
        <NavLink to='movies'>Movies</NavLink>
      </div>
    </header>
  );
};

export default Header;
