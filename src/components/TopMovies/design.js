import React from "react";
import { MovieWrapper, MovieCard } from "./styles";

class TopMovie extends React.PureComponent {
  render() {
    const { movieInfo } = this.props;
    return (
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
    );
  }
}

export default TopMovie;
