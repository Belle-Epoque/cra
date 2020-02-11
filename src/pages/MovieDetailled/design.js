import React, { Component } from "react";
import { MovieWrapper, MovieCard } from "./styles";

class MovieDetailed extends Component {
  render() {
    const { movieInfoDetailed } = this.props;

    return (
      <>
        <MovieWrapper>
          {movieInfoDetailed && (
            <MovieCard>
              <h5>{movieInfoDetailed.title}</h5>
              <img
                src={
                  movieInfoDetailed.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieInfoDetailed.poster_path}`
                    : "https://via.placeholder.com/500"
                }
                alt="movie poster"
              />
              <p>Movie budget : {movieInfoDetailed.budget} </p>
              <p>Synopsys : {movieInfoDetailed.overview}</p>
            </MovieCard>
          )}
        </MovieWrapper>
      </>
    );
  }
}

export default MovieDetailed;
