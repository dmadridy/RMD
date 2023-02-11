import { useQuery } from '@tanstack/react-query';
//Types
import { RequestType } from '../utils/types';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['Popular'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=b51f7c5d5e1fada4247e4856451be8f9'
        )
      ).json(),
  });
};
