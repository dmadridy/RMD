import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import user from '../../assets/images/user.png';
import Modal from './modal';
import { useState } from 'react';

const LogInButton = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const username = useSelector((state: RootState) => state.user);

  return (
    <div>
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
      <Modal showing={showing} setShowing={setShowing} />
    </div>
  );
};

export default LogInButton;
