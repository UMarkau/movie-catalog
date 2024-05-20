import * as React from "react";

import PlaceholderImage from "../../assets/placeholder_image.png";

import { IMovie, EPoster } from "../../types";

import "./MovieCard.css";

interface IProps extends IMovie {
  onClick?: (imdbID: string) => void;
}

export const MovieCard = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  onClick,
}: IProps) => {
  const posterSrc = React.useMemo(() => {
    if (!Poster || Poster === EPoster.N_A) {
      return PlaceholderImage;
    }

    return Poster;
  }, [Poster]);

  return (
    <button className="movie-card" onClick={() => onClick?.(imdbID)}>
      <img src={posterSrc} alt="movie poster" className="movie-image" />
      <p>Name: {Title}</p>
      <p>Year: {Year}</p>
      <p>imdbID: {imdbID}</p>
      <p>Type: {Type}</p>
    </button>
  );
};
