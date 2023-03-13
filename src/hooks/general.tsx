import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../services/constants/API_KEY';
import { RequestType } from '../services/utils/types';

export const useTrending = (page_number: number) => {
  return useQuery({
    queryKey: ['Trending', page_number],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page_number}`
        )
      ).json(),
  });
};

export const usePopularMovies = (page_number: number) => {
  return useQuery({
    queryKey: ['Popular', page_number],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page_number}`
        )
      ).json(),
  });
};

export const useTopRatedMovies = (page_number: number) => {
  return useQuery({
    queryKey: ['Top Rated', page_number],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page_number}`
        )
      ).json(),
  });
};

export const useUpcomingMovies = (page_number: number) => {
  return useQuery({
    queryKey: ['Upcoming', page_number],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=${page_number}`
        )
      ).json(),
  });
};

export const useSearch = (query: string, page_number: number) => {
  return useQuery({
    queryKey: [`${query}` + '_query', page_number],
    queryFn: async (): Promise<RequestType> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page_number}`
        )
      ).json(),
  });
};
