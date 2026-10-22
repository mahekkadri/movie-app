
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (!email.trim()) return;

    dispatch({
      type: "LOGIN",
      payload: { email: email.trim() },
    });

    navigate("/");
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Sign In</h2>
        <p>Welcome to CYRO.SE</p>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn btn-danger w-100" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
