import { Outlet } from 'react-router-dom';
import Options from './options';

const DetailsRoot = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto container'>
        <Options />
      </div>
      <Outlet />
    </>
  );
};

export default DetailsRoot;
