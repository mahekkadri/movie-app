
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovieList } from "../redux/actions";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        dispatch(searchMovieList(query.trim()));
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  return (
    <input
      className="form-control search-input"
      type="search"
      placeholder="Search movies..."
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  );
}
