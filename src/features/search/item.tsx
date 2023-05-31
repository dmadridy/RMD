import { MovieType } from '../../services/utils/types';
import noPicture from '../../assets/images/nopicture.jpg';
import { formatDate, reduceOverview } from '../../services/functions';
import { Link } from 'react-router-dom';

type Props = {
  item: MovieType;
};

const SearchItem: React.FC<Props> = ({ item }) => {
  const { id, poster_path, title, release_date, overview } = item;
  return (
    <Link to={`/movies/${id}`}>
      <div className='flex overflow-hidden border border-neutral-800 hover:border-neutral-700 rounded-lg hover:bg-neutral-800 duration-200'>
        <div className='w-72 h-44'>
          <img
            className='h-full'
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : noPicture
            }
            alt=''
          />
        </div>
        <div className='gap-4 p-4 flex justify-between flex-col'>
          <div>
            <p className='text-lg text-neutral-100 font-semibold'>{title}</p>
            <p className='text-sm text-neutral-400'>
              {formatDate(release_date)}
            </p>
          </div>
          <p className='leading-6 justify-self-end text-sm text-neutral-200'>
            {reduceOverview(overview)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
