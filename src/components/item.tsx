//Types
import { MovieType } from '../services/utils/types';

type Props = {
  item: MovieType;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <img
      className=''
      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
      alt='Image Poster'
    />
  );
};

export default Item;
