//Types
import { Link } from 'react-router-dom';
import { MovieType } from '../services/utils/types';

type Props = {
  item: MovieType;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <Link to={item.name}>
      <img
        className=''
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt='Image Poster'
      />
    </Link>
  );
};

export default Item;
