import { useCredits } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import noProfile from '../../../assets/images/noprofile.jpg';

type Props = {
  movieId: string | undefined;
};

const ReducedCredits: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useCredits(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='flex overflow-auto space-x-3'>
      {data?.cast.slice(0, 10).map((each) => {
        return (
          <div className='pb-2'>
            <div className='w-36 shrink-0'>
              <img
                className='rounded-xl w-full h-52'
                src={
                  each.profile_path
                    ? `https://image.tmdb.org/t/p/w200${each.profile_path}`
                    : noProfile
                }
                alt={`${each.name} image`}
              />
            </div>
            <p className='mt-2 text-neutral-200'>{each.name}</p>
            <p className='text-neutral-400'>{each.character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReducedCredits;
