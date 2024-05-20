export enum EPoster {
  N_A = "N/A",
}

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie";
  Poster?: string | EPoster.N_A;
}
