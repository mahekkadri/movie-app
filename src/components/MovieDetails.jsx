
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadMovieDetails } from "../redux/actions";
import { IMAGE_URL } from "../services/movieApi";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie, loading, error } = useSelector(
    (state) => state.movieData
  );

  useEffect(() => {
    dispatch(loadMovieDetails(id));
  }, [dispatch, id]);

  if (loading) return <p className="p-4">Loading details...</p>;
  if (error) return <p className="p-4 text-danger">{error}</p>;
  if (!movie || String(movie.id) !== String(id)) return null;

  const cast = movie.credits?.cast?.slice(0, 8) || [];

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-4">
          {movie.poster_path && (
            <img
              className="img-fluid rounded"
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>

        <div className="col-md-8">
          <h1>{movie.title}</h1>
          <p className="text-secondary">
            {movie.release_date} ·{" "}
            {movie.runtime || "N/A"} minutes
          </p>

          <h5>Rating: ⭐ {movie.vote_average?.toFixed(1)}</h5>
          <h5 className="mt-4">Genres</h5>
          <p>{movie.genres?.map((g) => g.name).join(", ")}</p>

          <h5>Overview</h5>
          <p>{movie.overview || "No description available."}</p>

          <h5>Cast</h5>
          <p>{cast.map((person) => person.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
