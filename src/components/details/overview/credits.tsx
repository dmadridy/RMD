import { useCredits } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';

type Props = {
  movieId: string | undefined;
};

const ReducedCredits: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useCredits(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='flex overflow-auto gap-3'>
      {data?.cast.slice(0, 10).map((each) => {
        return (
          <div>
            <div className='w-36 shrink-0'>
              <img
                className='rounded-xl'
                src={`https://image.tmdb.org/t/p/w200${each.profile_path}`}
                alt={`${each.name} image`}
              />
            </div>
            <p>{each.name}</p>
            <p className='text-neutral-400'>{each.character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReducedCredits;
