import React from 'react';

import Class from './design';
import { fetchMovies } from '../../api/movie';

// HOC example with Counter logic.
const withCounter = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    // Auto bind with arrow function
    setCount = () => {
      this.setState(({ count: prevCount }) => ({
        count: prevCount + 1
      }));
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          count={count}
          setCountOnClick={this.setCount}
        />
      );
    }
  };
};

const withApiFetch = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        query: '',
        data: [],
        isSearch: false,
        lastSubmittedQuery: ''
      };
    }

    getMovies = async ({ query }) => {
      const { data = [], isError = false, errorMessage } = await fetchMovies(
        query
      );

      if (isError) {
        console.log('Error during fetch movie', errorMessage);
        return;
      }

      this.setState({ data, isSearch: false });
    };

    setSearchOnClick = () => {
      const { query, lastSubmittedQuery } = this.state;
      console.log(lastSubmittedQuery);
      if (query && lastSubmittedQuery !== query) {
        this.setState({ isSearch: true, lastSubmittedQuery: query });
        this.getMovies({ query });
      }
    };

    setQueryOnChange = event => {
      this.setState({ query: event.target.value });
    };

    render() {
      const { data, isSearch } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          movieInfo={data}
          isSearch={isSearch}
          setSearchOnClick={this.setSearchOnClick}
          setQueryOnChange={this.setQueryOnChange}
        />
      );
    }
  };
};

export default withCounter(withApiFetch(Class));
