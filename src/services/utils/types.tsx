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

type Cast = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: string;
};

type Crew = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

export type MovieCredits = {
  id: string;
  cast: Cast[];
  crew: Crew[];
};

export type MovieRecommendations = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type ReviewsResults = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type MovieReviews = {
  id: number;
  page: number;
  results: ReviewsResults[];
  total_pages: number;
  total_results: number;
};

type Keywords = {
  id: number;
  name: string;
};

export type MovieKeywords = {
  id: number;
  keywords: Keywords[];
};
