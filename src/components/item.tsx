//Types
import { ObjectType } from '../services/utils/types';

const Item = (item: ObjectType) => {
  return (
    <div>
      <img
        className='w-64 h-96'
        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
        alt='Image Poster'
      />
    </div>
  );
};

export default Item;
