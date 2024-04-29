import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import "./App.css";
import { Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/registrarse"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/iniciarsesion"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/" element={authUser ? <Home /> : <Navigate to="/registrarse" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
