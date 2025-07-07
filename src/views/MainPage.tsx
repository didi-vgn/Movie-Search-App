import { Movie } from "../interfaces/Movie";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const data: Movie = {
  Actors: "Joaquin Phoenix, Patti LuPone, Amy Ryan",
  Awards: "32 nominations total",
  BoxOffice: "$8,176,562",
  Country: "United States, United Kingdom, Finland, Canada",
  Genre: "Comedy, Drama",
  Director: "Ari Aster",
  Language: "English",
  Plot: "Following the sudden death of his mother, a mild-mannered but anxiety-ridden man confronts his darkest fears as he embarks on an epic odyssey back home.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTdmYmQ5MjctYzU3NS00N2I0LTkwYTYtZWMxNTVhOTRkODA1XkEyXkFqcGc@._V1_SX300.jpg",
  Production: "N/A",
  Rated: "R",
  Ratings: [
    { Source: "Internet Movie Database", Value: "6.6/10" },
    { Source: "Rotten Tomatoes", Value: "68%" },
    { Source: "Metacritic", Value: "63/100" },
  ],
  Released: "21 Apr 2023",
  Runtime: "179 min",
  Title: "Beau Is Afraid",
  Writer: "Ari Aster",
  Year: "2023",
  imdbID: "tt13521006",
};

export default function MainPage() {
  return (
    <div className='w-full'>
      <Header />
      <Outlet />
      {/* <div className='flex flex-col gap-2 lg:w-2/3 lg:m-auto'>
        <MovieCard data={data} />
      </div> */}
    </div>
  );
}
