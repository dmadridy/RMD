import { useParams } from 'react-router-dom';
import { useCredits } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import noPicture from '../../../assets/images/noprofile.jpg';
import Loading from '../../general/loading';
import SelectedMovie from '../selected-movie';

const Credits = () => {
  let { movieId } = useParams();
  const { data, isLoading, error } = useCredits(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='container mx-auto max-w-7xl pb-8'>
      <SelectedMovie movideId={movieId} />
      <div className='grid grid-cols-2 py-8 '>
        <div className='space-y-10'>
          <div className='text-neutral-200 font-semibold flex items-end gap-2'>
            <p className='text-xl'>Cast</p>
            <span className='px-2 py-1 bg-neutral-800 rounded-lg text-sm'>
              {data?.cast.length}
            </span>
          </div>
          {data?.cast.map((each) => {
            return (
              <div className='flex gap-4 items-center'>
                <div className='w-16 h-16'>
                  <img
                    className='object-cover object-top w-full h-full rounded-full'
                    src={
                      each.profile_path
                        ? `https://image.tmdb.org/t/p/w200${each.profile_path}`
                        : noPicture
                    }
                    alt=''
                  />
                </div>
                <div>
                  <p className='text-neutral-200'>{each.name}</p>
                  <p className='text-neutral-400'>{each.character}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='space-y-10'>
          <div className='flex items-end gap-2 text-neutral-200 font-semibold'>
            <p className='text-xl'>Crew</p>
            <span className='px-2 py-1 bg-neutral-800 rounded-lg text-sm'>
              {data?.crew.length}
            </span>
          </div>
          {data?.crew.map((each) => {
            return (
              <div className='flex gap-4 items-center'>
                <div className='w-16 h-16'>
                  <img
                    className='object-cover object-top w-full h-full rounded-full'
                    src={
                      each.profile_path
                        ? `https://image.tmdb.org/t/p/w200${each.profile_path}`
                        : noPicture
                    }
                    alt=''
                  />
                </div>
                <div>
                  <p className='text-neutral-200'>{each.name}</p>
                  <p className='text-neutral-400'>{each.job}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Credits;
