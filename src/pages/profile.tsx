import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { responsivePadding } from '../assets/styles';

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className={`${responsivePadding} max-w-7xl space-y-4 container mx-auto pb-12`}
    >
      <h1 className='font-semibold text-xl text-neutral-100'>
        Hi {user.name}!
      </h1>
      <p className='text-neutral-300'>
        Congratulations for being curious and logging in! Unfortunaly, there
        isn't shit here yet, lol
      </p>
      <div>
        <a
          target='_blank'
          className='p-2 bg-neutral-800 hover:bg-neutral-700 duration-200 rounded'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        >
          Docs
        </a>
      </div>
    </div>
  );
};

export default Profile;
