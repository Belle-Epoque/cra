import React, { Fragment } from 'react';
const Hooks = ({
  count,
  setCountOnClick,
  setQueryOnChange,
  setSearchOnClick,
  movieInfo,
  isSearch
}) => (
  <Fragment>
    <p>Vous avez cliqué {count} fois</p>
    <button onClick={setCountOnClick}>Cliquez ici</button>
    <br />
    <input type="text" onChange={setQueryOnChange} />
    <button onClick={setSearchOnClick} disabled={isSearch}>
      Rechercher
    </button>
    <br />
    {/*     Add styled component ? */}
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movieInfo &&
        movieInfo.map((movie, index) => (
          <div key={index} style={{ width: '33%' }}>
            <h5>{movie.title}</h5>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt="movie poster"
            />
          </div>
        ))}
    </div>
  </Fragment>
);

export default Hooks;
