import { useQuery } from '@tanstack/react-query';
//Types
import { RequestType } from '../utils/types';

export const usePopularTvShows = () => {
  return useQuery({
    queryKey: ['Tv Shows'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          'https://api.themoviedb.org/3/tv/popular?api_key=b51f7c5d5e1fada4247e4856451be8f9'
        )
      ).json(),
  });
};
