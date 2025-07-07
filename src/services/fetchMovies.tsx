import { TMDB_KEY, TMDB_URL } from "../utils/constants";

export async function fetchMovies(query: string, page: number) {
  const res = await fetch(
    `${TMDB_URL}search/movie?${TMDB_KEY}&query=${encodeURIComponent(
      query
    )}&language=en-US&page=${page}`
  );
  const data = await res.json();
  return data;
}
