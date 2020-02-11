import React, { useState, useEffect } from "react";
import { compose } from "../../helpers";
import { fetchMovies } from "../../api/movie";
import Hooks from "./design";

const withCounter = WrappedComponent => props => {
  const [count, setCount] = useState(0);
  const setCountOnClick = () => setCount(count + 1);

  useEffect(() => {
    console.log(count);
  }, [count]);
  console.log("withCounter hoc");
  return (
    <WrappedComponent
      {...props}
      count={count}
      setCountOnClick={setCountOnClick}
    />
  );
};

const getMovies = async ({ query, setData, setIsSearch }) => {
  const { data = [], isError = false, errorMessage } = await fetchMovies(query);

  if (isError) {
    console.log("Error during fetch movie", errorMessage);
    return;
  }

  setData(data);
  setIsSearch(false);
};

const withApiMovie = WrappedComponent => props => {
  const [query, setQuery] = useState("");
  const [lastSubmittedQuery, setLastSubmittedQuery] = useState("");
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    console.log("like componentDidMount");
  }, []);

  useEffect(() => {
    console.log("did update");
  });

  useEffect(() => {
    if (query && isSearch && lastSubmittedQuery !== query) {
      setLastSubmittedQuery(query);
      getMovies({ query, setData, setIsSearch });
    }
  }, [isSearch, lastSubmittedQuery, query]);

  const setQueryOnChange = event => setQuery(event.target.value); // @Todo: debounce this change.
  const setSearchOnClick = () => setIsSearch(true);

  console.log("withApiMovie hoc");
  return (
    <WrappedComponent
      {...props}
      movieInfo={data}
      isSearch={isSearch}
      setSearchOnClick={setSearchOnClick}
      setQueryOnChange={setQueryOnChange}
    />
  );
};

export default compose(withCounter, withApiMovie)(Hooks);
