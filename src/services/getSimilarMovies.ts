import { TMDB_KEY, TMDB_URL } from "../utils/constants";

export async function getSimilarMovies(id: number) {
    const res = await fetch(`${TMDB_URL}movie/${id}/similar?${TMDB_KEY}&language=en-US&page=1`);
    const data = await res.json();

    return data;
}