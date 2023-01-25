import { useQuery } from '@tanstack/react-query';
//Types
import { RequestType } from '../utils/types';

export const useTrending = () => {
  return useQuery({
    queryKey: ['Trending'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          'https://api.themoviedb.org/3/trending/all/week?api_key=b51f7c5d5e1fada4247e4856451be8f9'
        )
      ).json(),
  });
};

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

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['Movies'],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=b51f7c5d5e1fada4247e4856451be8f9'
        )
      ).json(),
  });
};
