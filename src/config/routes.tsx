import App from "../App";
import MoviePage from "../views/MoviePage";
import PersonPage from "../views/PersonPage";
import PopularMovies from "../views/PopularMovies";
import SearchResults from "../views/SearchResults";
import UserListPage from "../views/UserListPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PopularMovies />
      },
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
      {
        path: "my-list",
        element: <UserListPage />,
      },
    ],
  },
];
