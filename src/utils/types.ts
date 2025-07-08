export interface Movie {
  title: string;
  original_title: string;
  id: number;
  imbd_id: string;
  runtime: number;
  genres: { id: number; name: string }[];
  release_date: string;
  overview: string;
  budget: number;
  revenue: number;
  poster_path: string;
  backdrop_path: string;
  spoken_languages: { english_name: string; name: string }[];
  homepage: string;
  production_companies: { id: number; logo_path: string; name: string }[];
  production_countries: { name: string }[];
}

interface OmdbData {
  Ratings: { Source: string; Value: string }[];
  Rated: string;
}

export interface MovieList {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  popularity: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  popularity: number;
}

interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface MovieDetails extends Movie {
  credits: Credits;
  omdbData: OmdbData;
}
