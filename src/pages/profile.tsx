import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Profile = () => {
  const username = useSelector((state: RootState) => state.user);

  return (
    <div>
      {username && (
        <div>
          <h1>Hi {username}!</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
