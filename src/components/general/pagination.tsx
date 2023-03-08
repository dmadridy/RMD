import leftAarrow from '../../assets/icons/left-arrow.png';
import rightArrow from '../../assets/icons/right-arrow.png';

const Pagination = () => {
  return (
    <div className='font-semibold text-neutral-400 py-16 flex space-x-12 justify-center'>
      <button className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'>
        <img className='w-3' src={leftAarrow} alt='' />
        Previous
      </button>
      <button className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'>
        Next
        <img className='w-3' src={rightArrow} alt='' />
      </button>
    </div>
  );
};

export default Pagination;
