import { useCredits } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import noProfile from '../../../assets/images/noprofile.jpg';
import { Link } from 'react-router-dom';

type Props = {
  movieId: string | undefined;
};

const ReducedCredits: React.FC<Props> = ({ movieId = '' }) => {
  const { data, isLoading, error } = useCredits(Number(movieId));
  const { cast } = data || {};

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='pb-8'>
      <div className='mb-4 flex justify-between'>
        <h1 className='text-lg font-semibold text-neutral-200'>
          Top Billed Cast
        </h1>
        <Link
          className='text-cyan-500 hover:text-cyan-400 transition duration-200'
          to={`/movies/${movieId}/credits`}
        >
          View credits
        </Link>
      </div>
      <div className='flex overflow-auto space-x-3 pb-4'>
        {cast?.slice(0, 10).map(({ id, profile_path, name, character }) => {
          return (
            <div key={id}>
              <div className='w-36 shrink-0'>
                <img
                  className='rounded-xl w-full h-52'
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : noProfile
                  }
                  alt={`Image of ${name} as ${character}`}
                />
              </div>
              <p className='mt-2 text-neutral-200'>{name}</p>
              <p className='text-neutral-400'>{character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReducedCredits;
