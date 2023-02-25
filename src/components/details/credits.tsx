import { useCredits } from '../../hooks/details';

type Props = {
  movieId: number;
};

const Credits: React.FC<Props> = ({ movieId }) => {
  const { data, isLoading, error } = useCredits(movieId);
  console.log(data);

  return <div>Credits</div>;
};

export default Credits;
