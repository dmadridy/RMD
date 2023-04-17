import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className='max-w-7xl container mx-auto pb-12'>
      {user && <h1 className='text-2xl'>Hi {user.name}!</h1>}
    </div>
  );
};

export default Profile;
