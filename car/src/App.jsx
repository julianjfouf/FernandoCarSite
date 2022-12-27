import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
