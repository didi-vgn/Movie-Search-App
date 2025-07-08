import { useEffect, useState } from "react";
import { Person, PersonDetails } from "../utils/types";
import { TMDB_KEY, TMDB_URL } from "../utils/constants";
import { sortByPopularity } from "../utils/sort";

export default function usePersonDetails(id: number): PersonDetails | null {
  const [data, setData] = useState<PersonDetails | null>(null);

  useEffect(() => {
    async function fetchData() {
      const resPerson = await fetch(
        `${TMDB_URL}person/${id}?language=en-US&${TMDB_KEY}`
      );
      const person = await resPerson.json();

      const resCredits = await fetch(
        `${TMDB_URL}person/${id}/combined_credits?language=en-US&${TMDB_KEY}`
      );
      const credits = await resCredits.json();
      credits.cast = sortByPopularity(credits.cast);
      credits.cast = credits.cast.filter((m) => m.media_type === "movie");
      credits.crew = sortByPopularity(credits.crew);
      credits.crew = credits.crew.filter((m) => m.media_type === "movie");

      setData({
        ...person,
        credits,
      });
    }

    fetchData();
  }, [id]);

  return data;
}
