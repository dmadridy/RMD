import { useKeywords } from '../../../hooks/details';
import DataError from '../../errors/fetch';
import Loading from '../../general/loading';

type Props = {
  movieId: string | undefined;
};

const Keywords: React.FC<Props> = ({ movieId }) => {
  const { data, error, isLoading } = useKeywords(Number(movieId));

  if (isLoading) return <Loading />;

  if (error) return <DataError />;

  return (
    <div className='space-y-2'>
      <h1 className='font-semibold text-neutral-400'>Keywords</h1>
      <div className='flex flex-wrap items-center gap-2'>
        {data?.keywords.map((each) => {
          return (
            <p
              key={each.id}
              className='align-center py-1 px-2 bg-neutral-800 rounded-lg text-xs text-neutral-300'
            >
              {each.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Keywords;
