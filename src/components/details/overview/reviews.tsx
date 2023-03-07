import { useReviews } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import star from '../../../assets/icons/estrella.png';
import { Link } from 'react-router-dom';
import noProfile from '../../../assets/images/noprofile.jpg';
import { useState } from 'react';
import { formatDate, reduceContent } from '../../../services/functions';

type Props = {
  movieId: string | undefined;
};

const ReducedReviews: React.FC<Props> = ({ movieId }) => {
  const [seeMore, setSeeMore] = useState(false);
  const { data, isLoading, error } = useReviews(Number(movieId));

  if (error) return <DataError />;

  if (isLoading) return <Loading />;

  return (
    <div className='py-8 border-t border-neutral-800'>
      <div className='mb-4 flex justify-between'>
        <div className='flex space-x-2 items-center '>
          <h1 className='text-lg font-semibold text-neutral-200'>Reviews </h1>
          <div className='px-2 py-1 text-xs font-semibold rounded-lg bg-neutral-800'>
            {data?.results.length}
          </div>
        </div>
        <Link
          className='text-cyan-500 hover:text-cyan-400 transition duration-200'
          to={`/movies/${movieId}/reviews`}
        >
          View reviews
        </Link>
      </div>
      <div>
        {data?.results.slice(0, 1).map((each) => {
          return (
            <div
              key={each.id}
              className='rounded-xl space-y-4 p-6 border border-neutral-700 bg-neutral-800'
            >
              <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center'>
                    <img
                      className='rounded-full h-12 w-12 bg-neutral-700'
                      src={
                        each.author_details.avatar_path
                          ? `https://image.tmdb.org/t/p/original${each.author_details.avatar_path}`
                          : noProfile
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <p>{each.author}</p>
                    <p className='text-neutral-400 text-sm'>
                      {formatDate(each.created_at)}
                    </p>
                  </div>
                </div>
                <div className='flex gap-1 items-center'>
                  <img className='w-4 h-4' src={star} alt='' />
                  <p>
                    {each.author_details.rating}
                    <span className='text-neutral-400 text-xs'>/10</span>
                  </p>
                </div>
              </div>
              <div>
                <p className='text-neutral-300 text-sm leading-relaxed'>
                  {reduceContent(each.content, seeMore)}
                </p>
              </div>
              <button
                className='text-cyan-500 hover:text-cyan-400 duration-200'
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See less' : 'See more'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReducedReviews;
