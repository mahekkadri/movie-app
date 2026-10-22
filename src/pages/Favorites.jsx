
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!user) {
    return <p className="p-4">Please sign in to view favorites.</p>;
  }

  return (
    <main className="container-fluid px-4 py-4">
      <h2 className="section-title">My Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
              <button
                className="btn btn-sm btn-outline-danger mt-2"
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_FAVORITE",
                    payload: movie,
                  })
                }
              >
                Remove favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
