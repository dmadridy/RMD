export type RequestType = {
  page: string;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  title: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

type Genres = { id: number; name: string };

type Companies = {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  budget: string;
  genres: Genres[];
  homepage: string | undefined;
  id: number;
  original_lenguage: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Companies[];
  prudction_countries: string[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  vote_average: number;
  vote_count: number;
  title: string;
  video: boolean;
  tagline: string | null;
};

export type MovieCredits = {
  id: string;
  cast: object[];
  crew: object[];
};

export type MovieRecommendations = {
  page: number;
  results: object[];
  total_pages: number;
  total_results: number;
};

export type MovieReviews = {
  id: number;
  page: number;
  results: object[];
  total_pages: number;
  total_results: number;
};
