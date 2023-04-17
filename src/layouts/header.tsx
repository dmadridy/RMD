import { NavLink } from 'react-router-dom';
import logo from '../assets/icons/mainlogo.png';
import SearchForm from '../pages/search/form';
import { useState } from 'react';
import Modal from '../components/log-in/modal';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import user from '../assets/images/user.png';

const Header = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const username = useSelector((state: RootState) => state.user);

  return (
    <header className='border-b border-neutral-800 py-8 '>
      <nav className='flex items-center justify-between container mx-auto max-w-7xl gap-8'>
        <NavLink to='/'>
          <img src={logo} alt='' />
        </NavLink>
        <SearchForm />
        {username.user ? (
          <button className='flex gap-1 items-center border-2 border-neutral-700 p-1 px-3 rounded-full hover:border-neutral-400 duration-300'>
            <img className='w-6' src={user} alt='' />
            {username.user}
          </button>
        ) : (
          <button
            onClick={() => setShowing(true)}
            className='flex gap-1 items-center border-2 border-neutral-700 p-1 px-3 rounded-full hover:border-neutral-400 duration-300'
          >
            <img className='w-6' src={user} alt='' />
            Log In
          </button>
        )}
      </nav>
      <Modal showing={showing} setShowing={setShowing} />
    </header>
  );
};

export default Header;
