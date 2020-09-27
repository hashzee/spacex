import React, {useState} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [status, setStatus] = useState('past');

  const handleClick = (st:string) =>{
    setStatus(st);
  }

  return (
    <Router>
      <div>
        <NavBar status={status} handleClick={handleClick} />
        <br />
        <Routes>
          <Route path="/" element={<Launches status={status} />} />
          <Route path="/:id" element={<LaunchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
