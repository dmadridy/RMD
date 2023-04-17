import { Popover, Transition } from '@headlessui/react';
import userImg from '../../assets/images/user.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/slices/user';

type Props = {
  username: string | null;
};

const ProfilePopUp: React.FC<Props> = ({ username }) => {
  const dispatch = useDispatch();

  return (
    <Popover className='relative'>
      <Popover.Button className='flex items-center gap-2 p-1 px-3 duration-300 hover:text-neutral-200'>
        <img className='w-6' src={userImg} alt='' />
        <p>{username}</p>
      </Popover.Button>
      <Transition
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Popover.Panel className='p-3 rounded mt-2 absolute z-10 bg-neutral-800 w-full grid grid-row drop-shadow-md'>
          <Link
            className='duration-300 hover:text-neutral-200'
            to={`/profile/${username}`}
          >
            Profile
          </Link>
          <button
            className='duration-300 text-lg mt-4 font-semibold cursor-pointer hover:text-neutral-200'
            onClick={() => dispatch(logOut())}
          >
            Log Out
          </button>
          <img src='/solutions.jpg' alt='' />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default ProfilePopUp;
