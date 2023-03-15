import { useContext, useLayoutEffect } from 'react';
import leftAarrow from '../../assets/icons/left-arrow.png';
import rightArrow from '../../assets/icons/right-arrow.png';
import { PageContext } from '../../context';

const Pagination = () => {
  const { previousPage, nextPage, page } = useContext(PageContext);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className='font-semibold text-neutral-400 py-16 flex space-x-12 justify-center'>
      <button
        disabled={page === 1}
        onClick={() => previousPage(page)}
        className={
          page === 1
            ? 'flex gap-2 items-center p-2 opacity-50 cursor-no-drop'
            : 'flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'
        }
      >
        <img className='w-3' src={leftAarrow} alt='' />
        Previous
      </button>
      <button
        onClick={() => nextPage(page)}
        className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'
      >
        Next
        <img className='w-3' src={rightArrow} alt='' />
      </button>
    </div>
  );
};

export default Pagination;
