
import {
  fetchPopularMovies as getPopular,
  searchMovies as searchAPI,
  fetchMovieDetails as getDetails,
} from "../services/movieApi";

export const loadPopularMovies = () => async (dispatch) => {
  dispatch({ type: "MOVIES_LOADING" });

  try {
    const movies = await getPopular();
    dispatch({ type: "MOVIES_SUCCESS", payload: movies });
  } catch (error) {
    dispatch({
      type: "MOVIES_ERROR",
      payload: error.message || "Could not load movies",
    });
  }
};

export const searchMovieList = (query) => async (dispatch) => {
  dispatch({ type: "MOVIES_LOADING" });

  try {
    const movies = await searchAPI(query);
    dispatch({ type: "MOVIES_SUCCESS", payload: movies });
  } catch (error) {
    dispatch({
      type: "MOVIES_ERROR",
      payload: error.message || "Search failed",
    });
  }
};

export const loadMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: "DETAILS_LOADING" });

  try {
    const movie = await getDetails(id);
    dispatch({ type: "DETAILS_SUCCESS", payload: movie });
  } catch (error) {
    dispatch({
      type: "DETAILS_ERROR",
      payload: error.message || "Could not load details",
    });
  }
};
