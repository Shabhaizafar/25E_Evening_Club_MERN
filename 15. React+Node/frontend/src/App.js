import logo from './logo.svg';
import './App.css';

 import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div>
      <h1>React - Node.js Connection</h1>
      <p>Message from backend: {msg}</p>
    </div>
  );
}

export default App;

