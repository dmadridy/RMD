import React from 'react';
import { formatDate, reduceContent } from '../../../services/functions';
import { ReviewsResults } from '../../../services/utils/types';
import star from '../../../assets/icons/estrella.png';
import noPicture from '../../../assets/images/nopicture.jpg';

type Props = {
  each: ReviewsResults;
};

const Review: React.FC<Props> = ({ each }) => {
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
                  : noPicture
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
          {reduceContent(each.content)}
        </p>
      </div>
    </div>
  );
};

export default Review;
