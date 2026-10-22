
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
      <Link className="navbar-brand logo" to="/">
        CYRO.SE
      </Link>

      <div className="navbar-nav flex-row gap-3 ms-4">
        <NavLink className="nav-link" to="/">Latest</NavLink>
        <NavLink className="nav-link" to="/">TV Shows</NavLink>
        <NavLink className="nav-link" to="/">Movies</NavLink>
        <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </div>

      <div className="ms-auto">
        <Link to="/" className="btn btn-outline-light btn-sm">
          Home
        </Link>
      </div>
    </nav>
  );
}
