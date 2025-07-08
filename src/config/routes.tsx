import App from "../App";
import MoviePage from "../views/MoviePage";
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
    ],
  },
];
