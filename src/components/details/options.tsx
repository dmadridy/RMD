import { NavLink, useParams } from 'react-router-dom';
import { activeStyle, unactiveStyle } from '../../assets/styles';

const Options = () => {
  let { movieId } = useParams();

  return (
    <div className='mx-auto flex justify-center container max-w-7xl space-x-2 text-neutral-400 font-medium relative z-10'>
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
