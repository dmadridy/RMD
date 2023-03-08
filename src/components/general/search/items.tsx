import { MovieType } from '../../../services/utils/types';
import noPicture from '../../../assets/images/nopicture.jpg';
import {
  formatDate,
  reduceOverview,
  reduceTitle,
} from '../../../services/functions';
import { Link } from 'react-router-dom';

type Props = {
  each: MovieType;
};

const SearchItem: React.FC<Props> = ({ each }) => {
  return (
    <Link to={`/movies/${each.id}`}>
      <div className='flex overflow-hidden border border-neutral-800 rounded-lg'>
        <div className='w-72 h-full'>
          <img
            className='w-full h-full'
            src={
              each.poster_path
                ? `https://image.tmdb.org/t/p/w200${each.poster_path}`
                : noPicture
            }
            alt=''
          />
        </div>
        <div className='gap-4 p-4 flex justify-between flex-col'>
          <div>
            <p className='text-lg text-neutral-100 font-semibold'>
              {each.title && reduceTitle(each.title)}
            </p>
            <p className='text-sm text-neutral-400'>
              {each.release_date && formatDate(each.release_date)}
            </p>
          </div>
          <p className='leading-6 justify-self-end text-sm text-neutral-200'>
            {each.overview && reduceOverview(each.overview)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
