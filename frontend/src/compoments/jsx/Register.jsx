import { useState } from 'react';

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            id="username"
          />
        </div>

        <div className="input-group password-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              id="password"
            />
            <span
              className="toggle-eye"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <div className="input-group password-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              id="confirmPassword"
            />
            <span
              className="toggle-eye"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <button type="submit">Register</button>
        <button type="button" onClick={() => props.setstate(prev => !prev)}>
          Login
        </button>
      </form>
    </div>
  );
}
