import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='py-8 space-x-5 flex justify-center'>
      <NavLink to='popular'>Popular</NavLink>
      <NavLink to='top-rated'>TopRated</NavLink>
      <NavLink to='upcoming'>Upcoming</NavLink>
    </div>
  );
};

export default Menu;
