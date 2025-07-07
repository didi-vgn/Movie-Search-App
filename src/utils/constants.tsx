const OMDB_KEY = `apikey=${import.meta.env.VITE_OMDB_API_KEY}`;
const OMDB_URL = `http://www.omdbapi.com/`;

const TMDB_KEY = `api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
const TMDB_URL = `https://api.themoviedb.org/3/`;

const TMDB_POSTER_200 = "https://image.tmdb.org/t/p/w200";
const TMDB_POSTER_500 = "https://image.tmdb.org/t/p/w500";
const TMDB_POSTER_ORIGINAL = "https://image.tmdb.org/t/p/original";

export {
  OMDB_KEY,
  OMDB_URL,
  TMDB_KEY,
  TMDB_URL,
  TMDB_POSTER_200,
  TMDB_POSTER_500,
  TMDB_POSTER_ORIGINAL,
};
