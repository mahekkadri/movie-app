
import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

export const fetchPopularMovies = async () => {
  const { data } = await api.get("/movie/popular");
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await api.get("/search/movie", {
    params: { query },
  });
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await api.get(`/movie/${id}`, {
    params: { append_to_response: "credits" },
  });
  return data;
};
