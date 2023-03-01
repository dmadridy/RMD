import { NavLink } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../../assets/styles';

const Options = () => {
  return (
    <div className='space-x-2 pt-8 py-12 text-neutral-400 font-medium'>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to={`/movies/movieId`}
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to={`/movies/movieId/credits`}
      >
        Credits
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to={`/movies/movieId/reviews`}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default Options;
