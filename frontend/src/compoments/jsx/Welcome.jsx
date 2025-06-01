import '../css/Welcome.css'
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div id="welcomeContainer">
      <h1>Welcome to the </h1>
      <span id='shadyName' >SB</span>

      <button onClick={() => navigate("/login")}>
        Login
      </button>

      <button onClick={() => navigate("/res")}>
        Register
      </button>
    </div>
  );
}
