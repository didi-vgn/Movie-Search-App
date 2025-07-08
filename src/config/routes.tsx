import App from "../App";
import MoviePage from "../views/MoviePage";
import PersonPage from "../views/PersonPage";
import SearchResults from "../views/SearchResults";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
      },
      {
        path: "person/:id",
        element: <PersonPage />,
      },
    ],
  },
];
