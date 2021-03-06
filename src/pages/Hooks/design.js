import React, { Fragment } from "react";
import { MovieWrapper, MovieCard } from "./styles";
import CalculatorHooks from "../../components/CalculatorHooks";

const Hooks = ({
  count,
  setCountOnClick,
  setQueryOnChange,
  setSearchOnClick,
  movieInfo,
  isSearch
}) => (
  <Fragment>
    <CalculatorHooks />
    <p>Vous avez cliqué {count} fois</p>
    <button onClick={setCountOnClick}>Cliquez ici</button>
    <br />
    <input type="text" onChange={setQueryOnChange} />
    <button onClick={setSearchOnClick} disabled={isSearch}>
      Rechercher
    </button>
    <br />
    <MovieWrapper>
      {movieInfo &&
        movieInfo.map((movie, index) => (
          <MovieCard key={index}>
            <h5>{movie.title}</h5>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://via.placeholder.com/500"
              }
              alt="movie poster"
            />
          </MovieCard>
        ))}
    </MovieWrapper>
  </Fragment>
);

export default Hooks;
