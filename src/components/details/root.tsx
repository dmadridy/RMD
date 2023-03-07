import { Outlet } from 'react-router-dom';
import Options from './options';

const DetailsRoot = () => {
  return (
    <>
      <Options />
      <Outlet />
    </>
  );
};

export default DetailsRoot;
