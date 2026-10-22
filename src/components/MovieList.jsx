
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPopularMovies } from "../redux/actions";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(
    (state) => state.movieData
  );

  useEffect(() => {
    dispatch(loadPopularMovies());
  }, [dispatch]);

  return (
    <main className="container-fluid px-4 py-4">
      <h2 className="section-title">Popular Movies</h2>

      {loading && <p>Loading movies...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
