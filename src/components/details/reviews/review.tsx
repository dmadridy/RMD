import React, { useState } from 'react';
import { formatDate, reduceContent } from '../../../services/functions';
import { ReviewsResults } from '../../../services/utils/types';
import star from '../../../assets/icons/estrella.png';
import noPicture from '../../../assets/images/nopicture.jpg';

type Props = {
  item: ReviewsResults;
};

const Review: React.FC<Props> = ({ item }) => {
  const [seeMore, setSeeMore] = useState(false);
  const { id, author_details, created_at, content, author } = item;
  return (
    <div
      key={id}
      className='rounded-xl space-y-4 p-6 border border-neutral-700 bg-neutral-800'
    >
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            <img
              className='rounded-full h-12 w-12 bg-neutral-700'
              src={
                author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/original${author_details.avatar_path}`
                  : noPicture
              }
              alt=''
            />
          </div>
          <div>
            <p>{author}</p>
            <p className='text-neutral-400 text-sm'>{formatDate(created_at)}</p>
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          <img className='w-4 h-4' src={star} alt='' />
          <p>
            {author_details.rating}
            <span className='text-neutral-400 text-xs'>/10</span>
          </p>
        </div>
      </div>
      <div>
        <p className='text-neutral-300 text-sm leading-relaxed'>
          {reduceContent(content, seeMore)}
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
};

export default Review;
