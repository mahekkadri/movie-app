
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import "./App.css";

function SearchPage() {
  return (
    <>
      <div className="search-area">
        <MovieSearch />
      </div>
      <MovieList />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
