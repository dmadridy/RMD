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
  backdrop_path: string;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Companies[];
  prudction_countries: string[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  vote_average: number;
  vote_count: number;
  title: string;
  video: boolean;
  tagline: string;
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
