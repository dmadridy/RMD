import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='h-96 flex justify-center items-center'>
      <ClipLoader
        color='#a3a3a3'
        loading={true}
        size={60}
        speedMultiplier={0.8}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Loading;
