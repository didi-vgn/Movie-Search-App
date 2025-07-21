import { TMDB_KEY, TMDB_URL } from "../utils/constants";

export async function getPopularMovieList(page: number) {
    const res = await fetch(`${TMDB_URL}movie/popular?${TMDB_KEY}&language=en-US&page=${page}`);
    const data = await res.json();
    return data;
}