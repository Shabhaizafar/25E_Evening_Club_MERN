import { useEffect, useState } from 'react';
import './App.css';
import Formroute from './pages/Formroute';


function App() {
  const [msg,setMsg] = useState("");

  useEffect(function(){
    fetch("http://127.0.0.1:5000/firstroute").then((data)=>{
      data.json().then((data2)=>{
        setMsg(data2.firstname);
      });
    });
  },[]);

  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <p>Msg : {msg}</p>
      <Formroute/>
    </div>
  );
}

export default App;
