import { Link } from 'react-router-dom';
import { MovieType } from '../../services/utils/types';
import star from '../../assets/icons/estrella.png';
import { reduceTitle, roundVoteAverage } from '../../services/functions';

type Props = {
  item: MovieType;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Link
      className='transition duration-300 rounded-lg font-medium space-y-2 p-1.5 hover:bg-neutral-800'
      to={`/movies/${item.id}`}
    >
      <div>
        <img
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
          alt='Image Poster'
        />
      </div>
      <div className='flex justify-between'>
        <div>
          <p>{reduceTitle(item.title)}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <img className='w-4 h-4' src={star} alt='' />
          <p>{roundVoteAverage(item.vote_average)}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-400'>{item.release_date}</p>
    </Link>
  );
};

export default Item;
