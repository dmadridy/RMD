import { useQuery } from '@tanstack/react-query';
import { API_KEY } from '../../services/constants/API_KEY';
import {
  MovieCredits,
  MovieDetails,
  MovieRecommendations,
} from '../../services/utils/types';

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: [String(movieId)],
    queryFn: async (): Promise<MovieDetails> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        )
      ).json(),
  });
};

export const useCredits = (movieId: number) => {
  return useQuery({
    queryKey: [String(movieId) + '_credits'],
    queryFn: async (): Promise<MovieCredits> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        )
      ).json(),
  });
};

export const useRecommendations = (movieId: number) => {
  return useQuery({
    queryKey: [String(movieId) + '_recommended'],
    queryFn: async (): Promise<MovieRecommendations> =>
      await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`
        )
      ).json(),
  });
};
