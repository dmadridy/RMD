import { useRecommendations } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';
import star from '../../../assets/icons/estrella.png';
import { reduceTitle, roundVoteAverage } from '../../../services/functions';
import { Link } from 'react-router-dom';
import noPicture from '../../../assets/images/nopicture.jpg';

type Props = {
  movieId: string | undefined;
};

const Recommendations: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useRecommendations(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='pt-8'>
      <div className='mb-4 flex justify-between'>
        <h1 className='text-lg font-semibold text-neutral-200'>
          Recommendations
        </h1>
      </div>
      <div className='flex overflow-auto space-x-3 pb-4'>
        {data?.results.map((each) => {
          return (
            <Link key={each.id} to={`/movies/${each.id}`}>
              <div key={each.id}>
                <div className='relative w-72 h-44 mb-2'>
                  <img
                    className='w-full h-full rounded-xl text-cyan-500'
                    src={
                      each.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500${each.backdrop_path}`
                        : noPicture
                    }
                    alt='No backdrop'
                  />
                  <div className='hover:bg-black rounded-xl hover:opacity-60 transition duration-300 absolute inset-0'></div>
                </div>
                <div className='flex justify-between text-neutral-200'>
                  <p>{reduceTitle(each.title)}</p>
                  <div className='flex items-center gap-2'>
                    <img className='w-4 h-4' src={star} alt='' />
                    <p>{roundVoteAverage(each.vote_average)}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
