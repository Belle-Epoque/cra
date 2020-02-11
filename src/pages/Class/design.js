import React, { Fragment } from "react";
import { MovieWrapper, MovieCard } from "./styles";
import { Link } from "react-router-dom";

class Class extends React.Component {
  render() {
    const {
      count,
      setCountOnClick,
      setQueryOnChange,
      isSearch,
      movieInfo,
      setSearchOnClick
    } = this.props;
    return (
      <Fragment>
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
                <Link to={`/movie/${movie.id}`}>
                  <h5>{movie.title}</h5>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : "https://via.placeholder.com/500"
                    }
                    alt="movie poster"
                  />
                </Link>
              </MovieCard>
            ))}
        </MovieWrapper>
      </Fragment>
    );
  }
}

export default Class;
