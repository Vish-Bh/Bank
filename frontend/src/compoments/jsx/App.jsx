  import { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
  import Login from './Login.jsx';
  import Welcome from './Welcome.jsx';
  import Res from './Register.jsx';
  import Home from './Home.jsx';
  import Background from './Background.jsx';
  import '../css/LoginRegister.css';

  export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [username, setUsername] = useState("");
    

    return (
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <Background><Home username={username} setUsername={setUsername} /></Background>

              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/login"
            element={
              <Background>
                <Login setIsLoggedIn={setIsLoggedIn}  username={username} setUsername={setUsername}/>
              </Background>
            }
          />

          <Route
            path="/res"
            element={
              <Background>
                <Res />
              </Background>
            }

          />

          <Route 
          path="/"
          element={
            <Background>
              <Welcome />
            </Background>
          }/>
        </Routes>
      </Router>
    );
  }
