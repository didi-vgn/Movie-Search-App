export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: [
    { Source: string; Value: string },
    { Source: string; Value: string },
    { Source: string; Value: string }
  ];
  Released: string;
  Runtime: string;
  Title: string;
  Writer: string;
  Year: string;
  imdbID: string;
}

export interface MovieShort {
  Poster: string;
  Title: string;
  Year: string;
  imdbID: string;
}

export interface Response {
  Response: boolean;
  Search: Movie[];
  totalResult: number;
}
