import { useTrending } from '../hooks/general';
import Page from '../components/general/page';
import Loading from '../components/general/loading';
import DataError from '../components/errors/fetch';
import leftAarrow from '../assets/icons/left-arrow.png';
import rightArrow from '../assets/icons/right-arrow.png';
import { useState } from 'react';
import Pagination from '../components/general/pagination';

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useTrending(page);

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <>
      <Page data={data} />
      <div className='font-semibold text-neutral-400 py-16 flex space-x-12 justify-center'>
        <button className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'>
          <img className='w-3' src={leftAarrow} alt='' />
          Previous
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
            console.log(page);
          }}
          className='flex gap-2 items-center p-2 hover:bg-neutral-800 rounded-lg transition duration-200'
        >
          Next
          <img className='w-3' src={rightArrow} alt='' />
        </button>
      </div>
    </>
  );
};

export default Home;
