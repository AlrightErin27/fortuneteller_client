import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Navbar from "./components/partials/Navbar.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import CrystalBall from "./components/CrystalBall.jsx";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decoded = jwt_decode(token);
      setCurrentUser(decoded);
    } else {
      setCurrentUser(null);
    }
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
    }
  };

  return (
    <Router>
      <div className="main-div">
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route
          path="/profile"
          render={(props) =>
            currentUser ? (
              <Profile
                {...props}
                handleLogout={handleLogout}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          path="/crystal-ball"
          render={(props) => (
            <CrystalBall
              {...props}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
