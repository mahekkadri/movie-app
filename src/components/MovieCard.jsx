
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../services/movieApi";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.auth);

  const isFavorite = favorites.some(
    (item) => item.id === movie.id
  );

  const toggleFavorite = () => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: movie,
    });
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path ? (
          <img
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
          />
        ) : (
          <div className="poster-placeholder">No poster</div>
        )}
        <h6 className="movie-title">{movie.title}</h6>
      </Link>

      <p className="movie-year">
        {movie.release_date?.slice(0, 4) || "N/A"}
        {" · "}
        ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
      </p>

      <button
        type="button"
        className={`btn btn-sm ${
          isFavorite ? "btn-danger" : "btn-outline-danger"
        }`}
        onClick={toggleFavorite}
      >
        {isFavorite ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}
