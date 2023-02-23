import { Link } from 'react-router-dom';
import { MovieType } from '../services/utils/types';
import star from '../assets/icons/estrella.png';
import { reduceTitle } from '../services/functions';

type Props = {
  item: MovieType;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Link to={`/movies/${item.id}`}>
      <div>
        <img
          className=''
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt='Image Poster'
        />
      </div>
      <div className='flex justify-between'>
        <div>
          <p>{reduceTitle(item.title)}</p>
        </div>
        <div className='flex'>
          <img className='w-6 h-6 self-end' src={star} alt='' />
          <p>{item.vote_average}</p>
        </div>
      </div>
      <p>{item.release_date}</p>
    </Link>
  );
};

export default Item;
