import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import userImg from '../../assets/images/user.png';
import Modal from './modal';
import { useState } from 'react';
import ProfilePopUp from './profile-popup';

const LogInButton = () => {
  const [showing, setShowing] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className='border-2 border-neutral-700 rounded-full hover:border-neutral-400 duration-300'>
      {user.status ? (
        <ProfilePopUp username={user.name} />
      ) : (
        <button
          onClick={() => setShowing(true)}
          className='flex items-center gap-2 p-1 px-3'
        >
          <img className='w-6' src={userImg} alt='' />
          Log In
        </button>
      )}
      <Modal showing={showing} setShowing={setShowing} />
    </div>
  );
};

export default LogInButton;
