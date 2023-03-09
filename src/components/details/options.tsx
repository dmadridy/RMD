import { NavLink, useParams } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../../assets/styles';

const Options = () => {
  let { movieId } = useParams();

  return (
    <div className='mx-auto container max-w-7xl space-x-2 pt-8 text-neutral-400 font-medium'>
      <NavLink
        end
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to={`/movies/${movieId}`}
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to={`/movies/${movieId}/credits`}
      >
        Credits
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        to={`/movies/${movieId}/reviews`}
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default Options;
