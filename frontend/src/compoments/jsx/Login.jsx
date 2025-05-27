import { useState } from 'react';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className="login">
      <h1>Login</h1>
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

        <a id="passwordForgot" href="#">Forgot password?</a>

        <button type="submit">Login</button>
        <button type="button" onClick={() => props.setstate(prev => !prev)}>
          Register
        </button>
      </form>
    </div>
  );
}
