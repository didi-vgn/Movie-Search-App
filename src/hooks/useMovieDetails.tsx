import { useEffect, useState } from "react";
import { OMDB_KEY, OMDB_URL, TMDB_KEY, TMDB_URL } from "../utils/constants";
import { MovieDetails } from "../utils/types";
import { sortByPopularity } from "../utils/sort";

export function useMovieDetails(id: number): MovieDetails | null {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const resMovie = await fetch(
        `${TMDB_URL}movie/${id}?language=en-US&${TMDB_KEY}`
      );
      const movie = await resMovie.json();

      const resCredits = await fetch(
        `${TMDB_URL}movie/${id}/credits?language=en-US&${TMDB_KEY}`
      );
      const credits = await resCredits.json();
      credits.cast = sortByPopularity(credits.cast);

      const resOmdbData = await fetch(
        `${OMDB_URL}?${OMDB_KEY}&i=${movie.imdb_id}`
      );
      const omdbData = await resOmdbData.json();

      console.log(credits);

      setData({
        ...movie,
        credits,
        omdbData,
      });
    }

    fetchData();
  }, [id]);

  return data;
}
