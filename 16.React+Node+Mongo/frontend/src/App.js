import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';
import  Profile from "./pages/Profile";

function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/firstroute")
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.firstname);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <p>Msg : {msg}</p>

      {/* Buttons with links */}
      <div className="button-group">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
