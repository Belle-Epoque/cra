import React from "react";

import TopMovies from "./design";
import { fetchMovies } from "../../api/movie";

const DEFAULT_SIZE = 5;

const filteredData = (data, size) => data.slice(0, size);

const withApiFetch = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }

    getMovies = async ({ query }) => {
      const { data = [], isError = false, errorMessage } = await fetchMovies(
        query
      );

      if (isError) {
        console.log("Error during fetch movie", errorMessage);
        return;
      }

      this.setState({
        data: filteredData(data, this.props.size || DEFAULT_SIZE),
        isSearch: false
      });
    };

    componentDidMount() {
      const { query } = this.props;

      if (!query) return;

      this.getMovies({ query });
    }

    render() {
      const { data } = this.state;
      return <WrappedComponent {...this.props} movieInfo={data} />;
    }
  };
};

export default withApiFetch(TopMovies);
