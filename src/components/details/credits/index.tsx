import { useParams } from 'react-router-dom';
import { useCredits } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import noPicture from '../../../assets/images/noprofile.jpg';
import Loading from '../../general/loading';
import SelectedMovie from '../selected-movie';
import Options from '../options';

const Credits = () => {
  let { movieId } = useParams();
  const { data, isLoading, error } = useCredits(Number(movieId));
  const { cast, crew } = data || {};

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='container mx-auto max-w-7xl py-8'>
      <Options />
      <SelectedMovie movideId={movieId} />
      <div className='grid grid-cols-2 py-8 '>
        <ul className='space-y-10'>
          <div className='text-neutral-200 font-semibold flex items-end gap-2'>
            <h2 className='text-xl'>Cast</h2>
            <span className='px-2 py-1 bg-neutral-800 rounded-lg text-xs'>
              {data?.cast.length}
            </span>
          </div>
          {cast?.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id} className='flex gap-4 items-center'>
                <div className='w-16 h-16'>
                  <img
                    className='object-cover object-top w-full h-full rounded-full'
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : noPicture
                    }
                    alt=''
                  />
                </div>
                <div>
                  <p className='text-neutral-200'>{name}</p>
                  <p className='text-neutral-400'>{character}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className='space-y-10'>
          <div className='flex items-end gap-2 text-neutral-200 font-semibold'>
            <h2 className='text-xl'>Crew</h2>
            <span className='px-2 py-1 bg-neutral-800 rounded-lg text-xs'>
              {data?.crew.length}
            </span>
          </div>
          {crew?.map(({ id, name, job, profile_path }) => {
            return (
              <li key={id} className='flex gap-4 items-center'>
                <div className='w-16 h-16'>
                  <img
                    className='object-cover object-top w-full h-full rounded-full'
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : noPicture
                    }
                    alt=''
                  />
                </div>
                <div>
                  <p className='text-neutral-200'>{name}</p>
                  <p className='text-neutral-400'>{job}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Credits;
