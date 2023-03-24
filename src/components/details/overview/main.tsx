import { MovieDetails } from '../../../services/utils/types';
import { roundVoteAverage, timeConvert } from '../../../services/functions';
import star from '../../../assets/icons/estrella.png';
import link from '../../../assets/icons/link.png';

type Props = {
  data: MovieDetails | undefined;
};

const Main: React.FC<Props> = ({ data }) => {
  const {
    poster_path,
    genres,
    title,
    homepage,
    release_date,
    runtime,
    vote_average,
    vote_count,
    tagline,
    overview,
    production_companies,
    production_countries,
  } = data || {};
  return (
    <div className='flex gap-20 container mx-auto max-w-7xl relative z-10'>
      <div className='space-y-4 w-72 shrink min-w-0'>
        <img
          className='rounded-lg'
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt='movie poster'
        />
        <div className='flex flex-wrap gap-2 justify-center'>
          {genres?.map((genre) => (
            <p
              key={genre.id}
              className='px-3 py-1 text-sm bg-neutral-800 rounded-lg'
            >
              {genre.name}
            </p>
          ))}
        </div>
      </div>
      <div className='container max-w-3xl'>
        <div className='flex space-x-3 items-end mb-2'>
          <h1 className='text-3xl font-semibold'>{title}</h1>
          <a
            className='p-1 hover:bg-neutral-700 duration-100 transition border border-neutral-600 rounded-lg bg-neutral-800'
            target={'_blank'}
            href={homepage}
          >
            <img className='w-4 h-4' src={link} alt='' />
          </a>
        </div>
        <p className='text-neutral-400 mb-6'>
          {release_date} &#x2022; {runtime && timeConvert(runtime)}
        </p>
        <div className='flex items-center mb-6'>
          <img className='w-5 h-5' src={star} alt='' />
          &nbsp;
          <p className='text-xl font-semibold'>
            {vote_average && roundVoteAverage(vote_average)}
          </p>
          <p className='text-neutral-400'>/10 &#x2022; {vote_count}</p>
        </div>
        <p className='italic text-neutral-400 mb-4'>{tagline}</p>
        <p className='mb-12'>{overview}</p>
        <div className='grid grid-cols-2 text-neutral-400'>
          <div>
            <h1 className='mb-2 font-semibold text-neutral-200'>
              Production Companies
            </h1>
            <ul>
              {production_companies?.slice(0, 2).map((each) => {
                return <li key={each.id}>{each.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <h1 className='mb-2 font-semibold text-neutral-200'>
              Production Countries
            </h1>
            <ul>
              {production_countries?.slice(0, 2).map((each) => {
                return <li key={each.name}>{each.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
