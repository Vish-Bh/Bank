import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import fetchUserPassword from '../api/fetchUserPassword.js'


export default function Login(props) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const username=props.username
  const setUsername=props.setUsername
 const navigate = useNavigate();
  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const isValid = await fetchUserPassword(username, password);

    if (isValid) {
      props.setIsLoggedIn(true);   
      navigate('/home');
    } else {
      alert('Incorrect password');
    }

  } catch (error) {
    console.error('error', error);
    alert('Something went wrong');
  }
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
        <button type="button" onClick={() => navigate('/res') }>
          Register
        </button>
      </form>
    </div>
  );
}
