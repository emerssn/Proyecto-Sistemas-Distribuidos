import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/registrarse" element={<SignUp />} />
          <Route path="/iniciarsesion" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
