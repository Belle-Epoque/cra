import React, { useState, useEffect } from 'react';
import Hooks from './design';

const HooksWrapper = () => {
  const [count, setCount] = useState(0);

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    console.log('componentdidmount');
  }, []);

  useEffect(() => {
    if (query && isSearch) {
      const getQueryUrl = () =>
        `https://api.themoviedb.org/3/search/movie?api_key=c1ac741d5dd740f9861e794c5363b0c2&query=${query}`;
      const fetchData = async () => {
        try {
          const response = await fetch(getQueryUrl());
          const { results } = await response.json();
          setData(results);
        } catch (error) {
          console.log(error);
        } finally {
          setIsSearch(false);
        }
      };
      fetchData();
    }
  }, [isSearch, query]);

  const setCountOnClick = () => setCount(count + 1);
  const setQueryOnChange = event => setQuery(event.target.value);
  const setSearchOnClick = () => setIsSearch(true);
  return (
    <Hooks
      count={count}
      setCountOnClick={setCountOnClick}
      movieInfo={data}
      isSearch={isSearch}
      setSearchOnClick={setSearchOnClick}
      setQueryOnChange={setQueryOnChange}
    />
  );
};

export default HooksWrapper;
