import App from "../App";
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
    ],
  },
];
