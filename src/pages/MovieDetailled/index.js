import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { fetchMovieDetailed } from "../../api/movie";
import MovieDetailed from "./design";

const withApiDetailedFetch = WrappedComponent => {
  return class extends Component {
    state = {
      data: {}
    };

    getMovie = async movieId => {
      const {
        data = {},
        isError = false,
        errorMessage
      } = await fetchMovieDetailed(movieId);

      if (isError) {
        console.log("Error during fetch movie", errorMessage);
        return;
      }

      this.setState({ data });
    };

    componentDidMount() {
      const {
        match: { params }
      } = this.props;

      console.log(params);

      this.getMovie(params.movieid);
    }

    render() {
      const { data } = this.state;
      return <WrappedComponent {...this.props} movieInfoDetailed={data} />;
    }
  };
};

export default withRouter(withApiDetailedFetch(MovieDetailed));
