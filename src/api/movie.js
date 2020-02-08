const API_MOVIE_BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_MOVIE_API_KEY =
  process.env.API_MOVIE_API_KEY || "c1ac741d5dd740f9861e794c5363b0c2";

const getQueryUrl = (query = "") =>
  `${API_MOVIE_BASE_URL}?api_key=${API_MOVIE_API_KEY}&query=${query}`;

export const fetchMovies = async (query = "") => {
  const res = { data: [], errorMessage: "", error: {}, isError: false };

  try {
    // See https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch.
    const response = await fetch(getQueryUrl(query));
    const {
      results: data,
      success = true,
      ...errorStatus
    } = await response.json();

    if (!success) throw new Error(JSON.stringify(errorStatus));

    return { ...res, data };
  } catch (error) {
    return {
      ...res,
      errorMessage: error.message || "Undefined error",
      error,
      isError: true
    };
  }
};
