import { CrewMember } from "./types";

export function sortByPopularity(arr: { popularity: number }[]) {
  return [...arr].sort((a, b) => b.popularity - a.popularity);
}

export function getMainWriters(crew: CrewMember[]) {
  return crew
    .filter((person) => ["Writer", "Screenplay"].includes(person.job))
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
}

export function getMainProducers(crew: CrewMember[]) {
  return crew
    .filter((person) => ["Producer", "Executive Producer"].includes(person.job))
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);
}
