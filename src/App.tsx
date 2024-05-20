import * as React from "react";

import { Header, MovieCard, Pagination } from "./components";
import { getMovies } from "./api";
import { IMovie } from "./types";
import { useDebounce } from "./hooks";

import "./App.css";

function App() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [totalResults, setTotalResults] = React.useState("0");

  const [debouncedSearchValue, setDebouncedSearchValue] = useDebounce(search);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleDropdownItemSelect = (value: string) => {
    console.log(value);
  };

  const handleMovieCardClick = (imdbID: string) => {
    console.log(imdbID);
  };

  React.useEffect(() => {
    setDebouncedSearchValue(search);
  }, [search, setDebouncedSearchValue]);

  const getMoviesData = async (searchValue: string, pageValue: number) => {
    setMovies([]);
    setError(null);
    setIsLoading(true);

    if (!searchValue) {
      setIsLoading(false);
      return;
    }

    try {
      const moviesData = await getMovies({
        search: searchValue,
        page: pageValue,
      });

      if (moviesData.data.Error) {
        setError(moviesData.data.Error);
        setTotalResults("0");
        return;
      }

      if (moviesData.data.Search) {
        setMovies(moviesData.data.Search);
        setTotalResults(moviesData.data.totalResults || "0");
      }
    } catch (error) {
      setError("Something went wrong...");
      setTotalResults("0");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getMoviesData(debouncedSearchValue, 1);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  return (
    <div className="app">
      <Header
        name="Alexander Borisenko"
        onChange={handleSearchChange}
        onDropdownItemSelect={handleDropdownItemSelect}
      />
      <main className="app-content">
        {error && <h2>{error}</h2>}
        {isLoading && <h2>Loading...</h2>}
        {!search && <h2>Use the search to get movies information</h2>}
        {movies.length > 0 && (
          <h2 className="total-results">
            You searched for: {search}, {totalResults} results found
          </h2>
        )}
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            onClick={handleMovieCardClick}
            {...movie}
          />
        ))}
      </main>
      <footer>
        <Pagination
          totalResults={Number(totalResults)}
          currentPage={page}
          onChange={(pageValue) => {
            setPage(pageValue);
            getMoviesData(debouncedSearchValue, pageValue);
          }}
        />
      </footer>
    </div>
  );
}

export default App;
